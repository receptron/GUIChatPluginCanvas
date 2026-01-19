<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      Canvas Plugin Demo
    </h1>

    <div class="space-y-4">
      <button
        @click="openCanvas"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Open Canvas
      </button>

      <div
        v-if="result"
        class="max-w-2xl p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
      >
        <h2 class="text-lg font-semibold mb-4">Canvas:</h2>
        <View :selectedResult="result" @updateResult="handleUpdateResult" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ToolResult } from "gui-chat-protocol/vue";
import type { ImageToolData } from "../src/core/types";
import { plugin, View } from "../src/vue";

const result = ref<ToolResult<ImageToolData> | null>(null);

const openCanvas = async () => {
  const context = {};
  const newResult = await plugin.execute(context, {});
  result.value = { ...newResult, uuid: "demo-canvas" };
};

const handleUpdateResult = (updatedResult: ToolResult<ImageToolData>) => {
  result.value = updatedResult;
};
</script>
