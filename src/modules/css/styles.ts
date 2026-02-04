/**
 * @file src/modules/css/styles.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * 🇬🇧: Methods for getting and setting inline CSS styles.
 * * 🇩🇪: Methoden zum Lesen und Setzen von Inline-CSS-Styles.
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Sets or gets the value of a style property for the selected elements.
 * * 🇩🇪: Setzt oder liest den Wert einer Stileigenschaft für die ausgewählten Elemente.
 * @param property
 * * 🇬🇧: The CSS property name (camelCase).
 * * 🇩🇪: Der Name der CSS-Eigenschaft (camelCase).
 * @param value
 * * 🇬🇧: (Optional) The value to set. If undefined, the method acts as a getter.
 * * 🇩🇪: (Optional) Der zu setzende Wert. Wenn undefined, fungiert die Methode als Getter.
 * @returns
 * * 🇬🇧: The computed style value (string) if acting as a getter, or the current jBase instance if setting.
 * * 🇩🇪: Der berechnete Stilwert (String) wenn als Getter genutzt, sonst die aktuelle jBase-Instanz.
 */
export function css(this: jBase, property: string, value?: string | number): string | jBase {
    // GETTER
    if (value === undefined) {
        const el = this[0];
        if (el instanceof HTMLElement || el instanceof SVGElement) {
            return window.getComputedStyle(el)[property as any];
        }
        return '';
    }

    // SETTER
    this.forEach(el => {
        if (el instanceof HTMLElement || el instanceof SVGElement) {
            (el.style as any)[property] = value;
        }
    });
    return this;
}