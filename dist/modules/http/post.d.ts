/**
 * @file src/modules/http/post.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category HTTP
 * * @description
 * * Abstraction for HTTP POST requests.
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
/**
 * * Performs an asynchronous HTTP POST request to the specified URL. Automatically sets the 'Content-Type' header to 'application/json' and serializes the body.
 * @template T
 * * The expected response type (Generic).
 * @param url
 * * The target URL for the request.
 * @param body
 * * The data to send (automatically JSON serialized). Default is {}.
 * @returns
 * * A Promise resolving with the deserialized JSON response of type T.
 * @throws
 * * Error if the HTTP status code is not in the range 200-299.
 */
export declare function post<T>(url: string, body?: any): Promise<T>;
//# sourceMappingURL=post.d.ts.map