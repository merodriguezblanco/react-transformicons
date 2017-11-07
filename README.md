# react-transformicons

[![npm](https://badge.fury.io/js/react-transformicons.svg)](https://www.npmjs.com/package/react-transformicons)
[![Build Status](https://travis-ci.org/merodriguezblanco/react-transformicons.svg?branch=master)](https://travis-ci.org/merodriguezblanco/react-transformicons)

**Plugin in development**

## Introduction

Transformicons for React.

## Installation

    npm install react-transformicons

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MenuIcon } from 'react-transformicons';

ReactDOM.render(
  <MenuIcon animation="butterfly" />,
  document.getElementById('root')
);
```

## Transformicon Components

- [Menu Icons](#menu-icons)
- [Grid Icons](#grid-icons)
- [Add Icons](#add-icons)
- [Remove Icons](#remove-icons)
- [Contact Icons](#contact-icons)

### Menu Icons

Provides with Menu icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `butterfly`. Values available:
  - `butterfly`
  - `minus`
  - `x-cross`
  - `arrow-up`
  - `arrow-360-left`
  - `arrow-left`
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
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

### Grid Icons

Provides with Grid icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `rearrange`. Values available:
  - `rearrange`
  - `collapse`
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<GridIcon />
<GridIcon animation="rearrange" />
<GridIcon animation="collapse" />
<GridIcon animation="collapse" isActive={true} />
```

### Add Icons

Provides with Add icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `minus`. Values available:
  - `minus`
  - `check`
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<AddIcon />
<AddIcon animation="minus" />
<AddIcon animation="check" />
<AddIcon animation="minus" isActive={true} />
```

### Remove Icons

Provides with Remove icons.

Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `check`. Values available:
  - `check`
  - `chevron-left`
  - `chevron-right`
  - `chevron-down`
  - `chevron-up`
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<RemoveIcon />
<RemoveIcon animation="check" />
<RemoveIcon animation="chevron-left" />
<RemoveIcon animation="chevron-right" />
<RemoveIcon animation="chevron-down" />
<RemoveIcon animation="chevron-up" />
<RemoveIcon animation="check" isActive={true} />
```

### Contact Icons

Provides with Contact icons.

Parameters:
- `animation` - string, optional - So far, the only available animation
  is `email`.
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<ContactIcon />
<ContactIcon isActive={true}/>
<ContactIcon animation="email" />
```

# Contributions
We welcome and appreciate [contributions](CONTRIBUTING.md)!
