# AmbivoForm

It is a component that can render user-defined forms. AmbivoForm can be used both as a Web-Component and as a library.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Workspace

- `projects/ambivo-form` is a library.
- `projects/ambivo-form-element` is an Angular Elements wrapper over the `ambivo-form` component.
- `projects/ambivo-form-showcase` is a host-project for developing the library.

## Build and deploy

```
# Build library and element
npm run build

# Deploy element
firebase deploy

# Publish library
# (don't forget to udate version number under projects/ambivo-form/package.json)
cd ./dist/ambivo-form
npm pack

# `--ignore-scripts` flag is important because we publish an Ivy build
npm publish --ignore-scripts
```
