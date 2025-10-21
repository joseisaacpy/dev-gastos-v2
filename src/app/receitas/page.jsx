// Importa os componentes ui
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Icons
import { Trash, Edit } from "lucide-react";

export default function Receitas() {
  const receitas = [{ id: 1, data: "2025-10-10", nome: "Cinema", valor: 75.5 }];
  return (
    <section className="px-2 md:p-0">
    
      <div className="overflow-x-auto">
        <Table>
          <TableCaption className={"font-bold"}>Suas Receitas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className={"font-bold"}>Data</TableHead>
              <TableHead className={"font-bold"}>Título</TableHead>
              <TableHead className={"font-bold"}>Valor</TableHead>
              <TableHead className={"font-bold"}>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Adiciona dados com map */}
            {receitas.map((receita) => {
              return (
                <TableRow key={receita.id}>
                  <TableCell>{receita.data}</TableCell>
                  <TableCell>{receita.nome}</TableCell>
                  <TableCell>{receita.valor}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 items-center">
                      {/* Excluir */}
                      <Button className={"cursor-pointer"} size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                      {/* Editar */}
                      <Button className={"cursor-pointer"} size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
