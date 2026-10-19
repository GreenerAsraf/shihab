import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shihabuddin.law"),
  title: "Shihab Uddin | Apprentice Lawyer | Judge's Court, Chittagong",
  description:
    "Official legal portfolio of Shihab Uddin, Apprentice Lawyer at Judge's Court, Chittagong. LL.B. from Southern University Bangladesh, alumnus of Govt. City College, Chittagong. Dedicated counsel in civil litigation, criminal defense, property law, and legal drafting.",
  keywords: [
    "Shihab Uddin",
    "Lawyer Chittagong",
    "Apprentice Lawyer",
    "Judge's Court Chittagong",
    "Southern University Bangladesh Law",
    "Govt City College Chittagong",
    "Bangladesh Legal Counsel",
    "Civil Litigation Chittagong",
    "Criminal Defense Chittagong",
    "NI Act Section 138",
  ],
  authors: [{ name: "Shihab Uddin, LL.B." }],
  openGraph: {
    title: "Shihab Uddin | Apprentice Lawyer | Judge's Court, Chittagong",
    description:
      "Diligent legal advocacy, statutory precision, and dedicated chamber practice at Judge's Court, Chittagong, Bangladesh.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/picture/shihab-1.webp",
        width: 1122,
        height: 1032,
        alt: "Shihab Uddin, Apprentice Lawyer at Judge's Court, Chittagong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shihab Uddin | Apprentice Lawyer | Judge's Court, Chittagong",
    description:
      "Diligent legal advocacy, statutory precision, and dedicated chamber practice at Judge's Court, Chittagong, Bangladesh.",
    images: ["/picture/shihab-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#ECEEF2] font-sans antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}

