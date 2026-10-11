export type Progress = { completed: string[]; hintsUsed: Record<string, number> }
const STORAGE_KEY = 'birthday-escape-progress-v1'

export function loadProgress(): Progress {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value) return JSON.parse(value) as Progress
  } catch { /* Storage can be unavailable in private browsing; in-memory play still works. */ }
  return { completed: [], hintsUsed: {} }
}

export function saveProgress(progress: Progress) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)) } catch { /* Best-effort persistence. */ }
}
