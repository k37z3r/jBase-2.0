/**
 * @file src/modules/data/objects.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Utility functions for object manipulation (e.g., deep merging, extension).
 * * 🇩🇪: Hilfsfunktionen für Objekt-Manipulation (z.B. Deep Merge, Erweiterung).
 * @requires ./types
 * * 🇬🇧: Depends on match logic and types.
 * * 🇩🇪: Hängt von Match-Logik und Typen ab.
 */

import { MatchMode, checkMatch } from './types';

/**
 * * 🇬🇧: Recursively merges multiple objects (Deep Merge).
 * * 🇩🇪: Führt mehrere Objekte rekursiv zusammen (Deep Merge).
 * @example
 * mergeObjects({ a: 1, b: { x: 1 } }, { b: { y: 2 } }) // => { a: 1, b: { x: 1, y: 2 } }
 * @param target
 * * 🇬🇧: The target object (will be modified!).
 * * 🇩🇪: Das Zielobjekt (wird modifiziert!).
 * @param sources
 * * 🇬🇧: One or more source objects.
 * * 🇩🇪: Ein oder mehrere Quellobjekte.
 * @returns
 * * 🇬🇧: The modified target object.
 * * 🇩🇪: Das modifizierte Zielobjekt.
 */
export function mergeObjects(target: any, ...sources: any[]): any {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (key === '__proto__' || key === 'constructor') continue;
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeObjects(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeObjects(target, ...sources);
}

/**
 * * 🇬🇧: Creates a new object containing only the specified keys (Allowlist).
 * * 🇩🇪: Erstellt ein neues Objekt, das nur die angegebenen Schlüssel enthält (Allowlist).
 * @param obj
 * * 🇬🇧: The source object.
 * * 🇩🇪: Das Quellobjekt.
 * @param keys
 * * 🇬🇧: Array of keys to keep.
 * * 🇩🇪: Array der Schlüssel, die übernommen werden sollen.
 * @returns
 * * 🇬🇧: A new object with selected keys.
 * * 🇩🇪: Ein neues Objekt mit den gewählten Schlüsseln.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const ret: any = {};
    keys.forEach(key => {
        if (key in obj) ret[key] = obj[key];
    });
    return ret as Pick<T, K>;
}

/**
 * * 🇬🇧: Creates a new object containing all keys EXCEPT the specified ones (Blocklist).
 * * 🇩🇪: Erstellt ein neues Objekt, das alle Schlüssel enthält AUẞER den angegebenen (Blocklist).
 * @param obj
 * * 🇬🇧: The source object.
 * * 🇩🇪: Das Quellobjekt.
 * @param keys
 * * 🇬🇧: Array of keys to remove.
 * * 🇩🇪: Array der Schlüssel, die entfernt werden sollen.
 * @returns
 * * 🇬🇧: A new object without the specified keys.
 * * 🇩🇪: Ein neues Objekt ohne die angegebenen Schlüssel.
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const ret = { ...obj };
    keys.forEach(key => {
        delete ret[key];
    });
    return ret as Omit<T, K>;
}

/**
 * * 🇬🇧: Safely retrieves a value from a nested object (Safe Navigation).
 * * 🇩🇪: Liest einen Wert aus einem verschachtelten Objekt sicher aus (Safe Navigation).
 * @example
 * get(user, 'address.city') // Returns city or undefined
 * @param obj
 * * 🇬🇧: The object.
 * * 🇩🇪: Das Objekt.
 * @param path
 * * 🇬🇧: The path as a dot-notation string.
 * * 🇩🇪: Der Pfad als String mit Punkt-Notation.
 * @returns
 * * 🇬🇧: The found value or undefined.
 * * 🇩🇪: Der gefundene Wert oder undefined.
 */
export function get(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * * 🇬🇧: Sets a value deeply within a nested object. Creates missing intermediate objects automatically.
 * * 🇩🇪: Setzt einen Wert tief in einem verschachtelten Objekt. Erstellt fehlende Zwischen-Objekte automatisch.
 * @param obj
 * * 🇬🇧: The object to modify.
 * * 🇩🇪: Das zu modifizierende Objekt.
 * @param path
 * * 🇬🇧: The path as a string (e.g., 'settings.theme.color').
 * * 🇩🇪: Der Pfad als String (z.B. 'settings.theme.color').
 * @param value
 * * 🇬🇧: The value to set.
 * * 🇩🇪: Der zu setzende Wert.
 */
export function set(obj: any, path: string, value: any): void {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) current[part] = {};
        current = current[part];
    }
    current[parts[parts.length - 1]] = value;
}

/**
 * * 🇬🇧: Searches keys or values in the object.
 * * 🇩🇪: Sucht Keys oder Values im Objekt.
 */
