/**
 * @file src/modules/css/classes.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * Methods for manipulating CSS classes (add, remove, toggle, has).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Adds one or more CSS classes to each element in the collection.
 * @param classNames
 * * One or more class names to be added
 * @returns
 * * The current jBase instance for method chaining
 */
export declare function addClass(this: jBase, ...classNames: string[]): jBase;
/**
 * * Removes one or more CSS classes from each element in the collection.
 * @param classNames
 * * One or more class names to be removed
 * @returns
 * * The current jBase instance for method chaining
 */
export declare function removeClass(this: jBase, ...classNames: string[]): jBase;
/**
 * * Toggles a CSS class (adds if missing, removes if present) for each element.
 * @param className
 * * The class name to toggle.
 * @returns
 * * The current jBase instance for method chaining.
 */
export declare function toggleClass(this: jBase, className: string): jBase;
/**
 * * Checks if at least one element in the collection has the specified class.
 * @param className
 * * The class name to check for.
 * @returns
 * * True if the class exists on at least one element, otherwise false.
 */
export declare function hasClass(this: jBase, className: string): boolean;
//# sourceMappingURL=classes.d.ts.map