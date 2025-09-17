
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
import { toast } from "sonner"

function route(path: string) {
  const router = useRouter();
  router.push(path);
}

const Do_Toast = (
  message: string,
  type: string
) => {
  const { toast } = useToast();

  console.log("eikhan aschi");
  toast(
    description: message,
    duration: 3000,
    variant: type as "default" | "destructive" | "success" | "warning" | "info",
  )
};

export { Do_Toast };
