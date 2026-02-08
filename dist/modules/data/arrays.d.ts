/**
 * @file src/modules/data/arrays.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * Utility functions for array manipulation and data processing.
 * @requires ./types
 * * Depends on types.
 */
import { MatchMode } from './types';
/**
 * * Splits an array into smaller groups (chunks). Ideal for pagination or grid layouts.
 * @example
 * chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * @param array
 * * The source array.
 * @param size
 * * The size of each chunk.
 * @returns
 * * An array of arrays.
 */
export declare function chunk<T>(array: T[], size: number): T[][];
/**
 * * Merges multiple arrays into a single flat array.
 * @param arrays
 * * A list of arrays.
 * @returns
 * * A new, merged array.
 */
export declare function mergeArray<T>(...arrays: T[][]): T[];
/**
 * * Safely adds an element at a specific position without mutating the original array (Immutable).
 * @param array
 * * The array.
 * @param item
 * * The item to add.
 * @param index
 * * The position (default: end). Negative values count from the back (-1 = before the last one).
 * @returns
 * * A new array including the element.
 */
export declare function add<T>(array: T[], item: T, index?: number): T[];
/**
 * * Removes elements based on index or match logic.
 */
export declare const remove: {
    /**
     * * Removes an element at a specific index.
     * @param array
     * * The array.
     * @param index
     * * The index (negative values allowed).
     */
    at<T>(array: T[], index: number): T[];
    /**
     * * Removes the first element.
     * @param array
     * * The array.
     */
    first<T>(array: T[]): T[];
    /**
     * * Removes the last element.
     * @param array
     * * The array.
     */
    last<T>(array: T[]): T[];
    /**
     * * Removes all elements matching a query condition.
     * @example
     * remove.byMatch(users, 'Admin', 'exact', 'role')
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     */
    byMatch<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): T[];
};
/**
 * * Searches for elements in the array.
 */
export declare const find: {
    /**
     * * Finds the index of the first match.
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     * @returns
     * * Index or -1.
     */
    at<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): number;
    /**
     * * Returns all elements matching the condition (Filter).
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     * @returns
     * * All matching elements or -1.
     */
    all<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): T[];
    /**
     * * Returns the first matching element (or undefined).
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     * @returns
     * * Index or -1.
     */
    first<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): T | undefined;
    /**
     * * Returns the last matching element (or undefined).
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     * @returns
     * * Index or -1.
     */
    last<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): T | undefined;
    /**
     * * Removes all elements matching a query condition.
     * @example
     * find.byMatch(users, 'Admin', 'exact', 'role')
     * @param array
     * * The array.
     * @param query
     * * The search query.
     * @param mode
     * * The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * (Optional) The object key if it is an array of objects.
     * @returns
     * * Index or -1.
     */
    byMatch<T>(array: T[], query: string | number, mode?: MatchMode, key?: keyof T): number | undefined;
};
//# sourceMappingURL=arrays.d.ts.map