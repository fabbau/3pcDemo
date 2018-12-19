# Code example -> 3pc

> Coding demo for 3pc

This is a coding demo for a small frontend interface. It uses:
- Parcel as package manager 
- SASS for better CSS 
- jQuery for easier JS

### Parcel
Parcel is a fast web application bundler (more Info here: <a href="https://parceljs.org" target="_blank">Parcel</a>).
It has a build in webserver, supports HMR (hot module replacement) out of the box and ships natively with <a href="http://postcss.org/" target="_blank">PostCSS</a> and minifiers for JavaScript, CSS and HTML.

---

## How did I solve the coding demo

For a better code structure I tried to follow the <a href="https://www.google.com/search?q=+BEM-Methodology" target="_blank">BEM-Methodology</a>. Therefore I split the JavaScript and CSS code in a few different files. The naming of the files corespondents to the components for what the code in the files is ment for. E.g the `_modal.scss` file contains only code for the ```html class="modal"``` element.

Then, with the help of jQuery a modal is revealed in which some sample data is dynamically loaded.

Finally, with some CSS rules and jQuery methods the content and styles of the modal gets some animation.

---

## Installation

First install the Parcel bundler CLI: 
> (more Info about Parceljs can be found here: <a href="https://parceljs.org" target="_blank">Parcel</a>)

```shell
$ npm install -g parcel-bundler
```

***Note: To get started, you need to have Node.js installed. If you don't have it, grab it here: ***
<a href="https://nodejs.org/" target="_blank">Node</a>

### Clone

- Clone this repo to your local machine with:  `https://github.com/`

### Setup

> install dependencies using npm

```shell
$ npm install
```

> Start dev server with HMR

```shell
$ parcel app/index.html
```
Go to `http://localhost:1234` and watch

> Run production build for minifying the files

```shell
$ parcel build app/index.html
```
- the output of this task can be found in the ```shell ./dist``` Folder
---
