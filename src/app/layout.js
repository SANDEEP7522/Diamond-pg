import "./globals.css";

export const metadata = {
  title: "Diamond PG | Premium Girls PG Near Fortis Hospital, Noida",
  description: "Experience premium living at Diamond Girls PG. Modern, safe, and beautifully designed rooms for women near Fortis Hospital, Sector 63, Noida.",
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
