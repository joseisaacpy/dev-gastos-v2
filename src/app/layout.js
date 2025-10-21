// Importa a sessão
import Provider from "@/components/SessionProvider";

// Importa o CSS
import "./globals.css";

// Importar sidebar
import Sidebar from "@/components/sidebar";

// Fonte local
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        {/* Provider */}
        <Provider>
          {/* Sidebar */}
          <Sidebar />
          {/* Conteúdo */}
          <main className="md:ml-20">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
