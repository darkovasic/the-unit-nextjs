import type { Color } from "@/app/util/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    let colors: Color[] | null = null;

    const response = await fetch(`${process.env.API_URL}/api/colors/`);
    if (response.ok) {
      colors = await response.json();
    }

    return NextResponse.json(colors);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
