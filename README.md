# Frontend Mentor - Article Preview Component Solution

<div align="center">

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NEWBIE](https://img.shields.io/badge/Frontend_Mentor-NEWBIE-3DB8FF?style=for-the-badge)

</div>

A responsive article preview component built as part of a Frontend Mentor challenge.

This project focuses on responsive layouts, Flexbox, positioning, interactive states, JavaScript DOM manipulation, tooltips, and mobile adaptations.

---

## Preview

![Design preview for the Article Preview Component](./design/desktop-preview.jpg)

---

## Live Demo

- Live Site:https://juansanchezzzzz.github.io/Article-Preview-Component-Solution/
- Frontend Mentor Challenge: https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT

---

# Overview

This project recreates the Article Preview Component design provided by Frontend Mentor.

The main objectives were:

- Semantic HTML5 structure
- Responsive layouts
- Flexbox positioning
- JavaScript interactions
- Share tooltip creation
- Mobile adaptations
- Relative and absolute positioning
- State management with CSS classes
- Clean and scalable CSS architecture

---

# Challenges Faced

## Creating a Full Height Layout

One of the concepts I reinforced was creating a layout that fills the viewport while keeping the footer at the bottom.

```css
body{
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}

main{
    flex: 1;
}
```

This helped me better understand page-level Flexbox layouts and how available space can be distributed automatically.

---

## Keeping the Footer at the Bottom

To keep the attribution section pinned to the bottom of the page, I used:

```css
.attribution{
    margin-top: auto;
}
```

This reinforced how auto margins behave inside Flexbox containers.

---

## Understanding Overflow

While building the card layout, I learned how overflow affects elements and how it can be controlled.

```css
overflow: hidden;
```

This was particularly useful when cropping images and preventing content from escaping the card boundaries.

---

## Making the Image Adapt to Smaller Screens

The desktop design uses a horizontal card layout, while the mobile version stacks everything vertically.

To make the image adapt properly during resizing, I worked with:

```css
.image-card{
    flex: 0 1 20rem;
}
```

This helped me understand how flex items shrink and share available space.

---

## Working with Relative and Absolute Positioning

One of the biggest challenges was positioning the share tooltip correctly.

```css
.info-card{
    position: relative;
}

.share-container{
    position: absolute;
}
```

This reinforced the relationship between absolutely positioned elements and their nearest positioned ancestor.

---

## Understanding the Default Position Value

During development I learned that the default value for the `position` property is:

```css
position: static;
```

I also learned why `top`, `left`, `right`, and `bottom` only work when another positioning mode is applied.

---

## Building the Share Tooltip

The share panel required a floating tooltip effect.

```css
.share-container{
    visibility: hidden;
}

.share-container.active{
    visibility: visible;
}
```

This improved my understanding of component states and interactive UI design.

---

## Using JavaScript to Toggle States

The share button needed to show and hide the tooltip.

```js
shareCont.classList.toggle("active");
```

This reinforced my understanding of DOM manipulation and class-based state management.

---

## Reading CSS Properties with JavaScript

I learned how to read computed CSS values using:

```js
getComputedStyle(element).visibility
```

This made it possible to inspect styles applied through CSS rather than inline styles.

---

## Creating Different Behaviors for Desktop and Mobile

One of the most interesting challenges was creating different interactions depending on screen size.

### Desktop

- Floating share tooltip
- Author information remains visible

### Mobile

- Share panel replaces author information
- Share button remains visible
- Layout adapts to a bottom action bar

This taught me how component behavior can change across breakpoints.

---

## Styling SVG Icons

While working on the share button, I discovered that the `color` property does not affect SVG files loaded through an `<img>` tag.

Instead, I used:

```css
filter: brightness(0) invert(1);
```

to create a white version of the icon when the button becomes active.

---

## Creating Circular Icon Buttons

To match the design, the share icon needed a circular background.

```css
.share-icon-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
```

This reinforced the use of Flexbox for alignment and component creation.

---

## Understanding `white-space: nowrap`

While styling text elements, I learned how to prevent content from wrapping onto multiple lines.

```css
white-space: nowrap;
```

This is useful for names, labels, buttons, and other interface elements that should remain on a single line.

---

## Improving Responsive Layouts

The mobile version required several layout adjustments.

```css
@media (max-width: 41rem){
    .card{
        flex-direction: column;
    }
}
```

This gave me more experience adapting layouts to different screen sizes and improving usability across devices.

---

# Built With

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Custom Properties
- Media Queries
- CSS Positioning
- DOM Manipulation
- Responsive Design
- Semantic HTML

---

# What I Learned

Through this project I gained more experience with:

- Building responsive layouts with Flexbox
- Creating full-height page layouts
- Using `100dvh`
- Keeping footers pinned to the bottom
- Managing overflow
- Understanding Flexbox shrinking behavior
- Working with relative and absolute positioning
- Understanding positioning contexts
- Creating tooltips
- Building interactive UI components
- Using JavaScript event listeners
- Using `classList.toggle()`
- Reading computed CSS values
- Managing component states
- Creating different desktop and mobile experiences
- Styling SVG icons
- Using CSS filters
- Creating circular action buttons
- Using `white-space: nowrap`
- Debugging responsive layouts
- Writing cleaner and more maintainable CSS

---

# Future Improvements

If I were to rebuild this project, I would:

- Start with a fully mobile-first workflow
- Improve tooltip animations
- Add smoother transitions between states
- Improve accessibility with keyboard navigation
- Add ARIA attributes to interactive controls
- Refine breakpoint management
- Explore CSS Grid for alternative layouts

---

# Author

- Frontend Mentor - https://www.frontendmentor.io/profile/juansanchezzzzz
- GitHub - https://github.com/juansanchezzzzz# Article-Preview-Component-Solution
