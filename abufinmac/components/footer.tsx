import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Personal Blog</h3>
            <p className="text-muted-foreground">
              Sharing thoughts, experiences, and insights on technology, travel, and mindful living.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/tech" className="text-muted-foreground hover:text-foreground">
                  Tech
                </Link>
              </li>
              <li>
                <Link href="/categories/travel" className="text-muted-foreground hover:text-foreground">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/categories/lifestyle" className="text-muted-foreground hover:text-foreground">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email:{" "}
              <a href="mailto:contact@personalblog.com" className="hover:text-foreground">
                contact@personalblog.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
