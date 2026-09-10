import { useState } from 'react'
import { useAuth } from '@/lib/auth'

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const { signInWithPassword, setPassword, passwordRecovery } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPasswordInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setBusy(true)
    const { error } = await signInWithPassword(email, password)
    setBusy(false)
    if (error) setError(error)
    else onClose()
  }

  const submitNewPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (password.length < 8) {
      setError('Use at least 8 characters.')
      return
    }
    setBusy(true)
    const { error } = await setPassword(password)
    setBusy(false)
    if (error) setError(error)
    else onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {passwordRecovery ? (
          <>
            <h2 className="text-[16px] font-semibold text-white">Set your password</h2>
            <p className="mt-1.5 text-[12px] leading-relaxed text-white/45">
              You're signed in from your purchase link — pick a password for future logins.
            </p>
            <form onSubmit={submitNewPassword} className="mt-5 flex flex-col gap-3">
              <input
                type="password"
                required
                autoFocus
                placeholder="New password"
                value={password}
                onChange={e => setPasswordInput(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-white outline-none focus:border-white/25"
              />
              {error && <p className="text-[12px] text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="mt-1 rounded-lg bg-white py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-white/85 disabled:opacity-50"
              >
                {busy ? 'Saving…' : 'Save password'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-[16px] font-semibold text-white">Log in</h2>
            <p className="mt-1.5 text-[12px] leading-relaxed text-white/45">
              Use the email you paid with. First time? Check your inbox for the account-setup link
              sent right after checkout.
            </p>
            <form onSubmit={submitLogin} className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                required
                autoFocus
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-white outline-none focus:border-white/25"
              />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={e => setPasswordInput(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-white outline-none focus:border-white/25"
              />
              {error && <p className="text-[12px] text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="mt-1 rounded-lg bg-white py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-white/85 disabled:opacity-50"
              >
                {busy ? 'Logging in…' : 'Log in'}
              </button>
            </form>
          </>
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-[12px] text-white/35 hover:text-white/60"
        >
          Close
        </button>
      </div>
    </div>
  )
}
