import "./globals.css";

export const metadata = {
  title: "Dreamkid AI",
  description: "A kid reading app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
