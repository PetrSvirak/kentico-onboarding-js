# kentico-onboarding-js
Simple step-by-step task for Kentico Academy to learn the basics of JS, React, Redux.

This project will consist of two tasks. In first one we will implement simple list of editable items using ReactJS only. In the second part we will try to refactor our code to use ImmutableJS and ReduxJS. 

The requirements for the resulting project are captured in `assignment.gif`. Note that we will aim to make the solution generic enough so that more items can be in 'edit' mode at once.

## Forking the project and submitting pull requests
You won't be added as a contributor to this repository. You have to fork it to obtain your own copy to which you will commit your changes. Then, once you feel like you finished the task, you can submit a pull request to this repo. If you are not familiar with GitHub forking and pull requests, I suggest reading this article before you proceed any further: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/.

### Fork step-by-step
1. Go to https://github.com/Suzii/kentico-onboarding-js.
2. Click **Fork**. This will create your own copy of the repository in your GitHub accout.
3. In git bash:
 - `git clone http://github.com/your-login/kentico-onboarding-js` -- will init a local repo tracking your forked origin
 - `cd kentico-onboarding-js` -- changes directory to cloned repo
 - `git remote add --track master upstream git://github.com/suzii/kentico-onboarding-js` -- adds the original repository you forked from as a remote named 'upstream' so that you can receive updates by merging from it
 - `git fetch upstream` -- receive latest code
 - `git merge upstream/master` -- merge it to your own master
 - you now have the latest upstream code in your local master branch
 - `git checkout -b develop` -- creates and checkouts new branch named `develop` where you can continously work on the assignment. You should keep this branch one-to-one with the upstream repository branch `solutions/yourlogin`
 - `git checkout -b features/task-1` -- crates and checkouts new branch named `features/task-1` based on develop. Commit all your progress on Task 1 to this branch.
 - Try to keep your `master` up to date with `upstream/master` and propagate the changes to all your branches.
 
### Pull Requests (PR)
 - Once ready, you can submit **Pull request** to the original repository. Please, always submit the pull request to the branch which starts with `solutions/[your name or login]`. (I have to create it first, so if it's not there, let me know.) 
 - Every task should be submitted as a separate pull request, always from branch `feature/task-X`. (If you submit PR from `develop` branch and start working on another task immediately, all commits added to the `develop` will be reflected in PR which really does not make the review any easier.)
 - You should wait for the previous PR to be merged before you submit another. 
 - Any comments from PR review shall be fixed to the appropriate feature branch that is related to the reviewed task.
 - Once your changes from PR are approved and merged to your solutions branch in the original repository, you can merge them to your develop branch. (`git checkout develop; git fetch upstream; git merge upstream/solutions/your-login;)
 - In case you already started working on next task, just merge the changes from your develop to the next feature branch.
 - If the PR is still not merged and you want to start working on next task, checkout a new branch based on previous task
 - Repeat from step 1. for following tasks :)
 - To get your upstream branch up-to-date with upstream master, please, complete **Task 0**
 
NOTE: Think of it as a real word repository. It can happen that you don't have rights to commit anything to `master` nor `develop`. Therefore, all the changes you want to make have to be reviewed first in form of a PR to `develop`. Once the repository owner is happy with your changes, only then he merges them to `develop`. The situation here is a bit more complicated while we have multiple repositories (oroginal + forks). Just think of your `develop` branch as if you were not allowed to make any commits to it and you can only merge from `upstream/solutions/<your-login>`.

### Development
**IMPORTANT:** Run `npm install` and make sure you have `eslint` and `tslint` tools enabled (in File > Settings, search for keywords). The path to `eslint` and `tslint` node packages should be in `node_modules` inside of project folder.

Now you have everything git-related set-up and you can start developing... 
Please, commit with reasonable commit messages (http://chris.beams.io/posts/git-commit/), you can squash your commits as well. Feel free to create new branches when developing (`feature/task-1`,`2` etc.). PR should be submited from feature branch one per task. and merge them to `develop` when you want to submit a pull request. Submit your PRs from `develop` branch.

## How to run the project 
**tl;dr**
```
npm install
npm start
> localhost:3000/
```

The project was created with [react-create-app](https://github.com/facebookincubator/create-react-app) boilerplate. 
You should use WebStorm IDE to get familiar with it. Prerequisites for running this project are node v6+ and npm v3+. (If you followed the Draft onboarding on Kentico wiki pages, you should be ready to go.)

## Coding style
ESlint and TSlint are already set-up for you, so you will see all the errors and warnings in console and also in your WebStorm IDE. Please follow this rules while developing:
 - JavaScript file names are `lowerCamelCase`
 - one React component per file, name is `UpperCamelCase`, and has `.jsx` extension
 - use `'single quotes'` instead of `"double quotes"`
 - more Draft-specific coding rules are specified in https://kentico.atlassian.net/wiki/display/KA/04b+-+JS+Draft+Conventions+--+DRAFT

## Task 0
In order to update your upstream solutions branch with the changes that might have happend on upstream master: After cloning the repository, create `develop` and then `feature/task-0` branch. Submit new Pull request to your solutions branch from task-0 branch.

## Task 1
According to `assignment.gif` implement all the required functionality (keep in mind we want to be able to edit multiple list items at once). Store some pseudo-random identifier (id) for each item (use some util function for its generation, e.g: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
All the boilerplate is already there so you can dive into coding straight away. Feel free to use bootstrap css classes. Get familiar with project structure. The entry file is `index.js`. Page layout can be found in `App.jsx`. It renders `List.jsx` in its body, where you are supposed to implement the rest of the functionality. 

## Task 2
Install [ImmutableJS](http://facebook.github.io/immutable-js) to your project: `npm install --save immutable`.
Refactor your application so that all the state (except for reasonable exceptions e.g. current text of input field in `CreateItem` component) is stored in top level component (e.g. `List.jsx`) and all the complex objects in state are represented as `Immutable.Map` (key values are item IDs).

## Task 3
Install [ReduxJS](http://redux.js.org/), [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) and [redux-logger](https://github.com/evgenyrodionov/redux-logger) to your project: 
```
npm install --save redux
npm install --save react-redux
npm install --save redux-logger
```
Refactor the application to use ReduxJS. 
 - Create **`actionTypes.js`** where you describe all possible actions (as string constants) that can modify state of the app (e.g: "ITEM_CREATED").
 - Create **action creators** (helper functions) for all the action types you defined.
 - Move all the state of top level component (`List.jsx`) to Redux store (state in Redux is described by reducers; use reducer composition if possible).
  - Write jasmine **unit tests** for your Redux logic (used TDD to write tests for actionCreators and reducers combined).
  - Implement **reducers** that react to dispatched actions and change the state accordingly.
 - In index.js:
  - Create instance of Redux store, pass root reducer and use logging middleware.
  - Wrap the instance of App.jsx in `<Provider>` component so that all the components can access global store (via `connect()` function).
 - Refactor `List.jsx` so that it receives the app state from Redux store as its props and passes it down to its child components. (`connect()` + `mapStateToProps()`)
 - Child components should dispatch actions that describe changes of the application. (`connect()` + `mapDispatchToProps()`)

**IMPORTANT:** preserve Immutability!

## [optional] Task 4
Rewrite the app to Typescript.
