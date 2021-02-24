#!/usr/bin/env node
/**
 * NOTE: Once npm supports the `overrides` field in package.json
 * or Gatsby bumps their dependency on socket.io, we can remove this
 * script.
 */

/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable node/shebang */

const fs = require("fs").promises;
const path = require("path");

const main = async (overrides) => {
  const packageLockFilePath = path.resolve(__dirname, "../package-lock.json");

  for (const [name, version] of Object.entries(overrides)) {
    const packageLock = JSON.parse(await fs.readFile(packageLockFilePath));

    const packagePaths = Object.keys(packageLock.packages);

    const deletePaths = [];

    for (const packagePath of packagePaths) {
      if (packagePath.endsWith("/" + name)) {
        if (packageLock.packages[packagePath].version !== version) {
          deletePaths.push(packagePath);
        }
      }
    }

    for (const packagePath of deletePaths) {
      for (const deletePath of deletePaths) {
        if (
          packagePath === deletePath ||
          packagePath.startsWith(deletePath + "/")
        ) {
          // eslint-disable-next-line fp/no-delete
          delete packageLock.packages[packagePath];
        }
      }
    }

    await fs.writeFile(
      packageLockFilePath,
      JSON.stringify(packageLock, null, "  ")
    );
  }
};

main(require("../package.json").overrides);
