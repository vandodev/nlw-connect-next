import { Button } from "./components/button";
import {ArrowRight} from "lucide-react"
import { IconButton } from "./components/icon-button";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar 
        <ArrowRight />
      </Button>

      <IconButton>
        <ArrowRight />
      </IconButton>
    </main>
  );
}
