"use client"

import { Dispatch, SetStateAction } from "react"
import { Menu } from "lucide-react"
import AvatarMenu from "../avatar/AvatarMenu"
import { ThemeToggle } from "../ThemeToggle"

interface NavbarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({ setSidebarOpen }: NavbarProps) {
  return (
    <header className="flex items-center justify-between md:justify-end h-16 bg-white dark:bg-neutral-800  px-4 border-b">
      <button
        aria-label="Toggle sidebar"
        className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-2">
      <ThemeToggle />
        <AvatarMenu />
      </div>
    </header>
  )
}
