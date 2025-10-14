import "./globals.css";

export const metadata = {
  title: "Dev Gastos V2",
  description: "Sistema de controle de gastos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
