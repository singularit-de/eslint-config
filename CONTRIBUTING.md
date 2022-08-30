# Contributing

- [Development Setup](#development-setup)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

[//]: # (- [Tests]&#40;#tests&#41;)
[//]: # (- [Storybook]&#40;#storybook&#41;)

## Development Setup
You will need [Node.js](https://nodejs.org/en/) version 12+

1. Fork from GitHub
2. Clone the forked project
3. checkout develop branch
4. Run `npm install` to install dependencies.

[//]: # (This is where you can add testing instructions)

[//]: # (## Tests)
[//]: # (To test the component, we are using [Cypress]&#40;https://www.cypress.io&#41;. If you add a new feature make sure to write additional tests for it.)
[//]: # ()
[//]: # ()
[//]: # (Run `npm run cypress:open` to start the cypress testing server.     )
[//]: # (The cypress test environment will open itself automatically.)


[//]: # (This is where you can add storybook instructions)

[//]: # (## Storybook)
[//]: # (We also set up [Storybook]&#40;https://storybook.js.org&#41; for our component.)
[//]: # ()
[//]: # (Run `npm run storybook` to start the storybook server.)

## Commits
Commit messages should follow [Vue's commit message convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md).

## Pull Requests

- Do not submit PRs against the `main` branch. Checkout a topic branch from the relevant branch (e.g. develop) and merge back against that branch
- Work in the `src` folder and DO NOT check in `dist` in the commits
- It's okay to have multiple small commits - GitHub will automatically squash it before merging
- Make sure the project can be built using `npm run build`
- If you are fixing a bug:
    - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your Pull Request title.
    - Add appropriate test coverage if applicable