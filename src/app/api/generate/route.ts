import { NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(request: Request) {
  const model = google("gemini-2.0-flash-lite-preview-02-05");

  try {
    const { prompt } = await request.json();

    const result = await generateText({
      model,
      system:
        `You help to generate color palettes for the user. ` +
        `The user will provide instructions on how the palette should look. ` +
        `You need to generate a palette of exactly 5 colors in hex format. ` +
        `The response must be in JSON format, where the key "palette" is an array of 5 hex color codes. ` +
        `The property "baseColor" is optional and should only be included if the user provides it.`,
      prompt,
    });

    const generatedText = result.text;

    let cleanedResponse = generatedText.trim();
    if (cleanedResponse.startsWith("```json") && cleanedResponse.endsWith("```")) {
      cleanedResponse = cleanedResponse.slice(7, -3).trim(); 
    }

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(cleanedResponse);
    } catch (error) {
      throw new Error("Invalid JSON format in AI response" + error);
    }

    return NextResponse.json(parsedResponse);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating palette:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
}