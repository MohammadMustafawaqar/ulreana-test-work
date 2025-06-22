import { cn } from "@/lib/utils"

const sizeVariants = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-4",
  lg: "h-14 w-14 border-4",
}

export function Spinner({
  size = "md",
  message = "Loading...",
  className,
}: {
  size?: keyof typeof sizeVariants
  message?: string
  className?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={cn(
          "animate-spin rounded-full border-muted border-t-gray-600 dark:border-t-gray-100",
          sizeVariants[size],
          className
        )}
      />
      {message && (
        <p className="text-muted-foreground text-sm">{message}</p>
      )}
    </div>
  )
}
