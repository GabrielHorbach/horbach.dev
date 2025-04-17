import { redirect } from "next/navigation";
import { defaultLocale } from "@/config/languages";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
