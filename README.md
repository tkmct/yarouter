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
- [ ] transition state for lazy loaded route
- [ ] Server side rendering

## How to use

### Basic Routing

```jsx
<Router>
  <Route path="/" exact component={Index} />
  <Route path="/about" component={About} />
  <Route path="/users" component={Users} />
</Router>
```

### Transition Routing

```jsx
<TransitionRouter>
  <Route path="/" exact component={Index} />
  <Route path="/about" component={About} />
  <Route path="/users" component={Users} />
</TransitionRouter>
```

Routed Component receives transition state props

### Transition State

before-enter
enter
entered
before-leave
leave
left
