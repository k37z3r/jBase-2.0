/**
 * @file src/modules/dom/attributes.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for getting and setting HTML attributes and properties (attr, data, val).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Gets an attribute from the first element or sets it for all elements in the selection.
 * @param name
 * * The name of the attribute (e.g., 'href', 'data-id').
 * @param value
 * * (Optional) The value to set. If undefined, acts as a getter.
 * @returns
 * * The attribute value (string/null) when reading, or the jBase instance when writing.
 */
export declare function attr(this: jBase, name: string, value?: string): string | null | jBase;
/**
 * * Gets the 'value' from the first form element or sets it for all elements. Supports Input, Textarea, and Select elements.
 * @param value
 * * (Optional) The value to set. If undefined, acts as a getter.
 * @returns
 * * The current value as a string when reading, or the jBase instance when writing.
 */
export declare function val(this: jBase, value?: string): string | jBase;
//# sourceMappingURL=attributes.d.ts.map