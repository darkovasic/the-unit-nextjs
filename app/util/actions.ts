"use server";

import { revalidatePath } from "next/cache";

export async function createColor(name: string, hex: string) {
  try {
    await fetch(`${process.env.API_URL}/api/colors/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        hex,
      }),
    });

    revalidatePath("/");
    return { isError: false, message: "Color submitted successfully" };
  } catch (error) {
    return { isError: true, message: (error as Error).message };
  }
}

export async function deleteColor(id: number) {
  try {
    await fetch(`${process.env.API_URL}/api/colors/${id}`, {
      method: "DELETE",
    });

    revalidatePath("/");
    return { isError: false, message: "Color deleted successfully" };
  } catch (error) {
    return { isError: true, message: (error as Error).message };
  }
}