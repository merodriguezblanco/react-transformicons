<p align="center">
  <img src="/img/transformicons.svg" alt="Transformicons" />
</p>

# react-transformicons

[![npm](https://badge.fury.io/js/react-transformicons.svg)](https://www.npmjs.com/package/react-transformicons)
[![Build Status](https://travis-ci.org/merodriguezblanco/react-transformicons.svg?branch=master)](https://travis-ci.org/merodriguezblanco/react-transformicons)

## Introduction

[Transformicons](http://www.transformicons.com/) for React.

## Installation

In your console run:

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
- [Form Icons](#form-icons)
- [Video Icons](#video-icons)
- [Scroll Icon](#scroll-icon)
- [Loader Icon](#loader-icon)

### Menu Icons

Provides with Menu icons.

![Menu Icons](/img/menu-icons.png)

#### Parameters:
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

![Grid Icons](/img/grid-icons.png)

#### Parameters:
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

![Add Icons](/img/add-icons.png)

#### Parameters:
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

![Remove Icons](/img/remove-icons.png)

#### Parameters:
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

![Contact Icons](/img/contact-icons.png)

#### Parameters:
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

### Form Icons

Provides with Form icons.

![Form Icons](/img/form-icons.png)

#### Parameters:
- `animation` - string, optional - So far, the only available animation
  is `search`.
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<FormIcon />
<FormIcon isActive={true}/>
<FormIcon animation="search" />
```

### Video Icons

Provides with Video icons.

![Video Icons](/img/video-icons.png)

#### Parameters:
- `animation` - string, optional - So far, the only available animation
  is `play`.
- `isActive` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```handlebars
<VideoIcon />
<VideoIcon isActive={true}/>
<VideoIcon animation="play" />
```

### Scroll Icon

Provides with a scroll icon.

![Scroll Icon](/img/scroll-icon.png)

#### Examples
```handlebars
<ScrollIcon />
```

### Loader Icon

Provides with a Loader icon.

![Loader Icon](/img/loader-icon.png)

#### Examples
```handlebars
<LoaderIcon />
```

# Contributions
We welcome and appreciate [contributions](CONTRIBUTING.md)!
