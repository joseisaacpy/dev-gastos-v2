// Links
import itemsNav from "@/utils/itensNav";

// Components ui
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

// Link
import Link from "next/link";

export default function Painel() {
  return (
    <section className="p-6 mx-auto flex flex-col gap-4">
      <div className=" text-center">
        {/* Textos */}
        <h1 className="text-xl md:text-3xl font-bold">Seja bem-vindo!</h1>
        <p className="text-lg">Escolha uma das opções para continuar</p>
      </div>
      {/* Div Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map dos links */}
        {itemsNav.map((item) => (
          <Card
            key={item.name}
            className={"hover:scale-95 transition-all duration-300"}
          >
            <CardHeader className={"flex"}>
              <div className="flex flex-col gap-2.5">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <span className="ml-auto">{item.icon}</span>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Link href={item.href}>
                <Button
                  variant="default"
                  size="lg"
                  className={"cursor-pointer"}
                >
                  Acessar
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
