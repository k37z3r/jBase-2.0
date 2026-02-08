* [`slideIn`](#usage-slideIn) | [`slideOut`](#usage-slideOut) | [`slideToggle`](#usage-slideToggle)

---

## <a id="usage-slideIn"></a>.slideIn

**Description**
Displays the matched elements with a sliding motion (usually from left to right or by expanding width).

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('#sidebar').slideIn(400);

```

---

## <a id="usage-slideOut"></a>.slideOut

**Description**
Hides the matched elements with a sliding motion (usually collapsing width or moving off-canvas).

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('#sidebar').slideOut(400);

```

---

## <a id="usage-slideToggle"></a>.slideToggle

**Description**
Display or hide the matched elements with a horizontal sliding motion.

**Parameters**

* `duration` (Number, optional): Duration in milliseconds.
* `callback` (Function, optional): A function to call once the animation is complete.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.drawer').slideToggle();

```