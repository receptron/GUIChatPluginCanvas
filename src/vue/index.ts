/**
 * Canvas Plugin - Vue Implementation
 */

import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { CanvasArgs, ImageToolData } from "../core/types";
import { pluginCore } from "../core/plugin";
import View from "./View.vue";
import Preview from "./Preview.vue";

export const plugin: ToolPlugin<ImageToolData, unknown, CanvasArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
};

// Re-export types
export type { CanvasArgs, ImageToolData, CanvasDrawingState } from "../core/types";

// Re-export utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeOpenCanvas,
  pluginCore,
} from "../core/plugin";

export { View, Preview };

// Default export for MulmoChat compatibility
export default { plugin };
