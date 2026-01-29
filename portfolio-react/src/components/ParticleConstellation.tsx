import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const PARTICLE_COUNT = 100
const CONNECTION_DISTANCE = 140
const MOUSE_RADIUS = 180
const MOUSE_REPEL_STRENGTH = 0.04
const BASE_SPEED = 0.3
const PARTICLE_COLOR = "201, 162, 39" 

export function ParticleConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx!.scale(dpr, dpr)
    }

    function createParticles() {
      if (!canvas) return
      const particles: Particle[] = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * BASE_SPEED,
          vy: (Math.random() - 0.5) * BASE_SPEED,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
      particlesRef.current = particles
    }

    function animate() {
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const mouse = mouseRef.current
      const particles = particlesRef.current

      ctx.clearRect(0, 0, w, h)

    
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]


        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          p.vx += (dx / dist) * force * MOUSE_REPEL_STRENGTH
          p.vy += (dy / dist) * force * MOUSE_REPEL_STRENGTH
        }


        p.vx *= 0.99
        p.vy *= 0.99


        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > BASE_SPEED * 3) {
          p.vx = (p.vx / speed) * BASE_SPEED * 3
          p.vy = (p.vy / speed) * BASE_SPEED * 3
        }

        p.x += p.vx
        p.y += p.vy

  
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10


        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const cdx = p.x - p2.x
          const cdy = p.y - p2.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)

          if (cdist < CONNECTION_DISTANCE) {
            const lineOpacity =
              (1 - cdist / CONNECTION_DISTANCE) * 0.15
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        if (dist < MOUSE_RADIUS) {
          const lineOpacity = (1 - dist / MOUSE_RADIUS) * 0.3
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${lineOpacity})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    createParticles()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  )
}
