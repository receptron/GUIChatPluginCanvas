/**
 * Canvas Plugin Core (Framework-agnostic)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { CanvasArgs, ImageToolData } from "./types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Re-export for convenience
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

/**
 * Execute the openCanvas function
 */
export const executeOpenCanvas = async (
  _context: ToolContext,
  _args: CanvasArgs,
): Promise<ToolResult<ImageToolData>> => {
  return {
    message: "Drawing canvas opened",
    instructions:
      "Tell the user that you are able to turn the drawing into a photographic image, a manga or any other art style.",
    title: "Drawing Canvas",
  };
};

// Core Plugin (without UI components)
export const pluginCore: ToolPluginCore<ImageToolData, unknown, CanvasArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeOpenCanvas,
  generatingMessage: "Opening drawing canvas...",
  isEnabled: () => true,
  systemPrompt: SYSTEM_PROMPT,
};
