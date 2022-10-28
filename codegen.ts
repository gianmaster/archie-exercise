import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  documents: "src/graphql-client/**/*.{gql,graphql}",
  // generates: {
  //   "src/global-types.ts": {
  //     plugins: [
  //       "typescript",
  //       "typescript-operations",
  //       "typescript-react-apollo",
  //     ],
  //   },
  //   "src/__generated__/graphql.schema.json": {
  //     plugins: ["introspection"],
  //   },
  // },
  generates: {
    "src/graphql-client/types.global.ts": {
      plugins: ["typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "graphql-client/types.global.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },
    "src/graphql-client/schema.generated.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
