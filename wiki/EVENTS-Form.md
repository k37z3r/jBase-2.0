* [`submit`](#usage-submit) | [`change`](#usage-change) | [`input`](#usage-input) | [`focus`](#usage-focus) | [`blur`](#usage-blur)

---

## <a id="usage-submit"></a>.submit

**Description**
Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.

**Parameters**

* `handler` (Function, optional): A function to execute when the event is triggered. If omitted, the event is triggered manually.

**Returns**

* (jBase): Current instance.

**Example**

```js
$('#myForm').submit(function(e) {
    e.preventDefault();
    // Validate form...
});

```

---

## <a id="usage-change"></a>.change

**Description**
Bind an event handler to the "change" JavaScript event (fires when value is committed), or trigger it.

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```js
$('select').change(function() {
    console.log('New selection: ' + $(this).val());
});

```

---

## <a id="usage-input"></a>.input

**Description**
Bind an event handler to the "input" JavaScript event (fires immediately when value changes), or trigger it.

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```js
$('#search').input(function() {
    console.log('Typing: ' + $(this).val());
});

```

---

## <a id="usage-focus"></a>.focus

**Description**
Bind an event handler to the "focus" JavaScript event, or trigger it.

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```js
$('input').focus(function() {
    $(this).addClass('focused');
});

```

---

## <a id="usage-blur"></a>.blur

**Description**
Bind an event handler to the "blur" JavaScript event (lost focus), or trigger it.

**Parameters**

* `handler` (Function, optional): Function to execute.

**Returns**

* (jBase): Current instance.

**Example**

```js
$('input').blur(function() {
    $(this).removeClass('focused');
});

```