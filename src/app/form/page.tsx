import type { Metadata } from "next";
import { MagicForm } from "./magic-form";

export const metadata: Metadata = {
  title: "Magic Form | 0xj4m35",
};

export default function FormPage() {
  return (
    <main className="form-page">
      <MagicForm />
    </main>
  );
}
