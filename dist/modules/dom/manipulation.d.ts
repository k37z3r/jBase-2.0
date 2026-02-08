/**
 * @file src/modules/dom/manipulation.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for inserting, moving, and removing elements (append, prepend, remove).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Removes the selected elements from the DOM.
 * @returns
 * * The current jBase instance.
 */
export declare function remove(this: jBase): jBase;
/**
 * * Removes all child nodes and text content from the selected elements.
 * @returns
 * * The current jBase instance.
 */
export declare function empty(this: jBase): jBase;
/**
 * * Replaces each element with a deep clone of itself. Useful for removing all event listeners ("Nuke" strategy).
 * @returns
 * * A new jBase instance containing the cloned elements.
 */
export declare function replaceWithClone(this: jBase): jBase;
/**
 * * Inserts content at the end of each selected element (inside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export declare function append(this: jBase, content: string | Node | jBase): jBase;
/**
 * * Inserts content at the beginning of each selected element (inside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export declare function prepend(this: jBase, content: string | Node | jBase): jBase;
/**
 * * Inserts content before the element (outside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export declare function before(this: jBase, content: string | Node | jBase): jBase;
/**
 * * Inserts content after the element (outside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export declare function after(this: jBase, content: string | Node | jBase): jBase;
/**
 * * Replaces the element with new content.
 * @param content
 * * The new content.
 * @returns
 * * The current jBase instance.
 */
export declare function replaceWith(this: jBase, content: string | Node | jBase): jBase;
/**
 * * Appends the selected elements to the end of a target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export declare function appendTo(this: jBase, target: string | Element): jBase;
/**
 * * Prepends the selected elements to the beginning of a target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export declare function prependTo(this: jBase, target: string | Element): jBase;
/**
 * * Inserts the selected elements immediately before the target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export declare function insertBefore(this: jBase, target: string | Element): jBase;
/**
 * * Inserts the selected elements immediately after the target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export declare function insertAfter(this: jBase, target: string | Element): jBase;
/**
 * * Wraps each selected element with the specified HTML structure.
 * @param wrapperHtml
 * * HTML string defining the wrapper (e.g., `<div class="box"></div>`).
 * @returns
 * * The current jBase instance.
 */
export declare function wrap(this: jBase, wrapperHtml: string): jBase;
/**
 * * Removes the direct parent of the selected elements from the DOM.
 * @returns
 * * The current jBase instance.
 */
export declare function unwrap(this: jBase): jBase;
//# sourceMappingURL=manipulation.d.ts.map