import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface AdminLoginProps {
  onSuccess: () => void
}

export function AdminLogin({ onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      localStorage.setItem("is_owner", "true")
      onSuccess()
    } else {
      toast.error("Wrong password")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
              autoFocus
            />
            <Button type="submit">Log in</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
