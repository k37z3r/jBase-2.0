## 1. Browser (Legacy / Static)
Download the `jbase.min.js` file (link above), upload it to your server, and include it in your HTML.

```html
<script src="/path/to/js/jbase.min.js"></script>

<script>
  // jBase is now available via '$' or 'jBase'
  $(document).ready(() => {
      console.log("jBase is ready!");
  });
</script>
```

---

## 2. Node.js / Bundlers (Webpack, Vite, Rollup) **coming soon**

If you are using a modern stack or server-side rendering (SSR), you can import jBase as a module.

```bash
npm install @k37z3r/jbase
# or
yarn add @k37z3r/jbase

```

**Usage in TypeScript/ESM:**

```typescript
import { $ } from 'jbase';

// Use as usual
$('.element').addClass('active');

```

**Usage in CommonJS (Node.js require):**

```javascript
const { $ } = require('jbase');
$('.element').addClass('active');

```