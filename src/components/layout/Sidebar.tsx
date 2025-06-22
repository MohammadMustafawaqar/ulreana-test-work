import { SidebarItem } from "@/lib/types/types";
import { FileText, LayoutDashboard, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import SidebarLink from "./partials/SidebarLink";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const sidebarLinks: SidebarItem[] = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/admin/posts',
    label: 'Posts',
    icon: FileText,
  },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false); 
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 bg-opacity-90 z-40 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`z-50 md:relative md:translate-x-0 w-64 h-full bg-white dark:bg-neutral-800 shadow-md 
          transform transition-transform duration-300 ease-in-out
          fixed top-0 left-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between h-16 font-bold border-b dark:border-neutral-700">
          <div className="text-center ml-4">Dashboard</div>
          <Button variant="link" onClick={() => setOpen(false)} className="visible md:hidden">
            <X />
          </Button>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {sidebarLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClick={handleLinkClick}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
