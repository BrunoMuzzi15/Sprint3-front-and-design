import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

// Envolve rotas privadas: só renderiza os filhos se o usuário
// estiver autenticado, caso contrário redireciona para o login.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
