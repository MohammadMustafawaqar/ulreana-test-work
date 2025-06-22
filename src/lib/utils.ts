import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getImageUrl(id: number) {
  return `https://picsum.photos/seed/${id}/500/300`
}

export function pickRandom<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length]
}