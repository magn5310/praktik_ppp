import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function getParticleCount() {
  const width = window.innerWidth
  if (width < 640) return 15
  if (width < 1024) return 25
  return 50
}



const CONNECTION_DISTANCE = 140
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

    let canvasW = canvas.offsetWidth
    let canvasH = canvas.offsetHeight

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvasW = canvas.offsetWidth
      canvasH = canvas.offsetHeight
      canvas.width = canvasW * dpr
      canvas.height = canvasH * dpr
      ctx!.scale(dpr, dpr)
    }

    function createParticles() {
      if (!canvas) return
      const particles: Particle[] = []
      for (let i = 0; i < getParticleCount(); i++) {
        particles.push({
          x: Math.random() * canvasW,
          y: Math.random() * canvasH,
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
      const w = canvasW
      const h = canvasH
      const particles = particlesRef.current

      ctx.clearRect(0, 0, w, h)

    
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]


        p.vx *= 0.99
        p.vy *= 0.99


        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > BASE_SPEED * 3) {
          p.vx = (p.vx / speed) * BASE_SPEED * 3
          p.vy = (p.vy / speed) * BASE_SPEED * 3
        }
        if (speed < BASE_SPEED * 0.5) {
          const angle = Math.atan2(p.vy, p.vx)
          p.vx = Math.cos(angle) * BASE_SPEED * 0.07
          p.vy = Math.sin(angle) * BASE_SPEED * 0.07
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

    const resizeHandler = () => {
      resize()
      createParticles()
    }
    window.addEventListener("resize", resizeHandler)


    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resizeHandler)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none sm:pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  )
}
