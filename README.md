# Cuoore Elements

![cuoore logo](./assets/logo.png)

Native custom elements independently deployable ready to browser consume

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Elements

* [Button](./packages/cuoore-element-button/buttons.md)

## Add a new cuoore element

Create a new folder inside `packages` folder to your new cuoore component called `cuoore-element-{your-element-name}` with this structure:

```
packages/
   ├── cuoore-element-{your-element-name}/
         ├── index.ts
         ├── package.json
```

**package.json**

Fill your package json as follow in this template:

```json
{
  "name": "cuoore-element-{your-element-name}",
  "version": "0.1.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc index.ts --outDir dist"
  },
  "devDependencies": {}
}
```

## Build cuoore elements

```
npm run build
```

## Local Linking of Packages

Linking packages locally in a package-based monorepo style is done with NPM workspaces. In this specific setup we use NPM workspaces (see the workspaces property of the package.json file at the root of your workspace).

Set the dependency that you have in your package from another one in its package json:

```json
{
 "name": "cuoore-element-{your-element-name}",
  "version": "0.1.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc index.ts --outDir dist"
  },
 "dependencies": {
    "cuoore-element-{your-dependency-element-name}": "*"
  }
}
```

At the root of your workspace run:

```
npm install
```

## Understand this workspace

Run `npm run graph` to see a diagram of the dependencies of the projects.
