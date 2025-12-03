import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "33 - Приложение для зикра | Поминание Аллаха",
  description: "33 - мобильное приложение для подсчёта зикров. Отслеживайте свою духовную активность, читайте утренние и вечерние азкары, изучайте 99 имён Аллаха.",
  keywords: "зикр, дуа, намаз, ислам, приложение, мусульмане, азкар, тасбих, 99 имён Аллаха",
  authors: [{ name: "33 App" }],
  openGraph: {
    title: "33 - Приложение для зикра",
    description: "Поминайте Аллаха многократно. Отслеживайте свою духовную активность.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
