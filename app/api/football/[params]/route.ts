import { NextResponse } from "next/server";

const API_TOKEN =
  process.env.SPORTMONKS_API_TOKEN ||
  "8D4Ha9TJ01O9whfz0QupZFkMzqC0DelhioQLzHD42GAGGvHT5ps3LvBrGLlN";
const BASE_URL = "https://api.sportmonks.com/v3/football";

export async function GET(
  request: Request,
  { params }: { params: { params: string } }
) {
  try {
    // Ensure the URL is absolute for fetch
    const response = await fetch(
      `${BASE_URL}/fixtures/date/${params.params}?api_token=${API_TOKEN}&include=scores;stage;league;participants;`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
