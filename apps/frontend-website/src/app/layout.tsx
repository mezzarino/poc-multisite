import "../styles/globals.css";
// include styles from the ui package
import "shared-components-mezzarino/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-400">
      <body>{children}</body>
    </html>
  );
}
