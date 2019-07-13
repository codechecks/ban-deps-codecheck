<p align="center">
  <h3 align="center">Ban Dependencies Codecheck</h3>
  <p align="center">Prevent direct or indirect dependencies on your package</p>

  <p align="center">
    <a href="https://circleci.com/gh/codechecks/commit-deployment"><img alt="Build Status" src="https://circleci.com/gh/codechecks/commit-deployment/tree/master.svg?style=svg"></a>
    <a href="/package.json"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
  </p>
</p>

## Install

```sh
npm install --save-dev @codechecks/ban-deps-codecheck
```

## Usage

Add to your `codechecks.yml` file:

```yml
checks:
  - name: ./src/index.ts
    options:
      - name: node-gyp
        reason: "No native modules please! They make installation much harder"
  # ...
```
