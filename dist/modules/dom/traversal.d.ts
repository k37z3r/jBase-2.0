/**
 * @file src/modules/dom/traversal.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for navigating the DOM tree (find, parent, children, siblings).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Traverses the parents (heading toward the document root) of each element and finds the first element that matches the specified selector.
 * @param selector
 * * A string containing a selector expression.
 * @returns
 * * A new jBase instance containing the matched elements.
 */
export declare function closest(this: jBase, selector: string): jBase;
/**
 * * Gets the direct parent of each element in the current set. Deduplicates results.
 * @returns
 * * A new jBase instance containing the parent elements.
 */
export declare function parent(this: jBase): jBase;
/**
 * * Gets the direct children of each element in the set, optionally filtered by a selector.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance containing the children.
 */
export declare function children(this: jBase, selector?: string): jBase;
/**
 * * Finds descendants (deep) that match the selector using `querySelectorAll`.
 * @param selector
 * * The CSS selector to search for.
 * @returns
 * * A new jBase instance with the found elements.
 */
export declare function findAll(this: jBase, selector: string): jBase;
/**
 * * Recursively gets ALL descendants (not just direct children).
 * @returns
 * * A new jBase instance with all descendants.
 */
export declare function descendants(this: jBase): jBase;
/**
 * * Gets all ancestors (parents, grandparents...) up to the root. Optionally filtered.
 * @param selector
 * * (Optional) Filter selector for ancestors.
 * @returns
 * * A new jBase instance with the ancestors.
 */
export declare function parents(this: jBase, selector?: string): jBase;
/**
 * * Gets all ancestors UP TO (but not including) an element matching the selector.
 * @param selector
 * * The selector where traversal stops.
 * @param filter
 * * (Optional) Filter for the collected elements.
 * @returns
 * * A new jBase instance.
 */
export declare function parentsUntil(this: jBase, selector: string, filter?: string): jBase;
/**
 * * Recursively finds descendants but stops traversing a branch if `untilSelector` is met. Useful for finding nested elements without going too deep (e.g., nested forms).
 * @param untilSelector
 * * The selector that stops recursion in a branch.
 * @param filter
 * * (Optional) Selector to filter collected elements.
 * @returns
 * * A new jBase instance.
 */
export declare function descendantsUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * Gets the immediately following sibling.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export declare function next(this: jBase, selector?: string): jBase;
/**
 * * Gets the immediately preceding sibling.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export declare function prev(this: jBase, selector?: string): jBase;
/**
 * * Alias for `next()`.
 */
export declare function nextSibling(this: jBase, selector?: string): jBase;
/**
 * * Alias for `prev()`.
 */
export declare function prevSibling(this: jBase, selector?: string): jBase;
/**
 * * Alias for `next()`.
 */
export declare function sibling(this: jBase, selector?: string): jBase;
/**
 * * Gets ALL following siblings.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export declare function nextAll(this: jBase, selector?: string): jBase;
/**
 * * Gets ALL preceding siblings.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export declare function prevAll(this: jBase, selector?: string): jBase;
/**
 * * Gets ALL siblings (previous and next), excluding itself.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export declare function siblings(this: jBase, selector?: string): jBase;
/**
 * * Gets all following siblings UNTIL a selector is met (exclusive).
 * @param untilSelector
 * * The selector that stops the search.
 * @param filter
 * * (Optional) Filter for the found elements.
 * @returns
 * * A new jBase instance.
 */
export declare function nextUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * Gets all preceding siblings UNTIL a selector is met (exclusive).
 * @param untilSelector
 * * The selector that stops the search.
 * @param filter
 * * (Optional) Filter for the found elements.
 * @returns
 * * A new jBase instance.
 */
export declare function prevUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * Reduces the set to the element at the specified index. Supports negative indices.
 * @param index
 * * The position (0-based). Negative values count from the end.
 * @returns
 * * A new jBase instance containing the single element (or empty).
 */
export declare function eq(this: jBase, index: number): jBase;
/**
 * * Reduces the set to the first element.
 */
export declare function first(this: jBase): jBase;
/**
 * * Reduces the set to the last element.
 */
export declare function last(this: jBase): jBase;
/**
 * * Filters elements based on a selector or a function.
 * @param selectorOrFn
 * * CSS selector string or filter function.
 * @returns
 * * A new jBase instance with filtered elements.
 */
export declare function filterBy(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase;
/**
 * * Removes elements from the set that match the selector or function (Inverse of filterBy).
 * @param selectorOrFn
 * * CSS selector string or filter function.
 * @returns
 * * A new jBase instance with remaining elements.
 */
export declare function not(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase;
//# sourceMappingURL=traversal.d.ts.map