import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

// Importando a fonte Montserrat do Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Disruption Summer Summit - 20ª Edição",
  description: "A energia do verão. O palco da transformação, onde líderes se reúnem para criar o próximo nível.",
  generator: "v0.dev",
  icons: {
    icon: '/images/favicon-enjoy.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K22T4T98');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.className} bg-dark text-light`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K22T4T98"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <header
          className="opacity-100 my-[0]"
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "none",
          }}
        >
          <img
            src="https://enjoywork.com.br/wp-content/uploads/2025/07/LOGO-EnjoyDisruption-Branco-PNG-scaled.png"
            alt="Enjoy Disruption Logo"
            style={{ height: "70px" }}
          />
        </header>
        {children}
      </body>
    </html>
  )
}
