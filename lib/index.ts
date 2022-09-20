import { v1 as uuidv1 } from "uuid";

const UUIDVALIDATION =
  "/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i";

export function v6(v1: string): string {
  const uuidv6 = uuidv1();
  console.log(uuidv6);
  return "123";
}
