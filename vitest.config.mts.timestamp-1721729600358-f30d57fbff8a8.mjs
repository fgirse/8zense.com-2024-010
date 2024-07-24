// vitest.config.mts
import react from "file:///Users/fgirse/8zense.com-2024-010/8zense.com-2024-010/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { loadEnv } from "file:///Users/fgirse/8zense.com-2024-010/8zense.com-2024-010/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/fgirse/8zense.com-2024-010/8zense.com-2024-010/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { defineConfig } from "file:///Users/fgirse/8zense.com-2024-010/8zense.com-2024-010/node_modules/vitest/dist/config.js";
var vitest_config_default = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    // This is needed by @testing-library to be cleaned up after each test
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.{js,jsx,ts,tsx}", "**/*.d.ts"],
      reporter: ["html"]
    },
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: ["./vitest-setup.ts"],
    env: loadEnv("", process.cwd(), "")
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmdpcnNlLzh6ZW5zZS5jb20tMjAyNC0wMTAvOHplbnNlLmNvbS0yMDI0LTAxMFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZnaXJzZS84emVuc2UuY29tLTIwMjQtMDEwLzh6ZW5zZS5jb20tMjAyNC0wMTAvdml0ZXN0LmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZnaXJzZS84emVuc2UuY29tLTIwMjQtMDEwLzh6ZW5zZS5jb20tMjAyNC0wMTAvdml0ZXN0LmNvbmZpZy5tdHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsIC8vIFRoaXMgaXMgbmVlZGVkIGJ5IEB0ZXN0aW5nLWxpYnJhcnkgdG8gYmUgY2xlYW5lZCB1cCBhZnRlciBlYWNoIHRlc3RcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRlc3Que2pzLGpzeCx0cyx0c3h9J10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGluY2x1ZGU6IFsnc3JjLyoqLyonXSxcbiAgICAgIGV4Y2x1ZGU6IFsnc3JjLyoqLyouc3Rvcmllcy57anMsanN4LHRzLHRzeH0nLCAnKiovKi5kLnRzJ10sXG4gICAgICByZXBvcnRlcjogWydodG1sJ10sXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudE1hdGNoR2xvYnM6IFtbJyoqLyoudGVzdC50c3gnLCAnanNkb20nXV0sXG4gICAgc2V0dXBGaWxlczogWycuL3ZpdGVzdC1zZXR1cC50cyddLFxuICAgIGVudjogbG9hZEVudignJywgcHJvY2Vzcy5jd2QoKSwgJycpLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHdCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUFBLEVBQ2xDLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQTtBQUFBLElBQ1QsU0FBUyxDQUFDLCtCQUErQjtBQUFBLElBQ3pDLFVBQVU7QUFBQSxNQUNSLFNBQVMsQ0FBQyxVQUFVO0FBQUEsTUFDcEIsU0FBUyxDQUFDLG9DQUFvQyxXQUFXO0FBQUEsTUFDekQsVUFBVSxDQUFDLE1BQU07QUFBQSxJQUNuQjtBQUFBLElBQ0EsdUJBQXVCLENBQUMsQ0FBQyxpQkFBaUIsT0FBTyxDQUFDO0FBQUEsSUFDbEQsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLEtBQUssUUFBUSxJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFBQSxFQUNwQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
