"use server";

import { revalidatePath } from "next/cache";
import type { Color } from "../util/types";

export async function fetchFilteredColors(query?: string) {
  let colors: Color[] | null = null;

  if (query) {
    const response = await fetch(
      `${process.env.API_URL}/api/search?search=${query}`
    );
    if (response.ok) {
      colors = await response.json();
    }
  } else {
    const response = await fetch(`${process.env.API_URL}/api/colors/`);
    if (response.ok) {
      colors = await response.json();
    }
  }

  revalidatePath("/");
  return colors;
}

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