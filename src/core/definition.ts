/**
 * Canvas Plugin Tool Definition
 */

export const TOOL_NAME = "openCanvas";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description:
    "Open a drawing canvas for the user to create drawings, sketches, or diagrams.",
  parameters: {
    type: "object" as const,
    properties: {},
    required: [] as string[],
  },
};

export const SYSTEM_PROMPT = `When the user asks 'I want to draw an image.', call ${TOOL_NAME} API to open the canvas.`;
