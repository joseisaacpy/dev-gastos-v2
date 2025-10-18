// Importa Card
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardDashboard({ titulo, valor, icon }) {
  return (
    <Card className={"w-full hover:scale-95 transition-all duration-300"}>
      <CardHeader>
        <div
          className={
            "flex flex-row items-center justify-center space-y-0 pb-2"
          }
        >
          <CardTitle className={"text-lg sm:text-xl font-bold"}>
            {titulo}
          </CardTitle>
          <span className="ml-auto w-4 h-4">{icon}</span>
        </div>
      </CardHeader>
      <CardContent className={"flex justify-end"}>
        <p className="text-xl md:text-2xl font-bold text-foreground">{valor}</p>
      </CardContent>
    </Card>
  );
}
