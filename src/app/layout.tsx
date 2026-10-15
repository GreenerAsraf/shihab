import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        url: "/shihab-uddin.jpg",
        width: 1024,
        height: 1024,
        alt: "Shihab Uddin, Apprentice Lawyer at Judge's Court, Chittagong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shihab Uddin | Apprentice Lawyer | Judge's Court, Chittagong",
    description:
      "Diligent legal advocacy, statutory precision, and dedicated chamber practice at Judge's Court, Chittagong, Bangladesh.",
    images: ["/shihab-uddin.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#17191D] antialiased selection:bg-[#B89A62]/30 selection:text-[#101B2C]">
        {children}
      </body>
    </html>
  );
}
