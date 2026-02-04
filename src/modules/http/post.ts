/**
 * @file src/modules/http/post.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category HTTP
 * * @description
 * * 🇬🇧: Abstraction for HTTP POST requests.
 * * 🇩🇪: Abstraktion für HTTP POST-Anfragen.
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

/**
 * * 🇬🇧: Performs an asynchronous HTTP POST request to the specified URL. Automatically sets the 'Content-Type' header to 'application/json' and serializes the body.
 * * 🇩🇪: Führt einen asynchronen HTTP POST-Request an die angegebene URL durch. Setzt automatisch den 'Content-Type'-Header auf 'application/json' und serialisiert den Body.
 * @template T
 * * 🇬🇧: The expected response type (Generic).
 * * 🇩🇪: Der erwartete Rückgabetyp der Antwort (Generic).
 * @param url
 * * 🇬🇧: The target URL for the request.
 * * 🇩🇪: Die Ziel-URL für den Request.
 * @param body
 * * 🇬🇧: The data to send (automatically JSON serialized). Default is {}.
 * * 🇩🇪: Die zu sendenden Daten (werden automatisch JSON-serialisiert). Standard ist {}.
 * @returns
 * * 🇬🇧: A Promise resolving with the deserialized JSON response of type T.
 * * 🇩🇪: Ein Promise, das mit der deserialisierten JSON-Antwort vom Typ T aufgelöst wird.
 * @throws
 * * 🇬🇧: Error if the HTTP status code is not in the range 200-299.
 * * 🇩🇪: Error, wenn der HTTP-Statuscode nicht im Bereich 200-299 liegt.
 */
export async function post<T>(url: string, body: any = {}): Promise<T> {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    // Handle HTTP 204 (No Content):
    // Prevents SyntaxError because response.json() fails on empty body.
    if (response.status === 204) {
        const text = await response.text();
        return text ? JSON.parse(text) : {} as T;
    }

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
}