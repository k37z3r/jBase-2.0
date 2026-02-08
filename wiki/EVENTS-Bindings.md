* [`on`](#usage-on) | [`off`](#usage-off)

---

## <a id="usage-on"></a>.on

**Description**
Attach an event handler function for one or more events to the selected elements.

**Parameters**

* `event` (String): One or more event types separated by space (e.g., "click" or "click keydown").
* `handler` (Function): A function to execute when the event is triggered.

**Returns**

* (jBase): Current instance.

**Example**

```javascript
$('button').on('click', function(e) {
    console.log('Button clicked!', e);
});

```

---

## <a id="usage-off"></a>.off

**Description**
Remove an event handler.

**Parameters**

* `event` (String): The event type.
* `handler` (Function, optional): The specific handler function to remove. If omitted, all handlers for that event type might be removed (depending on implementation).

**Returns**

* (jBase): Current instance.

**Example**

```javascript
function handleClick() { console.log('Clicked'); }

// Bind
$('button').on('click', handleClick);

// Unbind
$('button').off('click', handleClick);

```