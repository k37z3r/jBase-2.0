* [`attr`](#usage-attr) | [`val`](#usage-val)

---

## <a id="usage-attr"></a>.attr

**Description**
Get the value of an attribute for the first element in the set, or set one or more attributes for every matched element.

**Parameters**

* `name` (String): The name of the attribute.
* `value` (String|Number, optional): The value to set. If omitted, the method acts as a getter.

**Returns**

* (String): Value of the attribute (if getter).
* (jBase): Current instance for chaining (if setter).

**Example**

```javascript
// Get href
const link = $('a.my-link').attr('href');

// Set id and title
$('.item').attr('id', 'item-1').attr('title', 'Item One');

```

---

## <a id="usage-val"></a>.val

**Description**
Get the current value of the first element in the set of matched elements or set the value of every matched element.

**Parameters**

* `value` (String|Number, optional): The value to set.

**Returns**

* (String|Number): The value of the input (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
// Get input value
const username = $('#username').val();

// Set input value
$('#username').val('NewUser');

```