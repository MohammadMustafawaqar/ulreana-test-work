import { Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Mustafa Waqar</h3>
          <p className="text-sm">
            Crafting scalable web apps with clean code & seamless UX.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 uppercase">Quick Links</h4>
          <ul className="space-y-2">
          <li><a target="__blank" href="https://mustafawaqar.vercel.app/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Me on Vercel</a></li>
            <li><a target="__blank" href="https://mustafawaqar.vercel.app/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About Me</a></li>
            <li><a target="__blank" href="https://mustafawaqar.vercel.app/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
            <li><a target="__blank" href="https://mustafawaqar.vercel.app/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 uppercase">Connect with Me</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/mohammadmustafawaqar" className="hover:text-blue-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/mohammadmustafawaqar" className="hover:text-gray-900 dark:hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/mustafa-waaqar" className="hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Mustafa Waqar. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