export const find = {
    /**
     * * 🇬🇧: Returns the n-th entry of an object as a [key, value] pair. Supports negative indices.
     * * 🇩🇪: Gibt den n-ten Eintrag eines Objekts als [Key, Value]-Paar zurück. Unterstützt negative Indizes.
     * @example find.at({ a: 1, b: 2 }, 1) // => ['b', 2]
     * @param obj
     * * 🇬🇧: The object to search.
     * * 🇩🇪: Das zu durchsuchende Objekt.
     * @param index
     * * 🇬🇧: The index (0-based, negative counts from the back).
     * * 🇩🇪: Der Index (0-basiert, negativ zählt von hinten).
     * @returns
     * * 🇬🇧: A [key, value] tuple or undefined.
     * * 🇩🇪: Ein [Key, Value]-Paar oder undefined.
     */
    at(obj: any, index: number): [string, any] | undefined {
        const entries = Object.entries(obj);
        const idx = index < 0 ? entries.length + index : index;
        return entries[idx];
    },

    /**
     * * 🇬🇧: Finds the first entry where the key or value matches the query.
     * * 🇩🇪: Findet den ersten Eintrag, bei dem der Schlüssel oder Wert dem Suchbegriff entspricht.
     * @example find.first(config, 'admin', 'exact', 'key')
     * @param obj
     * * 🇬🇧: The object to search.
     * * 🇩🇪: Das zu durchsuchende Objekt.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param searchBy
     * * 🇬🇧: Whether to search by 'key' or 'value'.
     * * 🇩🇪: Ob nach 'key' oder 'value' gesucht werden soll.
     * @returns
     * * 🇬🇧: The first matching [key, value] pair or undefined.
     * * 🇩🇪: Das erste gefundene [key, value] Paar oder undefined.
     */
    first(obj: any, query: string | number, mode: MatchMode = 'exact', searchBy: 'key' | 'value' = 'key'): [string, any] | undefined {
        const entries = Object.entries(obj);
        return entries.find(([key, val]) => {
            const target = searchBy === 'key' ? key : val;
            return checkMatch(target as any, query, mode);
        });
    },

    /**
     * * 🇬🇧: Finds the last entry where the key or value matches the query.
     * * 🇩🇪: Findet den letzten Eintrag, bei dem der Schlüssel oder Wert dem Suchbegriff entspricht.
     * @example find.last(config, '.php', 'endsWith', 'key')
     * @param obj
     * * 🇬🇧: The object to search.
     * * 🇩🇪: Das zu durchsuchende Objekt.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @param searchBy
     * * 🇬🇧: Whether to search by 'key' or 'value'.
     * * 🇩🇪: Ob nach 'key' oder 'value' gesucht werden soll.
     * @returns
     * * 🇬🇧: The last matching [key, value] pair or undefined.
     * * 🇩🇪: Das letzte gefundene [key, value] Paar oder undefined.
     */
    last(obj: any, query: string | number, mode: MatchMode = 'exact', searchBy: 'key' | 'value' = 'key'): [string, any] | undefined {
        const entries = Object.entries(obj);
        // Da findLast evtl. ES2023 Lib benötigt, hier die sicherere Variante:
        return [...entries].reverse().find(([key, val]) => {
            const target = searchBy === 'key' ? key : val;
            return checkMatch(target as any, query, mode);
        });
    },

    /**
     * * 🇬🇧: Finds all keys matching the query.
     * * 🇩🇪: Findet alle Schlüssel (Keys), die auf den Suchbegriff passen.
     * @example find.key(config, 'api_', 'startsWith')
     * @param obj
     * * 🇬🇧: The object to search.
     * * 🇩🇪: Das zu durchsuchende Objekt.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @returns
     * * 🇬🇧: An array of matching keys.
     * * 🇩🇪: Ein Array mit den passenden Schlüsseln.
     */
    key(obj: any, query: string, mode: MatchMode = 'exact'): string[] {
        return Object.keys(obj).filter(key => checkMatch(key, query, mode));
    },

    /**
     * * 🇬🇧: Finds all values matching the query.
     * * 🇩🇪: Findet alle Werte (Values), die auf den Suchbegriff passen.
     * @param obj
     * * 🇬🇧: The object to search.
     * * 🇩🇪: Das zu durchsuchende Objekt.
     * @param query
     * * 🇬🇧: The search query.
     * * 🇩🇪: Der Suchbegriff.
     * @param mode
     * * 🇬🇧: The comparison mode ('exact', 'contains', 'startsWith', 'endsWith').
     * * 🇩🇪: Der Vergleichsmodus ('exact', 'contains', 'startsWith', 'endsWith').
     * @returns
     * * 🇬🇧: An array of matching values.
     * * 🇩🇪: Ein Array mit den passenden Werten.
     */
    value(obj: any, query: string, mode: MatchMode = 'exact'): any[] {
        return Object.values(obj).filter(val => checkMatch(val, query, mode));
    }
};

// Helper
function isObject(item: any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}