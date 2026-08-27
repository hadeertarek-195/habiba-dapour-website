import { spawnSync } from "node:child_process";

const isVercel = process.env.VERCEL === "1";
const command = isVercel ? process.execPath : "bash";
const args = isVercel
  ? ["./node_modules/next/dist/bin/next", "build"]
  : ["scripts/build-verified.sh"];

const result = spawnSync(command, args, {
  env: process.env,
  shell: false,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
