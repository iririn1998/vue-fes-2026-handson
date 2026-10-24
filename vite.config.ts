import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    categories: {
      correctness: "error",
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  run: {
    tasks: {
      dev: {
        command: "vp run playground#dev",
        cache: false,
      },
    },
  },
});
