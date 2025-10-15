// Importar image
import Image from "next/image";
// Link
import Link from "next/link";

// Importar componentes ui
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Importar os links
import itemsNav from "@/utils/itemsNav";

// Icons
import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  return (
    // Container
    <Sheet>
      {/* Menu trigger / hamburger */}
      <SheetTrigger>
        <MenuIcon className="m-2 cursor-pointer w-8 h-8" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className={"flex flex-col gap-8"}>
          {/* Logo */}
          <Image
            src="/images/image.png"
            alt="Foto de perfil"
            width={40}
            height={40}
            className="mr-auto rounded-full"
          />
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
  );
}
