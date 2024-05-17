"use server";

import { redirect } from "next/navigation";

export async function testAction() {
  redirect("/b");
}
