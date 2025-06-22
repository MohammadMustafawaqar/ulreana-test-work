"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, LogOut, Settings, User } from "lucide-react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function AvatarMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    axios.post('/api/logout').then(() => {
      router.push('/login')
    })
  }

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Image
          src="/profile.jpg"
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
          priority
        />
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            <User className="inline-block mr-2 w-4 h-4" />
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            <Settings className="inline-block mr-2 w-4 h-4" />
            Settings
          </a>


          <button
            onClick={handleLogout}
            type="button"
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            <LogOut className="inline-block mr-2 w-4 h-4" />
            Logout
          </button>

        </div>
      )}
    </div>
  )
}
