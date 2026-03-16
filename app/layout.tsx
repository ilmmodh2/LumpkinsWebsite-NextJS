import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lumpkin's Insurance Agency | Beaumont, TX",
  description:
    "Your trusted Texas insurance partner since 1992. Auto, home, life, business insurance and more. 600+ carriers, 4,000+ satisfied clients in Beaumont, TX.",
  keywords:
    "insurance Beaumont TX, auto insurance, home insurance, life insurance, business insurance, flood insurance, Lumpkins Insurance",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlex.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
