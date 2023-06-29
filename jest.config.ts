import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require(`./tsconfig.json`);

const config: Config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/index.ts"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: `<rootDir>/`,
  }),
  preset: `ts-jest`,
  modulePathIgnorePatterns: [`node_modules`, `.jest-test-results.json`],
  snapshotSerializers: ["@emotion/jest/serializer"],
};

export default config;
