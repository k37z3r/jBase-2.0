* [`ready`](#usage-ready)

---

## <a id="usage-ready"></a>.ready

**Description**
Specify a function to execute when the DOM is fully loaded.

**Parameters**

* `handler` (Function): A function to execute after the DOM is ready.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$(document).ready(function() {
    console.log('DOM is ready!');
});

```