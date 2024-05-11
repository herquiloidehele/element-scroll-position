# Element Scroll Position

This is a simple script that allows you to save and restore the scroll position of an element.

## Usage

```javascript
import { scrollPosition } from 'element-scroll-position';

const element = document.querySelector('.element');
const scroll = scrollPosition(element);

// And then we get this object
{
    isTop: boolean;
    isBetween: boolean
    isBottom: boolean;
}

```