// Importa o CSS
import "./globals.css";

// Fonte
import localFont from "next/font/local";
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

// Meta dados
export const metadata = {
  title: "Dev Gastos V2",
  description: "Sistema de controle de gastos",
};

// Importar sidebar
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        {/* Sidebar */}
        <Sidebar />
        {/* Conteúdo */}
        <main className="md:ml-20">{children}</main>
      </body>
    </html>
  );
}
