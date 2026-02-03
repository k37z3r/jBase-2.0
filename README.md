# jBase

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-GPL--3.0-green.svg?style=flat-square)
![Size](https://img.shields.io/badge/size-lightweight-orange.svg?style=flat-square)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)

**A modern, lightweight, and modular JavaScript framework for high-performance DOM manipulation, event handling, and data management.**

jBase offers a familiar chainable API (similar to jQuery) but is built on modern ES6+ standards. It goes beyond UI logic by including a robust set of immutable data utilities for handling complex arrays and objects.

---

## 📥 Installation

### via NPM / Yarn (coming soon)
Ideal for modern web apps using bundlers like Webpack, Vite, or Rollup.

```bash
npm install jbase
# or
yarn add jbase

```

### via Script Tag (CDN)

Simply download the minified file and include it in your HTML.

```html
<script src="dist/jbase.min.js"></script>

```

---

## 🚀 Quick Start

jBase exposes itself globally as `jBase` and the shorthand `$`.

### 1. DOM Manipulation & Events

```javascript
import { $ } from 'jbase';

$(document).ready(() => {
    // Select elements and modify CSS
    $('.card').css({ 
        'background-color': '#f8f9fa',
        'border-radius': '8px' 
    });

    // Handle events
    $('#save-btn').on('click', (e) => {
        e.preventDefault();
        $('.status').text('Saved successfully!').fadeIn(300);
    });
});

```

### 2. Powerful Data Utilities

jBase includes a unique `$.data` module for **immutable** array and object manipulation.

```javascript
const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
];

// Find specific data efficiently
const admin = $.data.find.first(users, 'admin', 'exact', 'role');

// Remove data immutably (returns a new array)
const nonAdmins = $.data.remove.byMatch(users, 'admin', 'exact', 'role');

```

### 3. HTTP Requests

Simple, Promise-based AJAX wrappers.

```javascript
$.http.get('https://api.example.com/items')
    .then(data => console.log('Items loaded:', data))
    .catch(err => console.error('Error:', err));

```

---

## 📚 Documentation

Detailed documentation for all methods is available in the **[GitHub Wiki](../../wiki)**.


---

## 🛠 Usage in Node.js

jBase can be used in Node.js environments. Note that DOM-related methods require a window context (like jsdom), but **Data** and **HTTP** utilities work natively.

```javascript
const { $ } = require('jbase');

// Use Data Utils on the server side
const merged = $.data.mergeObjects({ a: 1 }, { b: 2 });

```

---

## ©️ License & Author

**jBase** is open-source software licensed under the **[GPL-3.0-or-later](LICENSE)**.

**Author:** Sven Minio

**Website:** [sven-minio.de](https://sven-minio.de)

**Copyright:** © 2026 Sven Minio

```
