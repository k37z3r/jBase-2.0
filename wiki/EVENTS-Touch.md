* [`touchstart`](#usage-touchstart) | [`touchend`](#usage-touchend) | [`touchmove`](#usage-touchmove) | [`touchcancel`](#usage-touchcancel)

---

## <a id="usage-touchstart"></a>.touchstart

**Description**
Bind an event handler to the "touchstart" event (finger is placed on a touch surface).

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.swipe-area').touchstart(function(e) {
    console.log('Touch started');
});

```

---

## <a id="usage-touchend"></a>.touchend

**Description**
Bind an event handler to the "touchend" event (finger is removed from a touch surface).

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.swipe-area').touchend(function(e) {
    console.log('Touch ended');
});

```

---

## <a id="usage-touchmove"></a>.touchmove

**Description**
Bind an event handler to the "touchmove" event (finger is dragged across the surface).

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.swipe-area').touchmove(function(e) {
    // prevent scrolling while swiping
    e.preventDefault(); 
});

```

---

## <a id="usage-touchcancel"></a>.touchcancel

**Description**
Bind an event handler to the "touchcancel" event (system cancels the touch event).

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('.swipe-area').touchcancel(function() {
    console.log('Touch cancelled');
});

```