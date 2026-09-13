import { useMemo, useState } from 'react'

// No backend, so "likes" are a per-browser localStorage toggle layered on a
// stable per-site seed count (deterministic from the id, not random per
// load) — enough to make the number feel real without pretending it's a
// shared global count.
const KEY = 'scrollhaus:likes'

function seedCount(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return 3 + (Math.abs(h) % 38)
}

function readLiked(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
  } catch {
    return new Set()
  }
}

function writeLiked(set: Set<string>) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]))
  } catch {
    // storage unavailable (private mode, quota) — the toggle still works for
    // the rest of this session via React state, it just won't persist
  }
}

export function useLike(id: string) {
  const [liked, setLiked] = useState(() => readLiked().has(id))
  const base = useMemo(() => seedCount(id), [id])

  const toggle = () => {
    const set = readLiked()
    if (set.has(id)) set.delete(id)
    else set.add(id)
    writeLiked(set)
    setLiked(set.has(id))
  }

  return { liked, count: base + (liked ? 1 : 0), toggle }
}
