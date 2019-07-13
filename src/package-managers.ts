import { join } from "path";
import { existsSync } from "fs";
import * as execa from "execa";

export async function getAllProductionDependencies(cwd: string): Promise<Package[]> {
  if (!isYarn(cwd)) {
    throw new Error("This codecheck supports only yarn!");
  }

  const { stdout: packagesRaw } = await execa("yarn list --production --json", { shell: true });
  const packages = JSON.parse(packagesRaw);

  return packages.data.trees;
}

function isYarn(cwd: string): boolean {
  return existsSync(join(cwd, "yarn.lock"));
}

export interface Package {
  name: string;
  children: Array<{ name: string; shadow: true }>;
}
