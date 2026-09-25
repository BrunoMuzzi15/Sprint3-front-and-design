import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

// Credenciais de demonstração (login mockado, sem back-end).
const DEMO_USER = {
  email: 'admin@jovi.com',
  password: 'jovi123',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const armazenado = localStorage.getItem('jovi_user')
    return armazenado ? JSON.parse(armazenado) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('jovi_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('jovi_user')
    }
  }, [user])

  function login(email, password) {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setUser({ email })
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook customizado: encapsula o acesso ao contexto de autenticação,
// separando a lógica de autenticação dos componentes visuais.
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de um <AuthProvider>')
  }

  return context
}
