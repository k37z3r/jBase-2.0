/**
 * @file src/modules/http/get.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category HTTP
 * @description
 * * 🇬🇧: Abstraction for HTTP GET requests.
 * * 🇩🇪: Abstraktion für HTTP GET-Anfragen.
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

/**
 * * 🇬🇧: Performs an asynchronous HTTP GET request and expects a JSON response. Includes an automatic timeout of 5000ms to avoid hanging requests.
 * * 🇩🇪: Führt einen asynchronen HTTP GET-Request aus und erwartet eine JSON-Antwort. Beinhaltet einen automatischen Timeout von 5000ms, um hängende Requests zu vermeiden.
 * @template T
 * * 🇬🇧: The expected type of the response data (Generic).
 * * 🇩🇪: Der erwartete Typ der Antwortdaten (Generic).
 * @param url
 * * 🇬🇧: The target URL for the request.
 * * 🇩🇪: Die Ziel-URL für den Request.
 * @returns
 * * 🇬🇧: A Promise resolving with the typed JSON data.
 * * 🇩🇪: Ein Promise, das mit den typisierten JSON-Daten aufgelöst wird.
 * @throws
 * * 🇬🇧: Error if HTTP status is not in success range (200-299) or a timeout occurs.
 * * 🇩🇪: Error, wenn der HTTP-Status nicht im Erfolgsbereich (200-299) liegt oder ein Timeout auftritt.
 */
export async function get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
}

/**
 * * 🇬🇧: Performs an asynchronous HTTP GET request and returns the raw text content. Ideal for loading HTML fragments (Server-Side Rendering Partials) or plain text.
 * * 🇩🇪: Führt einen asynchronen HTTP GET-Request aus und gibt den rohen Text-Inhalt zurück. Ideal zum Nachladen von HTML-Fragmenten (Server-Side Rendering Partials) oder Plain-Text.
 * @param url
 * * 🇬🇧: The target URL for the request.
 * * 🇩🇪: Die Ziel-URL für den Request.
 * @returns
 * * 🇬🇧: A Promise containing the response body as a string.
 * * 🇩🇪: Ein Promise, das den Antwort-Body als String enthält.
 * @throws
 * * 🇬🇧: Error if HTTP status is not in success range (200-299).
 * * 🇩🇪: Error, wenn der HTTP-Status nicht im Erfolgsbereich (200-299) liegt.
 */
export async function getText(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.text();
}