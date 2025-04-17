import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span className="font-bold">Nebula</span>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nebula Blog. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/contact" className="text-xs text-muted-foreground hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
