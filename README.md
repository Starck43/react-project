# React Production Project

This is a SPA project based on Feature sliced design methodology with async fetching data from server 

Link on documentation - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

## Technology stack
- react
- redux
- [Redux Tool Kit](https://redux-toolkit.js.org)
- typescript
- webpack/vite
- sass/scss
- storybook
- jest/loki tests

## Start
```
npm install - install all dependencies

npm run start:dev - start in dev mode with Webpack and backend server
# or
npm run start:dev:vite - start in dev mode with Vite and backend server
```
---

## Scripts

- `npm run start` - start a project on Webpack
- `npm run start:vite` - start a project on Vite
- `npm run start:server` - start a backend server
- `npm run start:dev` - start a project on Webpack dev server + backend
- `npm run start:dev:vite` - start a project on Vite + backend
- `npm run build:dev` - Build in dev mode
- `npm run build:prod` - Build in prod mode (minified and compressed)
- `npm run lint:css` - Check styles with linter
- `npm run lint:css:fix` - Fix errors in styles with linter
- `npm run lint:ts` - Check ts-files with linter
- `npm run lint:ts:fix` - Fix errors in ts-files with linter
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build local storybook screenshots
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run script with building, checking modifications and reporting screenshot tests with loki
- `npm run test:build` - Build local storybook's screenshots with loki
- `npm run test:ui:ok` - Approve and update new local screenshots
- `npm run test:ui:ci` - Run checking screenshot tests with loki for CI
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate html report for screenshot tests
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run prepare` - pre commit hooks

---

## Backend
- **Node** + Json-server for developing,
- **Python** + Django Rest Framework in production (in future)

## Used plugins

### ESLint
- `@typescript-eslint` (ESLint plugin and parser for typescript)
- `eslint-config-airbnb` (ESLint as an extensible shared config)
- `eslint-plugin-import` (Prevent issues with misspelling of file paths and import names)
- `eslint-plugin-unused-imports` (Find and remove unused ES6 module imports)
- `eslint-plugin-i18next` (ESLint plugin for i18n)
- `fork-ts-checker-webpack-plugin` (Speeds up TypeScript type checking)

### Others libraries
- `@reduxjs/toolkit` (Toolset for efficient Redux development)
- `webpack-bundle-analyzer` (Visualize size of webpack output files with an interactive zooming treemap)
- `identity-obj-proxy` (Useful for testing when you can tell Jest to mock data)
- `@pmmmwh/react-refresh-webpack-plugin` (Webpack plugin to enable “Fast Refresh” for React components)
- `copy-webpack-plugin` (Plugin copies individual project files or entire directories to the build folder)
- `circular-dependency-plugin` (Detect modules with circular dependencies when bundling with webpack)
- `ts-morph` (Compiler API wrapper that allow to work with AST. Provides an easier way to manipulate JavaScript code)
- `loki` (There are a few visual regression tools for storybook tests)
- `jest` (JavaScript Testing)
- `i18next` (Internationalization framework for browser or any other javascript environment)
- `react-virtualized` (React components for efficiently rendering large lists and tabular data) [_**depreciated**_]
- `use-gesture` (library that lets you bind richer mouse and touch events to any component or view) [see here](https://use-gesture.netlify.app)
- `headless UI` (A set of completely unstyled, fully accessible UI components for React) [see here](https://headlessui.com)
- `floating UI` (headless alternative) [see here](https://floating-ui.com)
- `heroicons` (Svg icons set) [see here](https://heroicons.com)


[site link](https://istarck.netlify.app)

---

## Project description

### Configurations
For development, the project contains 2 configs:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both build tools are adapted to the base features of the application.

- /config - the project configuration
- /config/@babel - **babel** plugin
- /config/build - **webpack** configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

---

### FSD project structure
````
    src/
    ├── app/                    # Initializing application logic
    ├── entities/               # (Optional) Business entities that domain logic operates with
    ├── features/               # (Optional) Processing of user scenarios
    ├── pages/                  # Application pages
    ├── widgets/                # Independent and self-contained blocks for pages
    └── shared/                 # Reused modules, non business specific
````
1) Each layer can use (import) only the underlying layers
2) The higher the layer is located, the higher the level of its responsibility and knowledge about other layers (from top to bottom)
    > app -- pages -- widgets -- features -- entities -- shared
3) The lower the layer is located , the more it is used in the upper layers, and therefore the more dangerous it is to make changes to it (from bottom to top)
    > shared > entities > features > (widgets) > pages > app


#### Entities
Business entities that domain logic operates with

- [Article](/src/entities/article)
- [Comment](/src/entities/comment)
- [Counter](/src/entities/counter)
- [Country](/src/entities/country)
- [Currency](/src/entities/currency)
- [Notification](/src/entities/notification)
- [Profile](/src/entities/profile)
- [Rating](/src/entities/rating)
- [User](/src/entities/user)


#### Features
Processing of user scenarios

- [Auth/Auth Popup](/src/features/auth/auth-popup)
- [Auth/Login](/src/features/auth/login)
- [Auth/Logout](/src/features/auth/logout)
- [Auth/Registration](/src/features/auth/registration)


- [Profile/Update Profile Form](/src/features/profile/update-profile)


- [Articles/Article Comments](/src/features/articles/article-comments)
- [Articles/Article Related](/src/features/articles/article-related)
- [Articles/Article Rating](/src/features/articles/article-rating)
- [Articles/Back to List Button](/src/features/articles/back-to-list)
- [Articles/Edit Article Control](/src/features/articles/edit-article-control)
- [Articles/Search Control](/src/features/articles/search-control)
- [Articles/Sort Control](/src/features/articles/sort-control)
- [Articles/View Control](/src/features/articles/view-control)
- [Articles/Type Tabs](/src/features/articles/type-tabs)
- [Articles/Update Article](/src/features/articles/update-article)
- [Articles/Infinite Article List](/src/features/articles/infinite-article-list)


- [Notifications Popup](/src/features/notifications-popup)
- [Language Switcher](/src/features/language-switcher)
- [Theme Switcher](/src/features/theme-switcher)


#### Pages
Application pages

- [Auth](/src/pages/auth)
- [Profile](/src/pages/profile)


- [Articles/Details](/src/pages/articles/details)
- [Articles/List](/src/pages/articles/list)
- [Articles/Edit](/src/pages/articles/edit)


- [Forbidden](/src/pages/forbidden)
- [Not Found Page](/src/pages/not-found-page)


#### Widgets
Independent and self-contained blocks for pages

- [Navbar](/src/widgets/navbar)
- [Sidebar](/src/widgets/sidebar)
- [Page Component](/src/widgets/page)

#### Shared
Reused modules

- [API](/src/shared/api)
- [Vendors' Assets](/src/shared/assets)
- [Configuration](/src/shared/config)
- [Constants](/src/shared/const)
- [Common Types](/src/shared/types)
- [Libraries](/src/shared/lib)
- [UI Components](/src/shared/ui)


[link for details](/src/shared/shared.md)

---

### Working with data

Interaction with the data is provided by using the [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started).
Reused entities are normalized through EntityAdapter.
[RTK query](/src/shared/api/rtkApi.ts) is used for fetching data from backend.

For asynchronous connection of reducers (not included in common bundle), used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader.tsx)

---

### Translations
The project uses the i18next library to work with translations.
Files with translations are stored in root of the project: `/public/locales`.

For comfortable work, we recommend installing the plugin for WebStorm/VSCode IDE

[i18next documentation here](https://react.i18next.com)

---

### Linting

The project uses:
1) `eslint` to check typescript code
2) `stylelint` to check styles (sass/scss)

Also, for strict control of the main architectural principles, used the own eslint plugin `eslint-plugin-paths-observer`,
which contains 3 rules:
* `only-relative-imports-in-layer` - allows checking if there are only relative imports in one layer. It has auto fix function
* `only-public-api-imports` - allows checking if imports are from a public api or not. It has auto fix function
* `layer-imports-order` - checks the level of responsibility when importing from other layers


#### Uses
- Checking ts files by linter `npm run lint:ts`
- Fixing ts files by linter `npm run lint:ts:fix`
- Checking scss files with a linter `npm run lint:css`
- Fixing sass files with a style linter `npm run lint:css:fix`

---


### Tests

The project uses 4 types of tests:
* Regular unit tests based on Jest `npm run test:unit`
* Component tests with RTL (React testing library) `mpm run test:unit`
* Screenshot tests with Loki `npm run test:ui`
* e2e testing with Cypress `npm run test:e2e`

More about tests - [read documentation](/docs/tests.md)


### Storybook

The project describes storybook cases for each UI component.

The file with the storybook (*.stories.tsx) is in the same level with component and style file

Requests to the server are mocked due to `storybook-addon-mock` plugin.

#### Uses
```bash
# run the storybook
npm run storybook

# update storybook with addons
npx storybook upgrade
```
_Read more about [Storybook](/docs/storybook.md)_


#### Example

```typescript jsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Text'
}
```

---

### CI pipeline и pre commit hooks

Configuration of GitHub actions is located in /.github/workflows/main.yml
CI includes all kinds of tests, building and linting.
In pre commit hooks, we check the project with linters. Config file is located in /.husky

----
