'use client'

import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }: { children: React.ReactNode }) {
  const [el] = useState(() => document.createElement('div'))

  useLayoutEffect(() => {
    document.body.appendChild(el)
    return () => { document.body.removeChild(el) }
  }, [el])

  return createPortal(children, el)
}
