import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tony Lenta | Official Website - The King of Romantiqueo",
  description:
    "Official website of Tony Lenta, Puerto Rican reggaeton artist. Stream music, tour dates, booking info. Experience the evolution of Romantiqueo.",
  keywords: [
    "Tony Lenta",
    "Reggaeton",
    "Romantiqueo",
    "Puerto Rico",
    "Latin music",
  ],
  openGraph: {
    title: "Tony Lenta | The Melodic King of Romantiqueo",
    description:
      "Official website of Tony Lenta. Stream music, check tour dates, and join the Lentáticos community.",
    url: "https://www.tonylenta.com",
    siteName: "Tony Lenta Official",
    images: [{ url: "/tony-white-shirt.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Lenta | Official Website",
    description: "The Melodic King of Romantiqueo",
    images: ["/tony-white-shirt.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-obsidian text-white antialiased">
        {/* Film grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
