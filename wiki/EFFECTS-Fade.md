* [`fadeIn`](#usage-fadeIn) | [`fadeOut`](#usage-fadeOut) | [`fadeToggle`](#usage-fadeToggle)

---

## <a id="usage-fadeIn"></a>.fadeIn

**Description**
Display the matched elements by fading them to opaque (opacity: 1).

**Parameters**

* `duration` (Number, optional): A number determining how long the animation will run (in milliseconds). Default is usually 400.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
// Fade in all hidden paragraphs over 600ms
$('p.hidden').fadeIn(600, function() {
    console.log('Animation complete.');
});

```

---

## <a id="usage-fadeOut"></a>.fadeOut

**Description**
Hide the matched elements by fading them to transparent (opacity: 0). Once complete, the display property is often set to 'none'.

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.alert-box').fadeOut(300);

```

---

## <a id="usage-fadeToggle"></a>.fadeToggle

**Description**
Display or hide the matched elements by animating their opacity.

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
// Toggle visibility on click
$('#toggle-btn').click(() => {
    $('.content').fadeToggle();
});

```