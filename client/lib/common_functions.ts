import { useRouter } from "next/router";

function route(path: string) {
  const router = useRouter();
  router.push(path);
}

export { route };
