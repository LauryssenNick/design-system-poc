# Design Tokens

## Token Levels

There are three levels of tokens that we use in our Hexagon design system.

1. Core tokens
2. Semantic tokens
3. Component tokens

### Core Tokens

These tokens contain raw values and with that are the basis of our design system.
They are intended to only be used internally.

### Semantic Tokens

These are tokens that consume the core tokens and use them to describe the purpose of them.

### Component Tokens

Here we use the semantic tokens and tie them to a specific component value.

## Token Names

The token names are constructed on a set of different elements.

1. Namespace
2. Type
3. Category
4. State

### Namespace

This refers to a prefix that is added to all tokens in the design system.

This means that all our tokens will start with:

```
--ktn
```

### Level

To make it clear which kind of token it is we add the level to it. Either `core`, `semantic` or the name of the component e.g. `button`

```
--ktn-core
--ktn-semantic
--ktn-button
```

### Type

This is the type of token that we are using e.g. `color` or `radius`

```
--ktn-core-color
```

### Category

Tokens can often be categorised depending on where or when they should be used.

```
--ktn-semantic-color-primary
```

### State

States are especially useful for interactive elements.

```
--ktn-semantic-color-primary-hover
```
