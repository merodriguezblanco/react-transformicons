# react-transformicons

**Plugin in development**

## Introduction

Transformicons for React.

## Installation

- `git clone git@github.com:merodriguezblanco/react-transformicons.git`
- `npm install react-transformicons`

## Transformicon Components

- [`t-menu`](#menu)
- [`t-grid`](#grid)

### Menu
Provides with Menu icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `butterfly`.
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Usage

```handlebars
<MenuIcon />
<MenuIcon animation="butterly" />
<MenuIcon animation="minus" />
<MenuIcon animation="x-cross" />
<MenuIcon animation="arrow-up" />
<MenuIcon animation="arrow-360-left" />
<MenuIcon animation="arrow-left" />
<MenuIcon animation="arrow-left" isActive={true} />
```

### Grid

Provides with Grid icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, a default one will be provided.
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  false.

Optional parameters:
- `animation` - string - Sets the menu animation type. In case this parameter is
  not provided, it will default to `rearrange`.
- `isActive` - boolean - Sets initial state for the button. Defaults to
  false.

#### Usage

```handlebars
<GridIcon />
<GridIcon animation="rearrange" />
<GridIcon animation="collapse" />
<GridIcon animation="collapse" isActive={true} />
```

# Contributions
We welcome and appreciate [contributions](CONTRIBUTING.md)!
