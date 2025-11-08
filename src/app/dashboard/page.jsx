// Importa o card reaproveitável
import CardDashboard from "@/components/CardDashboard";
import ChartOverview from "@/components/ChartOverview";
// Icons
import { Users, DollarSign, BarChart2, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="py-4 px-2 flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
      {/* Grid de cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardDashboard titulo="Total de clientes" valor="10" icon={<Users />} />
        <CardDashboard
          titulo="Gastos"
          valor="25"
          icon={<DollarSign className="text-red-800" />}
        />
        <CardDashboard
          titulo="Lucro"
          valor="R$ 1.250"
          icon={<DollarSign className="text-blue-800" />}
        />
        <CardDashboard titulo="Novos leads" valor="8" icon={<BarChart2 />} />
        <CardDashboard titulo="Pendências" valor="3" icon={<AlertCircle />} />
      </div>
      {/* Gráficos */}
      <ChartOverview />
    </section>
  );
}
