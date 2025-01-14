const fs = require("fs/promises");
const path = require("path");
const rimraf = require("rimraf");

const contentPaths = [
  path.resolve(__dirname, "../../../ARIA/apg/example-index"),
  path.resolve(__dirname, "../../../content"),
  path.resolve(
    __dirname,
    "../../../content-images/wai-aria-practices/generated"
  ),
];

const emptyContentFolders = async () => {
  return Promise.all(
    contentPaths.map(async (contentPath) => {
      await fs.mkdir(contentPath, { recursive: true });

      await new Promise((resolve) => {
        rimraf(`${contentPath}/*`, resolve);
      });
    })
  );
};

module.exports = emptyContentFolders;
