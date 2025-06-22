export default function Footer() {
    return (
      <footer className="h-12 bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    )
  }
  