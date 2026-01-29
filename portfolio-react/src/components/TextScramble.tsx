import { useEffect, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"

interface TextScrambleProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export function TextScramble({
  text,
  delay = 0,
  duration = 1200,
  className = "",
}: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(() => scrambleString(text))

  useEffect(() => {
    let cancelled = false
    let interval: ReturnType<typeof setInterval>

    const totalChars = text.length
    const intervalMs = Math.max(16, duration / (totalChars * 3))
    let frame = 0

    const timer = setTimeout(() => {
      interval = setInterval(() => {
        if (cancelled) return

        frame++
        const progress = (frame * intervalMs) / duration
        const resolved = Math.floor(progress * totalChars)

        if (resolved >= totalChars) {
          setDisplayed(text)
          clearInterval(interval)
          return
        }

        let result = ""
        for (let i = 0; i < totalChars; i++) {
          if (text[i] === " ") {
            result += " "
          } else if (i < resolved) {
            result += text[i]
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }
        setDisplayed(result)
      }, intervalMs)
    }, delay)

    return () => {
      cancelled = true
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [text, delay, duration])

  return <span className={className}>{displayed}</span>
}

function scrambleString(text: string): string {
  let result = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      result += " "
    } else {
      result += CHARS[Math.floor(Math.random() * CHARS.length)]
    }
  }
  return result
}
