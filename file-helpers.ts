// utilisation des generator en JS

/**
 * Petit algo pour lister les fichiers du repertoir courant  
 */


import * as fs from 'fs/promises';
import { join } from 'path';
async function* findFilesInCurrentDirectory(
  directoryLocation: string
): AsyncGenerator<string, void, unknown> {
  const dirents = await fs.readdir(directoryLocation, { withFileTypes: true });

  for (const dirent of dirents) {
    const fullPathName = join(directoryLocation, dirent.name);

    if (dirent.isDirectory()) {
      yield* findFilesInCurrentDirectory(fullPathName);
    } else {
      yield fullPathName;
    }
  }
}

const [directoryLocation = process.cwd()] = process.argv.slice(2);
/* eslint-disable */
(async () => {
  const response = findFilesInCurrentDirectory(directoryLocation);
  let isDone: boolean | undefined = false;
  while (!isDone) {
    const { value, done } = await response.next();
    isDone = done;
    console.log(value);
  }
})();
