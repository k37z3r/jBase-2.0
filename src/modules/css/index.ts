/**
 * @file src/modules/css/index.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * 🇬🇧: Central entry point for CSS operations. Aggregates class and style manipulation methods.
 * * 🇩🇪: Zentraler Einstiegspunkt für CSS-Operationen. Aggregiert Methoden zur Klassen- und Style-Manipulation.
 * @requires ./classes
 * * 🇬🇧: Class manipulation methods (addClass, removeClass, etc.).
 * * 🇩🇪: Methoden zur Klassen-Manipulation (addClass, removeClass, etc.).
 * @requires ./styles
 * * 🇬🇧: Style manipulation methods (css).
 * * 🇩🇪: Methoden zur Style-Manipulation (css).
 */

import * as classMethods from './classes';
import * as styleMethods from './styles';

/**
 * * 🇬🇧: Aggregation of all CSS methods. This object bundles functions for class manipulation and style manipulation. It is exported to extend the jBase prototype centrally via Object.assign.
 * * 🇩🇪: Aggregation aller CSS-Methoden. Dieses Objekt bündelt die Funktionen für Klassen- und Style-Manipulation. Es wird exportiert, um via Object.assign den jBase-Prototyp zentral zu erweitern.
 */
export const cssMethods = {
    ...classMethods,
    ...styleMethods
};