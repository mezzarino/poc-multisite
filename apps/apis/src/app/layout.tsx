import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-yellow-300">
      <body>{children}</body>
    </html>
  );
}
