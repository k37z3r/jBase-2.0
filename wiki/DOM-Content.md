* [`html`](#usage-html) | [`text`](#usage-text)

---

## <a id="usage-html"></a>.html

**Description**
Get the HTML contents of the first element in the set or set the HTML contents of every matched element.

**Parameters**

* `content` (String, optional): The HTML string to set.

**Returns**

* (String): Inner HTML (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
// Set HTML
$('#container').html('<div class="child">Hello</div>');

```

---

## <a id="usage-text"></a>.text

**Description**
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

**Parameters**

* `content` (String, optional): The text to set.

**Returns**

* (String): Text content (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
$('h1').text('Welcome to jBase');

```