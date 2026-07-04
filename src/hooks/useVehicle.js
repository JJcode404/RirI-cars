import { useEffect, useState } from 'react'
import { fetchVehicleById } from '../lib/api'

export default function useVehicle(id) {
  const [vehicle, setVehicle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    setLoading(true)
    setVehicle(null)
    fetchVehicleById(id)
      .then((data) => {
        if (!cancelled) setVehicle(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [id])

  return { vehicle, loading, error }
}
