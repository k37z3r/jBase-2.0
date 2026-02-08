* [`get`](#usage-http-get) | [`getText`](#usage-http-getText) | [`post`](#usage-http-post)

---

## <a id="usage-get"></a>.get

**Description**
Performs an asynchronous HTTP GET request. This method assumes the response is JSON and will automatically parse it.

**Parameters**

* `url` (String): A string containing the URL to which the request is sent.
* `headers` (Object, optional): An object of additional header key/value pairs to send along with the request.

**Returns**

* (Promise): A Promise that resolves with the parsed JSON data or rejects with an error.

**Example**

```javascript
$.http.get('https://api.example.com/users')
    .then(data => {
        console.log('Users loaded:', data);
    })
    .catch(err => {
        console.error('Error loading users:', err);
    });

```

---

## <a id="usage-getText"></a>getText

**Description**
Performs an asynchronous HTTP GET request. This method expects a raw text or HTML response and does not attempt to parse it as JSON. Ideal for loading HTML templates or config files.

**Parameters**

* `url` (String): A string containing the URL to which the request is sent.
* `headers` (Object, optional): An object of additional header key/value pairs.

**Returns**

* (Promise): A Promise that resolves with the raw string data.

**Example**

```javascript
$.http.getText('/partials/footer.html')
    .then(html => {
        $('#footer-container').html(html);
    });

```

---

## <a id="usage-post"></a>post

**Description**
Performs an asynchronous HTTP POST request to submit data to a server. The data is automatically stringified to JSON, and the `Content-Type` is set to `application/json` by default (unless overridden).

**Parameters**

* `url` (String): A string containing the URL to which the request is sent.
* `data` (Object): A plain object or array that is sent to the server.
* `headers` (Object, optional): An object of additional header key/value pairs.

**Returns**

* (Promise): A Promise that resolves with the server's response (parsed as JSON).

**Example**

```javascript
const payload = {
    username: 'jdoe',
    email: 'john@example.com'
};

$.http.post('/api/register', payload)
    .then(response => {
        if (response.success) {
            console.log('User registered!');
        }
    })
    .catch(err => {
        console.error('Registration failed:', err);
    });

```