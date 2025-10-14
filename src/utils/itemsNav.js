// Icons
import { DollarSign, BarChart3, Settings, PlusCircle } from "lucide-react";

const itemsNav = [
  {
    name: "Gastos",
    description: "Veja e gerencie todos os seus gastos registrados.",
    href: "/gastos",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    name: "Novo Gasto",
    description: "Adicione uma nova despesa ao seu controle.",
    href: "/novo-gasto",
    icon: <PlusCircle className="w-5 h-5" />,
  },
  {
    name: "Nova Receita",
    description: "Registre um novo ganho ou entrada de dinheiro.",
    href: "/nova-receita",
    icon: <PlusCircle className="w-5 h-5" />,
  },
  {
    name: "Receitas",
    description: "Acompanhe todas as suas entradas de renda.",
    href: "/receitas",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    name: "Resumo",
    description: "Visualize um balanço geral das suas finanças.",
    href: "/resumo",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    name: "Configurações",
    description: "Ajuste preferências da conta e do sistema.",
    href: "/config",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default itemsNav;
