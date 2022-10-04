import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 4000)
    }, [navigate])

    return (
        <div>
            404 not found!
        </div>
  )
}
