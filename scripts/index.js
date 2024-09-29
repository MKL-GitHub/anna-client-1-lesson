const fs = require("fs");
const path = require("path");
const capitalize = require("./capitalize.util");

const entity = process.argv[2];
const name = process.argv[3];

const isCapitalize = entity === "component";

const capitalizedName = capitalize(name);

const entityDirPath = path.resolve(__dirname, "..", "src", entity + "s");
const fileDirPath = path.resolve(entityDirPath, name);

const isExisted = fs.existsSync(fileDirPath);

const indexTemplate = `export { default as ${
  isCapitalize ? capitalizedName : name
} } from './${name}/${name}.${entity}';\n`;

const scssTemplate = `.${capitalizedName} {
  background-color: #ff000079;
}`;

const tsTemplate = `
import "./${name}.component.scss";
import { bem } from "@utils";

const ${capitalizedName} = () => {
  const cn = bem('${capitalizedName}');

  const ${name} = document.createElement('div');

  ${name}.textContent = "${capitalizedName}";
  ${name}.className = cn();

  return ${name};
}

export default ${capitalizedName};
`;

console.log("capitalize ", capitalize("navbar"));

if (!isExisted) {
  fs.mkdir(fileDirPath, (error) => {
    if (error) return console.log("Error", error);
    console.log("Directory was created successfully!");
  });
}

fs.writeFile(
  path.resolve(fileDirPath, `${name}.component.scss`),
  scssTemplate,
  (error) => {
    if (error) {
      return console.log("Error", error);
    }

    console.log("File is written successfully!");
  }
);

fs.writeFile(
  path.resolve(fileDirPath, `${name}.component.ts`),
  tsTemplate,
  (error) => {
    if (error) {
      return console.log("Error", error);
    }

    console.log("File is written successfully!");
  }
);

fs.appendFile(
  path.resolve(entityDirPath, "index.ts"),
  indexTemplate,
  (error) => {
    if (error) {
      return console.log("Error", error);
    }

    console.log("File is written successfully!");
  }
);
