/**
 * @file src/modules/data/arrays.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Utility functions for array manipulation and data processing.
 * * 🇩🇪: Hilfsfunktionen für Array-Manipulation und Datenverarbeitung.
 * @requires ./types
 * * 🇬🇧: Depends on match logic and types.
 * * 🇩🇪: Hängt von Match-Logik und Typen ab.
 */

import { MatchMode, checkMatch } from './types';

/**
 * * 🇬🇧: Splits an array into smaller groups (chunks). Ideal for pagination or grid layouts.
 * * 🇩🇪: Teilt ein Array in kleinere Gruppen (Chunks) auf. Ideal für Pagination oder Grid-Layouts.
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // => [[1, 2], [3, 4], [5]]
 * @param array
 * * 🇬🇧: The source array.
 * * 🇩🇪: Das Ursprungs-Array.
 * @param size
 * * 🇬🇧: The size of each chunk.
 * * 🇩🇪: Die Größe jedes Chunks.
 * @returns
 * * 🇬🇧: An array of arrays.
 * * 🇩🇪: Ein Array aus Arrays.
 */
export function chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * * 🇬🇧: Merges multiple arrays into a single flat array.
 * * 🇩🇪: Führt mehrere Arrays zu einem einzigen flachen Array zusammen.
 * @param arrays
 * * 🇬🇧: A list of arrays.
 * * 🇩🇪: Eine Liste von Arrays.
 * @returns
 * * 🇬🇧: A new, merged array.
 * * 🇩🇪: Ein neues, zusammengefügtes Array.
 */
export function mergeArray<T>(...arrays: T[][]): T[] {
    return [].concat(...(arrays as any));
}

/**
 * * 🇬🇧: Safely adds an element at a specific position without mutating the original array (Immutable).
 * * 🇩🇪: Fügt ein Element sicher an einer bestimmten Position hinzu, ohne das Original-Array zu mutieren (Immutable).
 * @param array
 * * 🇬🇧: The array.
 * * 🇩🇪: Das Array.
 * @param item
 * * 🇬🇧: The item to add.
 * * 🇩🇪: Das hinzuzufügende Element.
 * @param index
 * * 🇬🇧: The position (default: end). Negative values count from the back (-1 = before the last one).
 * * 🇩🇪: Die Position (Standard: Ende). Negative Werte zählen von hinten (-1 = vor dem letzten).
 * @returns
 * * 🇬🇧: A new array including the element.
 * * 🇩🇪: Ein neues Array inklusive dem Element.
 */
export function add<T>(array: T[], item: T, index: number = array.length): T[] {
    const copy = [...array];
    const idx = index < 0 ? array.length + index + 1 : index;
    copy.splice(idx, 0, item);
    return copy;
}

/**
 * * 🇬🇧: Removes elements based on index or match logic.
 * * 🇩🇪: Entfernt Elemente basierend auf Index oder Match-Logik.
 */
export const remove = {
    /**
     * * 🇬🇧: Removes an element at a specific index.
     * * 🇩🇪: Entfernt ein Element an einem spezifischen Index.
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param index
     * * 🇬🇧: The index (negative values allowed).
     * * 🇩🇪: Der Index (negativ möglich).
     */
    at<T>(array: T[], index: number): T[] {
        const copy = [...array];
        const idx = index < 0 ? array.length + index : index;
        if (idx >= 0 && idx < copy.length) {
            copy.splice(idx, 1);
        }
        return copy;
    },

    /**
     * * 🇬🇧: Removes the first element.
     * * 🇩🇪: Entfernt das erste Element.
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     */
    first<T>(array: T[]): T[] { return array.slice(1); },

    /**
     * * 🇬🇧: Removes the last element.
     * * 🇩🇪: Entfernt das letzte Element.
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     */
    last<T>(array: T[]): T[] { return array.slice(0, -1); },

    /**
     * * 🇬🇧: Removes all elements matching a query condition.
     * * 🇩🇪: Entfernt alle Elemente, die einer Suchbedingung entsprechen.
     * @example
     * remove.byMatch(users, 'Admin', 'exact', 'role')
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     */
    byMatch<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): T[] {
        return array.filter(item => {
            const val = key ? item[key] : item;
            return !checkMatch(val, query, mode);
        });
    }
};

/**
 * * 🇬🇧: Searches for elements in the array.
 * * 🇩🇪: Sucht Elemente im Array.
 */
export const find = {
    /**
     * * 🇬🇧: Finds the index of the first match.
     * * 🇩🇪: Findet den Index des ersten Treffers.
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     * @returns
     * * 🇬🇧: Index or -1.
     * * 🇩🇪: Index oder -1.
     */
    at<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): number {
        return array.findIndex(item => {
            const val = key ? item[key] : item;
            return checkMatch(val, query, mode);
        });
    },

    /**
     * * 🇬🇧: Returns all elements matching the condition (Filter).
     * * 🇩🇪: Gibt alle Elemente zurück, die der Bedingung entsprechen (Filter).
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     * @returns
     * * 🇬🇧: All matching elements or -1.
     * * 🇩🇪: Alle passenden Elemente oder -1.
     */
    all<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): T[] {
        return array.filter(item => {
            const val = key ? item[key] : item;
            return checkMatch(val, query, mode);
        });
    },

    /**
     * * 🇬🇧: Returns the first matching element (or undefined).
     * * 🇩🇪: Gibt das erste gefundene Element zurück (oder undefined).
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     * @returns
     * * 🇬🇧: Index or -1.
     * * 🇩🇪: Index oder -1.
     */
    first<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): T | undefined {
        return array.find(item => {
            const val = key ? item[key] : item;
            return checkMatch(val, query, mode);
        });
    },

    /**
     * * 🇬🇧: Returns the last matching element (or undefined).
     * * 🇩🇪: Gibt das letzte gefundene Element zurück (oder undefined).
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     * @returns
     * * 🇬🇧: Index or -1.
     * * 🇩🇪: Index oder -1.
     */
    last<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): T | undefined {
        return [...array].reverse().find(item => {
            const val = key ? item[key] : item;
            return checkMatch(val, query, mode);
        });
    },

    /**
     * * 🇬🇧: Removes all elements matching a query condition.
     * * 🇩🇪: Entfernt alle Elemente, die einer Suchbedingung entsprechen.
     * @example
     * find.byMatch(users, 'Admin', 'exact', 'role')
     * @param array
     * * 🇬🇧: The array.
     * * 🇩🇪: Das Array.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param key
     * * 🇬🇧: (Optional) The object key if it is an array of objects.
     * * 🇩🇪: (Optional) Der Objektschlüssel, falls es ein Array von Objekten ist.
     * @returns
     * * 🇬🇧: Index or -1.
     * * 🇩🇪: Index oder -1.
     */
    byMatch<T>(array: T[], query: string | number, mode: MatchMode = 'exact', key?: keyof T): number | undefined {
        return array.findIndex(item => {
            const val = key ? item[key] : item;
            return checkMatch(val, query, mode);
        });
    }
};