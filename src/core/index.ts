/**
 * Canvas Plugin - Core (Framework-agnostic)
 */

// Export plugin-specific types
export type { CanvasArgs, ImageToolData, CanvasDrawingState } from "./types";

// Export plugin definition
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Export plugin utilities
export { executeOpenCanvas, pluginCore } from "./plugin";
