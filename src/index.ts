import { codechecks } from "@codechecks/client";
import { getAllProductionDependencies } from "./package-managers";

export async function banDependencies(options: Options): Promise<void> {
  const allProdPackages = await getAllProductionDependencies(codechecks.context.workspaceRoot);

  for (const pkg of options) {
    if (allProdPackages.some(dep => dep.name.indexOf(pkg.name) === 0)) {
      await codechecks.failure({
        name: `Banned package ${pkg.name}`,
        shortDescription: pkg.reason,
      });
    }
  }
}

export default banDependencies;

export type Options = Array<{
  name: string;
  reason: string;
}>;
