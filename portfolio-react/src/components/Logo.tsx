import { motion } from "framer-motion"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 78.5 78.5"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <rect x="15.97" y="20.53" width="1" height="20.88" fill="#1A1A1A" />
      <rect x="22.59" y="16.83" width="1" height="9.84" transform="translate(-6.73 32.57) rotate(-63.24)" fill="#1A1A1A" />
      <rect x="18.19" y="22.13" width="1" height="16.36" fill="#1A1A1A" />
      <rect x="23.2" y="20.33" width="1" height="8.73" transform="translate(-9.52 32.91) rotate(-60.07)" fill="#1A1A1A" />
      <rect x="29.17" y="24" width="8.93" height="1" transform="translate(-7.88 21.58) rotate(-32.05)" fill="#1A1A1A" />
      <rect x="29.11" y="21.52" width="9.05" height="1" transform="translate(-6.56 22.07) rotate(-33.29)" fill="#1A1A1A" />
      <rect x="38.52" y="21.06" width="1" height="25.22" fill="#1A1A1A" />
      <path d="m43.65,34.82l-.39-.92c5.7-2.4,8.58-4.72,8.56-6.91-.01-2.13-2.79-4.33-8.25-6.54l.38-.93c5.96,2.41,8.86,4.85,8.88,7.46.02,2.67-2.98,5.23-9.18,7.83Z" fill="#1A1A1A" />
      <path d="m41.98,34.13l-.42-.91c4.86-2.22,7.39-4.36,7.32-6.18-.07-1.72-2.48-3.49-6.98-5.12l.34-.94c5.05,1.83,7.55,3.8,7.63,6.02.09,2.33-2.49,4.66-7.9,7.13Z" fill="#1A1A1A" />
      <rect x="45.55" y="33.05" width="1" height="10.92" transform="translate(-12.73 50.72) rotate(-51.64)" fill="#1A1A1A" />
      <rect x="41.27" y="39.25" width="1" height="7.03" fill="#1A1A1A" />
      <rect x="45.36" y="35.17" width="1" height="11.38" transform="translate(-14.6 51.66) rotate(-51.82)" fill="#1A1A1A" />
      <rect x="51.75" y="38.85" width="11.92" height="1" transform="translate(-11.29 28.46) rotate(-25.31)" fill="#1A1A1A" />
      <rect x="52.4" y="41.36" width="11" height="1" transform="translate(-12.73 31.05) rotate(-27.16)" fill="#1A1A1A" />
      <rect x="62.6" y="42.39" width="1" height="27.06" fill="#1A1A1A" />
      <rect x="65.04" y="39.35" width="1" height="28.18" fill="#1A1A1A" />
      <path d="m78.5,78.5H0V0h78.5v78.5Zm-77.6-1h76.5V1H1v76.5Z" fill="#1A1A1A" />
    </motion.svg>
  )
}
