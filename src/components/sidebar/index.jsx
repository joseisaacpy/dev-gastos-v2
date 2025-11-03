// Importar image
import Image from "next/image";
// Link
import Link from "next/link";

// Importar componentes ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Importar os links
import itemsNav from "@/utils/itensNav";

// Icons
import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  return (
    // Container principal
    <div>
      {/* Menu desktop */}
      <aside
        className="hidden z-20 md:flex flex-col items-center  
     px-4 py-6 w-16 min-h-screen inset-0 fixed border-r"
      >
        {/* Perfil */}
        <figure className="mb-6">
          <Image
            src="/images/user-profile.png"
            alt="Foto de perfil"
            width={40}
            height={40}
            className="rounded-full"
          />
          <figcaption className="sr-only">Perfil do usuário</figcaption>
        </figure>

        {/* Links */}
        <nav className={"flex flex-col gap-8"}>
          {itemsNav.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger>
                <Link href={item.href} aria-label={item.name}>
                  <span>{item.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <span>{item.name}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>

      {/* Menu mobile */}
      <div className="md:hidden border-b">
        <Sheet>
          {/* Botão que abre o menu */}
          <SheetTrigger>
            {/*  Menu hamburger */}
            <MenuIcon className="m-2 cursor-pointer w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className={"flex flex-col gap-8"}>
              {/* Perfil */}
              <figure className="mb-6">
                <Image
                  src="/images/user-profile.png"
                  alt="Foto de perfil"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <figcaption className="sr-only">Perfil do usuário</figcaption>
              </figure>
              {/* Links */}
              <nav className={"flex flex-col gap-4"}>
                {itemsNav.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xl">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
