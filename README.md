# @gui-chat-plugin/canvas

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fcanvas.svg)](https://www.npmjs.com/package/@gui-chat-plugin/canvas)

A drawing canvas plugin for [MulmoChat](https://github.com/receptron/MulmoChat).

## Overview

This plugin provides a drawing canvas where users can create drawings, sketches, or diagrams. The AI can then interpret or transform the drawing into other formats.

## Installation

```bash
yarn add @gui-chat-plugin/canvas
```

## Dependencies

This plugin requires `vue-drawing-canvas`:

```bash
yarn add vue-drawing-canvas
```

## Usage

### Vue Implementation (for MulmoChat)

```typescript
// In src/tools/index.ts
import CanvasPlugin from "@gui-chat-plugin/canvas/vue";

const pluginList = [
  // ... other plugins
  CanvasPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/canvas/style.css";
```

### Core Only (Framework-agnostic)

```typescript
import { pluginCore, TOOL_NAME } from "@gui-chat-plugin/canvas";
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@gui-chat-plugin/canvas` | Core (framework-agnostic) |
| `@gui-chat-plugin/canvas/vue` | Vue implementation |
| `@gui-chat-plugin/canvas/style.css` | Tailwind CSS styles |

## Test Prompts

1. "I want to draw something"
2. "Open the drawing canvas"
3. "Let me sketch an idea"
4. "Open canvas so I can draw a diagram"

## Development

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build
yarn typecheck  # Type check
yarn lint       # Lint
```

## License

MIT

## Related

- Protocol spec: [gui-chat-protocol](https://github.com/receptron/gui-chat-protocol)
- Reference implementations using this protocol: [mulmoclaude](https://github.com/receptron/mulmoclaude) · [MulmoChat](https://github.com/receptron/MulmoChat)
