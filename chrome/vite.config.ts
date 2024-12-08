import { resolve } from "path";
import { defineConfig } from "vite";
import copyContentStyle from "./utils/plugins/copy-content-style";
import makeManifest from "./utils/plugins/make-manifest";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

export default defineConfig({
	resolve: {
		alias: {
			"@src": root,
			"@assets": assetsDir,
			"@pages": pagesDir,
		},
	},
	plugins: [makeManifest(), copyContentStyle()],
	publicDir,
	build: {
		outDir,
		sourcemap: process.env.__DEV__ === "true",
		rollupOptions: {
			input: {
				content: resolve(pagesDir, "content", "index.ts"),
				background: resolve(pagesDir, "content", "script.ts"),
			},
			output: {
				entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
			},
		},
	},
});
