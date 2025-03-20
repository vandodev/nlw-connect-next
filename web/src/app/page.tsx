import { Button } from "./components/button";
import {ArrowRight, Mail} from "lucide-react"
import { IconButton } from "./components/icon-button";
import { InputField, InputIcon, InputRoot } from "./components/input";

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

      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField />
      </InputRoot>

    </main>
  );
}
