import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AdminLogin } from "./AdminLogin"

interface Visit {
  id: number
  visited_at: string
  is_owner: boolean
  user_agent: string | null
  referrer: string | null
}

export function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem("is_owner") === "true"
  )
  const [visits, setVisits] = useState<Visit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authenticated) return

    async function fetchVisits() {
      const { data } = await supabase
        .from("visits")
        .select("*")
        .order("visited_at", { ascending: false })
        .limit(200)

      setVisits(data ?? [])
      setLoading(false)
    }

    fetchVisits()
  }, [authenticated])

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />
  }

  const totalVisits = visits.length
  const ownerVisits = visits.filter((v) => v.is_owner).length
  const visitorVisits = totalVisits - ownerVisits

  const today = new Date().toISOString().slice(0, 10)
  const visitsToday = visits.filter(
    (v) => v.visited_at.slice(0, 10) === today
  ).length

  function handleLogout() {
    localStorage.removeItem("is_owner")
    window.location.hash = ""
    window.location.reload()
  }

  function truncate(str: string | null, len: number) {
    if (!str) return "—"
    return str.length > len ? str.slice(0, len) + "…" : str
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString()
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Visit Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => (window.location.hash = "")}>
              Back to site
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {loading ? (
          <p className="text-muted">Loading visits…</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard title="Total Visits" value={totalVisits} />
              <StatCard title="Visitors" value={visitorVisits} />
              <StatCard title="Owner" value={ownerVisits} />
              <StatCard title="Today" value={visitsToday} />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Visits</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted">
                      <th className="pb-2 pr-4">Time</th>
                      <th className="pb-2 pr-4">Who</th>
                      <th className="pb-2 pr-4">Referrer</th>
                      <th className="pb-2">User Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visits.slice(0, 50).map((visit) => (
                      <tr key={visit.id} className="border-b border-border/50">
                        <td className="py-2 pr-4 whitespace-nowrap">
                          {formatDate(visit.visited_at)}
                        </td>
                        <td className="py-2 pr-4">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                              visit.is_owner
                                ? "bg-accent/20 text-accent"
                                : "bg-border text-muted"
                            }`}
                          >
                            {visit.is_owner ? "Owner" : "Visitor"}
                          </span>
                        </td>
                        <td className="py-2 pr-4">{truncate(visit.referrer, 40)}</td>
                        <td className="py-2 text-muted">{truncate(visit.user_agent, 60)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {visits.length === 0 && (
                  <p className="text-muted text-center py-8">No visits recorded yet.</p>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </CardContent>
    </Card>
  )
}
