import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './supabase'

type AuthState = {
  session: Session | null
  loading: boolean
  entitled: boolean
  passwordRecovery: boolean
  signInWithPassword: (email: string, password: string) => Promise<{ error: string | null }>
  setPassword: (password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [entitled, setEntitled] = useState(false)
  const [passwordRecovery, setPasswordRecovery] = useState(false)

  const checkEntitlement = async (email: string | undefined) => {
    if (!email) {
      setEntitled(false)
      return
    }
    const { data } = await supabase
      .from('purchases')
      .select('id')
      .eq('email', email)
      .eq('status', 'completed')
      .limit(1)
      .maybeSingle()
    setEntitled(!!data)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      checkEntitlement(data.session?.user?.email)
      setLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession)
      checkEntitlement(newSession?.user?.email)
      if (event === 'PASSWORD_RECOVERY') setPasswordRecovery(true)
      if (event === 'SIGNED_OUT') setPasswordRecovery(false)
    })

    return () => sub.subscription.unsubscribe()
  }, [])

  const signInWithPassword: AuthState['signInWithPassword'] = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  const setPassword: AuthState['setPassword'] = async (password) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (!error) setPasswordRecovery(false)
    return { error: error?.message ?? null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{ session, loading, entitled, passwordRecovery, signInWithPassword, setPassword, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
