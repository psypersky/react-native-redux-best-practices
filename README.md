# React Native Redux Best practices

Exploring and documenting all the nice and ugly parts of React Native and Redux

In order to explore this repository make a global search for the key words 'NOTICE', 'QUESTION' and 'MODULARITY' and you will find nice peaces of documentation explaining architectural desicions.

## Redux motivations and principles

Motivaion [https://redux.js.org/introduction/motivation](Read)
Thee principles[https://redux.js.org/introduction/three-principles](Read)

- Non opaque systems
- Deterministic
- Simple dependencies and structure

- Command Query Responsibility Segregation
- Event sourcing

- Make state muttations predictable

- Single source of truth
- State is read only

- Never mutate your data
- Plain objects

- Strict unidirectional data flow

## Redux parts

- Actions: Create pure objects
- Action creators: Functions that create actions
- Reducer: Tie the state and actions togheter, next state of the app
- Reducer composition
- Thunks: Action Creators Functions

## Redux Principles

### ---

Flux was created by Facebook with one goal in mind: Reduce bugs and complexity,
MVC [http://voidcanvas.com/flux-vs-mvc/](See-the-images)...

### The response of a question should live in just one file

What happens when an action happens?
explain ...
One file response is the holly grail of this

### Modularity

Modularity
Where to glue things
keeping code compartmentalized

### State should only live in the Store

Do not use ReactNavigator please!
Looks like ReactNavigator finally realized it sucks https://blog.expo.io/announcing-react-navigation-5-0-bd9e5d45569e
They also realized it https://github.com/react-navigation/redux-helpers
Testing, Rehydration, Logging
explain...

### Reducers are not parts of the state

Reducer dependency
explain...
examples...

## Simple rules

- Everything should be on state
- Every change is describe as an action
- Do not muate state inside reducers

## Breacking the rules

Router has its own state

Two states can cause race conditions, make it hard to debug, its not fully repla

Views can trigger navigation effectvily changing the state of the app without passing through an action

## Fixing it

faceyspacey/redux-first-router

## Standars - Best Practices

Use simple names for reducers e.g. `user`, we know it comes from a reducer.
Action constants CHAT::CHANGE_MESSAGE
Angular type constants [CHAT] CHANGE_MESSAGE ?
Throw an error when reducer type is not found, why should we fail silently?

https://redux-actions.js.org/
https://github.com/redux-utilities/flux-standard-action
https://github.com/paularmstrong/normalizr

https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/
https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc

## Tools

https://www.charlesproxy.com/
https://www.telerik.com/fiddler

https://logrocket.com/

https://facebook.github.io/stetho/

https://www.freecodecamp.org/news/inserting-uml-in-markdown-using-vscode/
http://plantuml.com/activity-diagram-beta

https://www.netlify.com/blog/2018/08/23/how-to-easily-visualize-a-projects-dependency-graph-with-dependency-cruiser/
https://blog.bitsrc.io/build-a-dependency-graph-profiler-in-js-caf087ce08ea
https://arkit.pro/svg/UDfDp34EW20C0C2zh-YeWrym37waaQe4sf82-dqTdI-vq3fv7r80MavQoKbGJ6s_t8In--2Vj8kYFKbFFAWq1jZuvcAL7PSL9_AS-WmGMEDtlbU28LS0

## State

State should represent UI and app state in its shape, not accommodate to database or API and then mutate to UI/App state

## Improvements

State doesn't need to be call reducer

## Tricky parts

Do not catch on Thunks [https://redux.js.org/advanced/async-actions](Link)

## Questions?

- What triggers the first dispatch that loads all the data in the app a view? and if it a view can we get it out?
- Is it a common practice to make a network middleware? what are the pros / cons?
- Detect not implemented actions
- See the whole state of the app in React Native Debugger
- how do you tell `src/support/navigation/navigators/LoggedInNavigator.js` which one is the default?
- is it a common practice to put the state in state.dataReducer.adReducer? would it be better to just do state.ad, date.user....
- should view components call service directly => yes

```js
  ping: () => {
    dispatch(pingSession())
  },
  // action types are spread all over the place, support, services, everyone knows about actions
```

- Which folders are allowed to create actions?
- Which folders are allowed to dispatch actions?

- navigates are scattered all over the app? because the view is the glue between router state and redux store, you can't nativigate from an action right?

## How to's indicators of readability

View the rutes of the app based on state

## Nice to have

Function tree
State mutators: set()

## What to contribute on

https://github.com/LogRocket/redux-logger

## Network Middleware

The network middleware allows us to dispatch simple actions that will call the API endpoints

## Data loading

When does it happens? What triggers it? They are dependent on the navigator
onMount ->

## TOREAD

no witch statements
no constant duplication const TYPE = 'TYPE'

```js
// Creates store, Add reducer directly
// Add Redux Dev Tools Extension
const store = configureStore({
  reducer: counter
})
```

```js
// Action creator creator :)
// Or, use `createAction` to generate the action creator:
const incrementNew = createAction('INCREMENT')
console.log(incrementNew())
// {type: "INCREMENT"}
```



https://amplitude.github.io/redux-query/docs/getting-started

https://medium.com/edge-coders/the-difference-between-flux-and-redux-71d31b118c1
https://blog.brainsandbeards.com/advanced-redux-patterns-selectors-cb9f88381d74

http://nicolashery.com/describing-ui-state-with-data/

https://itnext.io/make-services-a-natural-prt-of-redux-architecture-8a78b6a4b961

http://slides.com/joelkanzelmeyer/taming-large-redux-apps#/
https://dzone.com/articles/real-world-reactjs-and-redux-part-1
https://dzone.com/articles/real-world-reactjs-and-redux-part-2
https://www.youtube.com/watch?v=lI3IcjFg9Wk

https://github.com/redux-saga/redux-saga
https://redux-actions.js.org/
https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
https://blog.logrocket.com/improve-react-native-performance-with-immutability/

https://github.com/Reactive-Extensions/RxJS