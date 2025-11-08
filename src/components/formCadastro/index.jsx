"use client";

// Importa o schema
import { formCadastroSchema } from "@/utils/FormCadastroSchema";
// Importa o use form
import { useForm } from "react-hook-form";
// Importa zod resolver
import { zodResolver } from "@hookform/resolvers/zod";
// Importa os componentes ui
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../ui/form";

export default function FormCadastro({
  type = "gasto",
  onSubmit,
  defaultValues,
}) {
  const form = useForm({
    resolver: zodResolver(formCadastroSchema),
    defaultValues: defaultValues || {
      nome: "",
      descricao: "",
      valor: "",
      data: "",
      categoria: "Outros",
    },
  });

  //   Renderiza o form
  return (
    <Form {...form}>
      <form
        onSubmit={() => alert(1)}
        className="space-y-5 p-2 max-w-2xl mx-auto border border-black/50 rounded-md"
      >
        {/* Titulo */}
        <h2 className="font-bold text-xl md:text-2xl">
          Novo{type === "gasto" ? " Gasto" : " Receita"}
        </h2>
        {/* Nome */}
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-lg md:text-xl"}>Nome:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: Cinema" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Descrição */}
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-lg md:text-xl"}>Descrição:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: Saída com amigos" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Valor */}
        <FormField
          control={form.control}
          name="valor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-lg md:text-xl"}>Valor:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: R$ 100,00" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Categoria */}
        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-lg md:text-xl"}>Categoria:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: Alimentação" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Data */}
        <FormField
          control={form.control}
          name="data"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-lg md:text-xl"}>
                Data <span className="text-sm"> (por padrão, hoje):</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="date" placeholder="Ex: 09/10/2025" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Botão */}
        <Button type="submit" className="cursor-pointer w-full">
          Salvar {type === "gasto" ? "Gasto" : "Receita"}
        </Button>
      </form>
    </Form>
  );
}
