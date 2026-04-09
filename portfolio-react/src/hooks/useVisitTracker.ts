import { useEffect, useRef } from "react"
import { supabase } from "@/lib/supabase"

export function useVisitTracker() {
  const tracked = useRef(false)

  useEffect(() => {
    if (tracked.current) return
    if (import.meta.env.DEV) return
    tracked.current = true

    const isOwner = localStorage.getItem("is_owner") === "true"

    supabase.from("visits").insert({
      is_owner: isOwner,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    }).then()
  }, [])
}
