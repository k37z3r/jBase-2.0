* [`css`](#usage-css)
* [`addClass`](#usage-addClass) | [`removeClass`](#usage-removeClass) | [`toggleClass`](#usage-toggleClass) | [`hasClass`](#usage-hasClass)

---

## <a id="usage-css"></a>.css

**Description**
Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.

**Parameters**

* `property` (String|Object): A CSS property name or an object of property-value pairs.
* `value` (String|Number, optional): A value to set for the property.

**Returns**

* (String): The value of the property (if getter).
* (jBase): Current instance (if setter).

**Example**

```javascript
// Get value
const color = $('.box').css('color');

// Set single value
$('.box').css('width', '500px');

// Set multiple values
$('.box').css({
    'background-color': 'blue',
    'font-size': '14px'
});

```

---

## <a id="usage-addClass"></a>.addClass

**Description**
Adds the specified class(es) to each element in the set of matched elements.

**Parameters**

* `className` (String): One or more class names to be added to the class attribute of each matched element.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('p').addClass('lead text-muted');

```

---

## <a id="usage-removeClass"></a>.removeClass

**Description**
Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

**Parameters**

* `className` (String): One or more class names to be removed.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.active').removeClass('active');

```

---

## <a id="usage-toggleClass"></a>.toggleClass

**Description**
Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

**Parameters**

* `className` (String): One or more class names to be toggled.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.btn').click(function() {
    $(this).toggleClass('btn-active');
});

```

---

## <a id="usage-hasClass"></a>.hasClass

**Description**
Determine whether any of the matched elements are assigned the given class.

**Parameters**

* `className` (String): The class name to search for.

**Returns**

* (Boolean): True if the class is present, false otherwise.

**Example**

```javascript
if ($('#menu').hasClass('open')) {
    $('#menu').slideUp();
}

```