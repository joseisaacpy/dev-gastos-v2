// Importa o Zod
import * as z from "zod";

export const formCadastroSchema = z.object({
  nome: z.string().min(3, "Descrição muito curta"),
  descricao: z.string().optional(),
  valor: z.number().positive("O valor deve ser positivo"),
  data: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Data inválida"),
  categoria: z.string().default("Outros"),
});
