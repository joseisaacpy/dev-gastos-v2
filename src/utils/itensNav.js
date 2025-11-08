// Icons
import { Home, DollarSign, BarChart3, PlusCircle } from "lucide-react";

const itemsNav = [
  {
    name: "Início",
    description: "Acesse o painel de controle.",
    href: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    name: "Gastos",
    description: "Veja e gerencie todos os seus gastos registrados.",
    href: "/gastos",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    name: "Novo Gasto",
    description: "Adicione uma nova despesa ao seu controle.",
    href: "/novo-gasto",
    icon: <PlusCircle className="w-6 h-6" />,
  },
  {
    name: "Nova Receita",
    description: "Registre um novo ganho ou entrada de dinheiro.",
    href: "/nova-receita",
    icon: <PlusCircle className="w-6 h-6" />,
  },
  {
    name: "Receitas",
    description: "Acompanhe todas as suas entradas de renda.",
    href: "/receitas",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    name: "Resumo",
    description: "Visualize um balanço geral das suas finanças.",
    href: "/dashboard",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default itemsNav;
