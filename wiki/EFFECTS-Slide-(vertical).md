
* [`slideDown`](#usage-slideDown) | [`slideUp`](#usage-slideUp) | [`slideToggleBox`](#usage-slideToggleBox)

---

## <a id="usage-slideDown"></a>.slideDown

**Description**
Display the matched elements with a sliding motion (expanding height downwards).

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
// Reveal a dropdown menu
$('.dropdown-menu').slideDown(200);

```

---

## <a id="usage-slideUp"></a>.slideUp

**Description**
Hide the matched elements with a sliding motion (collapsing height upwards).

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.dropdown-menu').slideUp(200);

```

---

## <a id="usage-slideToggleBox"></a>.slideToggleBox

**Description**
Display or hide the matched elements with a vertical sliding motion. Ideal for accordions or collapsible boxes.

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.accordion-header').click(function() {
    // Slide toggle the next element (the body)
    $(this).next().slideToggleBox(300);
});

```