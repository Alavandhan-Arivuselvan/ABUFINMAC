import Link from "next/link"
import Image from "next/image"
export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={"/logo.png"} 
                          alt="logo"
                          className="mb-2"
                          width={70}
                          height={30}/>    
            <span className="font-bold">ABUFINMAC</span>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abufinmac co. All rights reserved.</p>
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
