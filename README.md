# Yet Another Routing Library for React
## TODOS
- [ ] Basic Routing
- [ ] Nested Routes
- [ ] Link (Navigation Component)
- [ ] Programmable Navigation
- [ ] Transition State

## API design
Other libraries

### react-router
```jsx
<Router>
  <Route path="/" exact component={Index} />
  <Route path="/about/" component={About} />
  <Route path="/users/" component={Users} />
</Router>
```

### @reach/router
```jsx
<Router>
  <Home path="/" />
  <Dash path="dashboard" />
</Router>
```

### universal-router
```jsx
const routes = [
  { path: '/one', action: () => <h1>Page One</h1> },
  { path: '/two', action: () => <h1>Page Two</h1> },
  { path: '(.*)', action: () => <h1>Not Found</h1> }
]

const router = new UniversalRouter(routes)

router.resolve({ pathname: '/one' }).then(component => {
  ReactDOM.render(component, document.body)
  // renders: <h1>Page One</h1>
})
```