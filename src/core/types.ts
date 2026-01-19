/**
 * Canvas Plugin Types
 */

/** Canvas takes no arguments */
export type CanvasArgs = Record<string, never>;

/** Image data returned by the canvas */
export interface ImageToolData {
  imageData: string;
  prompt: string;
}

/** Drawing state for canvas persistence */
export interface CanvasDrawingState {
  brushSize?: number;
  brushColor?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  strokes?: unknown[];
}
