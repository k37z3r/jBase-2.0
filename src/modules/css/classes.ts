/**
 * @file src/modules/css/classes.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * 🇬🇧: Methods for manipulating CSS classes (add, remove, toggle, has).
 * * 🇩🇪: Methoden zur Manipulation von CSS-Klassen (add, remove, toggle, has).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Adds one or more CSS classes to each element in the collection.
 * * 🇩🇪: Fügt jedem Element in der Sammlung eine oder mehrere CSS-Klassen hinzu.
 * @param classNames
 * * 🇬🇧: One or more class names to be added
 * * 🇩🇪: Eine oder mehrere Klassennamen, die hinzugefügt werden sollen
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining
 */
export function addClass(this: jBase, ...classNames: string[]): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.classList.add(...classNames);
    });
    return this;
}

/**
 * * 🇬🇧: Removes one or more CSS classes from each element in the collection.
 * * 🇩🇪: Entfernt eine oder mehrere CSS-Klassen von jedem Element in der Sammlung.
 * @param classNames
 * * 🇬🇧: One or more class names to be removed
 * * 🇩🇪: Eine oder mehrere Klassennamen, die entfernt werden sollen
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining
 */
export function removeClass(this: jBase, ...classNames: string[]): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.classList.remove(...classNames);
    });
    return this;
}

/**
 * * 🇬🇧: Toggles a CSS class (adds if missing, removes if present) for each element.
 * * 🇩🇪: Wechselt eine CSS-Klasse (fügt hinzu wenn fehlt, entfernt wenn vorhanden).
 * @param className
 * * 🇬🇧: The class name to toggle.
 * * 🇩🇪: Der Klassenname, der gewechselt werden soll.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
export function toggleClass(this: jBase, className: string): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.classList.toggle(className);
    });
    return this;
}

/**
 * * 🇬🇧: Checks if at least one element in the collection has the specified class.
 * * 🇩🇪: Prüft, ob mindestens ein Element in der Sammlung die angegebene Klasse besitzt.
 * @param className
 * * 🇬🇧: The class name to check for.
 * * 🇩🇪: Der Klassenname, nach dem gesucht werden soll.
 * @returns
 * * 🇬🇧: True if the class exists on at least one element, otherwise false.
 * * 🇩🇪: True, wenn die Klasse bei mindestens einem Element existiert, sonst False.
 */
export function hasClass(this: jBase, className: string): boolean {
    return this.some(el => {
        return (el instanceof Element) && el.classList.contains(className);
    });
}