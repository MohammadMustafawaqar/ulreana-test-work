import { LucideIcon } from "lucide-react"

export type SidebarItem = {
    href: string
    label: string
    icon: LucideIcon
}

export type StatCardProps = {
    title: string
    count: number
    icon: React.ElementType
    color: string
    loading?: boolean
}


export type Author = {
    name: string;
    avatarUrl: string;
};

export type PostHeaderProps = {
    title: string;
    heroImageUrl: string;
    author: Author;
    formattedDate: string;
    category: string;
    body: string;
};

