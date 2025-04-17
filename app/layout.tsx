import "./globals.css";

export const metadata = {
  title: "Horbach Dev",
  description: "Web development services in Brazil and the United States",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
