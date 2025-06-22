"use client"

import { ReactNode, useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Breadcrumb from "../Breadcrumb"

export default function Layout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-neutral-700 overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="sticky top-0 z-10">
          <Navbar setSidebarOpen={setSidebarOpen} />
          <Breadcrumb />
        </div>
        <main className="flex-1 overflow-y-auto p-5 m-5">
          <div className="min-h-full max-w-7xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
