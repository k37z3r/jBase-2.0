* [`checked`](#usage-checked) | [`selected`](#usage-selected) | [`disabled`](#usage-disabled)

---

## <a id="usage-checked"></a>.checked

**Description**
Get the checked state of the first element or set the state for all matched elements.

**Parameters**

* `state` (Boolean, optional): True to check, false to uncheck.

**Returns**

* (Boolean): Current state (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
if ($('#agree').checked()) {
    // do something
}
$('#agree').checked(true);

```

---

## <a id="usage-selected"></a>.selected

**Description**
Get the selected state of an option or set it.

**Parameters**

* `state` (Boolean, optional): True to select, false to deselect.

**Returns**

* (Boolean): Current state (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
$('option[value="de"]').selected(true);

```

---

## <a id="usage-disabled"></a>.disabled

**Description**
Get the disabled state of an element or set it.

**Parameters**

* `state` (Boolean, optional): True to disable, false to enable.

**Returns**

* (Boolean): Current state (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
$('button').disabled(true);

```