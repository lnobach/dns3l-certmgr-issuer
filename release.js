// npx semantic-release -e ./release.js

export const dryRun = false;
export const plugins = [
  "@semantic-release/release-notes-generator",
  ["@semantic-release/npm", {
    npmPublish: false
  }],
  ["@semantic-release/github", { addReleases: "top" }]
];
