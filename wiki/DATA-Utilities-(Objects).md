* [`mergeObjects`](#usage-mergeObjects) | [`pick`](#usage-pick) | [`omit`](#usage-omit)
* [`get`](#usage-obj-get) | [`set`](#usage-obj-set)
* [`find.key`](#usage-find-key) | [`find.value`](#usage-find-value) | [`find.at`](#usage-find-at) | [`find.first`](#usage-find-first) | [`find.last`](#usage-find-last)

---

## <a id="usage-mergeObjects"></a>.mergeObjects

**Description**
Recursively merges one or more source objects into a target object (Deep Merge).
*Note: This modifies the `target` object in place.*

**Parameters**

* `target` (Object): The target object to receive properties.
* `...sources` (Object[]): One or more source objects to merge into the target.

**Returns**

* (Object): The modified target object.

**Example**

```javascript
const defaults = { app: { theme: 'light', debug: false } };
const config = { app: { debug: true } };

$.data.mergeObjects(defaults, config);
// defaults is now: { app: { theme: 'light', debug: true } }

```

---

## <a id="usage-pick"></a>.pick

**Description**
Creates a new object containing *only* the specified keys (Allowlist).

**Parameters**

* `obj` (Object): The source object.
* `keys` (String[]): An array of keys to keep.

**Returns**

* (Object): A new object with the selected keys.

**Example**

```javascript
const user = { id: 1, name: 'Alice', role: 'admin' };
const publicProfile = $.data.pick(user, ['name']);
// Result: { name: 'Alice' }

```

---

## <a id="usage-omit"></a>.omit

**Description**
Creates a new object containing all keys *except* the specified ones (Blocklist).

**Parameters**

* `obj` (Object): The source object.
* `keys` (String[]): An array of keys to remove.

**Returns**

* (Object): A new object without the specified keys.

**Example**

```javascript
const user = { id: 1, name: 'Alice', password: '123' };
const safeUser = $.data.omit(user, ['password']);
// Result: { id: 1, name: 'Alice' }

```

---

## <a id="usage-get"></a>.get

**Description**
Safely retrieves a value from a nested object using dot-notation. Returns `undefined` if the path does not exist, preventing runtime errors.

**Parameters**

* `obj` (Object): The object to query.
* `path` (String): The path as a dot-notation string (e.g., `'user.address.city'`).

**Returns**

* (Any): The found value or `undefined`.

**Example**

```javascript
const val = $.data.get(response, 'data.items.0.id');

```

---

## <a id="usage-set"></a>.set

**Description**
Sets a value deeply within a nested object. It automatically creates missing intermediate objects if the path doesn't exist.

**Parameters**

* `obj` (Object): The object to modify.
* `path` (String): The path string (e.g., `'settings.theme.color'`).
* `value` (Any): The value to set.

**Returns**

* (Void): This function mutates the object and returns nothing.

**Example**

```javascript
const config = {};
$.data.set(config, 'database.connection.host', 'localhost');
// config is now: { database: { connection: { host: 'localhost' } } }

```

---

## <a id="usage-find-at"></a>.find.at

**Description**
Returns the n-th entry of an object as a `[key, value]` pair. Supports negative indices to count from the end.

**Parameters**

* `obj` (Object): The object to search.
* `index` (Number): The 0-based index. Negative numbers count from the back.

**Returns**

* ([String, Any] | undefined): A tuple containing the key and value, or undefined.

**Example**

```javascript
const data = { a: 1, b: 2, c: 3 };
const entry = $.data.find.at(data, -1);
// Result: ['c', 3]

```

---

## <a id="usage-find-first"></a>.find.first

**Description**
Finds the **first** entry where the key or value matches the query.

**Parameters**

* `obj` (Object): The object to search.
* `query` (String|Number): The search term.
* `mode` (String, optional): Comparison mode: `'exact'`, `'contains'`, `'startsWith'`, `'endsWith'`. Default is `'exact'`.
* `searchBy` (String, optional): Search by `'key'` or `'value'`. Default is `'key'`.

**Returns**

* ([String, Any] | undefined): The first matching `[key, value]` pair.

**Example**

```javascript
const config = { admin_id: 10, user_id: 20 };
// Find first entry where key starts with 'user'
const match = $.data.find.first(config, 'user', 'startsWith', 'key');
// Result: ['user_id', 20]

```

---

## <a id="usage-find-last"></a>.find.last

**Description**
Finds the **last** entry where the key or value matches the query. Useful for prioritized overrides or ordered objects.

**Parameters**

* `obj` (Object): The object to search.
* `query` (String|Number): The search term.
* `mode` (String, optional): `'exact'`, `'contains'`, `'startsWith'`, `'endsWith'`. Default is `'exact'`.
* `searchBy` (String, optional): `'key'` or `'value'`. Default is `'key'`.

**Returns**

* ([String, Any] | undefined): The last matching `[key, value]` pair.

**Example**

```javascript
const files = { 'script.js': 1, 'style.css': 2, 'main.css': 3 };
// Find last entry where key ends with '.css'
const match = $.data.find.last(files, '.css', 'endsWith', 'key');
// Result: ['main.css', 3]

```

---

## <a id="usage-find-key"></a>.find.key

**Description**
Finds **all keys** in the object that match the query.

**Parameters**

* `obj` (Object): The object to search.
* `query` (String): The search term.
* `mode` (String, optional): `'exact'`, `'contains'`, `'startsWith'`, `'endsWith'`. Default is `'exact'`.

**Returns**

* (String[]): An array of matching keys.

**Example**

```javascript
const settings = { theme_dark: true, theme_light: false, lang: 'en' };
const themes = $.data.find.key(settings, 'theme_', 'startsWith');
// Result: ['theme_dark', 'theme_light']

```

---

## <a id="usage-find-value"></a>.find.value

**Description**
Finds **all values** in the object that match the query.

**Parameters**

* `obj` (Object): The object to search.
* `query` (String): The search term.
* `mode` (String, optional): `'exact'`, `'contains'`, `'startsWith'`, `'endsWith'`. Default is `'exact'`.

**Returns**

* (Any[]): An array of matching values.

**Example**

```javascript
const roles = { bob: 'admin', alice: 'editor', john: 'admin' };
const admins = $.data.find.value(roles, 'admin', 'exact');
// Result: ['admin', 'admin']

```