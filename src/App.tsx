import { motion } from "framer-motion"

export default function App() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center text-3xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      🚗 Roadtrip Planner
    </motion.div>
  )
}