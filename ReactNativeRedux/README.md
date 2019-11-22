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

