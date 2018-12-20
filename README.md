# Yet Another Routing Library for React

## TODOS

- [x] Basic Routing
- [ ] Nested Routes
- [ ] Link (Navigation Component)
- [ ] Programmable Navigation
- [ ] Transition State
- [ ] Transition Mode
- [ ] Testing
- [ ] code splitting
- [ ] transition state for lazy loaded rotue

## API design

React-Router like API

```jsx
<Router>
  <Route path="/" exact component={Index} />
  <Route path="/about" component={About} />
  <Route path="/users" component={Users} />
</Router>
```

## Transition State

before-enter
enter
entered
before-leave
leave
left
