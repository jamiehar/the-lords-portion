'use client'
import { useState, useEffect } from 'react'
import { STORAGE_KEYS } from '@/lib/constants'

export interface UnlockedState {
  wall: boolean
  merchant: boolean
  test: boolean
  escape: boolean
}

const EMPTY: UnlockedState = { wall: false, merchant: false, test: false, escape: false }

export function useProgress() {
  const [unlocked, setUnlocked] = useState<UnlockedState>(EMPTY)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setUnlocked({
      wall: !!localStorage.getItem(STORAGE_KEYS.wall),
      merchant: !!localStorage.getItem(STORAGE_KEYS.merchant),
      test: !!localStorage.getItem(STORAGE_KEYS.test),
      escape: !!localStorage.getItem(STORAGE_KEYS.escape),
    })
    setLoaded(true)
  }, [])

  const unlock = (key: keyof typeof STORAGE_KEYS) => {
    localStorage.setItem(STORAGE_KEYS[key], '1')
    setUnlocked(prev => ({ ...prev, [key]: true }))
  }

  const resetAll = () => {
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k))
    setUnlocked(EMPTY)
  }

  return { unlocked, unlock, resetAll, loaded }
}
