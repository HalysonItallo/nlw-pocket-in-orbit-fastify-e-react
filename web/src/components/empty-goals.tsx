import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import logo from "../assets/in-orbit-logo.svg";
import letsStart from "../assets/rocket-launch-illustration.svg";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets-start" />
        
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
