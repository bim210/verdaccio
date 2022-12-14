import { pseudoRandomBytes } from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

import { Version } from '@verdaccio/types';

// @deprecated use await fileUtils.createTempFolder('verdaccio-test')
export function generateRamdonStorage() {
  const tempStorage = pseudoRandomBytes(5).toString('hex');
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), '/verdaccio-test'));

  return path.join(tempRoot, tempStorage);
}

export function generateNewVersion(
  pkgName: string,
  version: string,
  shashum = '238e7641e59508dc9c20eb4ad37a8aa57ab777b4'
): Version {
  // $FlowFixMe
  return {
    name: pkgName,
    version: version,
    description: '',
    main: 'index.js',
    dependencies: {
      test: '^1.4.1',
    },
    author: '',
    license: 'ISC',
    readme: 'ERROR: No README data found!',
    _id: `${pkgName}@${version}`,
    _npmVersion: '5.5.1',
    _npmUser: {
      name: 'Foo',
    },
    dist: {
      integrity:
        'sha512-zVEqt1JUCOPsash9q4wMkJEDPD+QCx95TRhQII+JnoS31uBUKoZxhzvvUJCcLVy2CQG4Q' +
        'dwXARU7dYWPnrwhGg==',
      shasum: shashum,
      tarball: `http:\/\/localhost:4873\/${pkgName}\/-\/${pkgName}-${version}.tgz`,
    },
  };
}
