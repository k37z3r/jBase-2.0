/**
 * @file src/modules/data/index.ts
 * @version 2.0.1
 * @since 2.0.0
 * * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Central entry point for data manipulation modules. Aggregates array and object utilities.
 * * 🇩🇪: Zentraler Einstiegspunkt für Datenmanipulations-Module. Aggregiert Array- und Objekt-Hilfsmethoden.
 * @requires ./arrays
 * * 🇬🇧: Array manipulation methods.
 * * 🇩🇪: Methoden zur Array-Manipulation.
 * @requires ./objects
 * * 🇬🇧: Object manipulation methods.
 * * 🇩🇪: Methoden zur Objekt-Manipulation.
 */

import * as arrayMethods from './arrays';
import * as objectMethods from './objects';

/**
 * * 🇬🇧: Central data utility object. Bundles array ('arr') and object ('obj') manipulation methods.
 * * 🇩🇪: Zentrales Daten-Utility-Objekt. Bündelt Methoden zur Array- ('arr') und Objekt-Manipulation ('obj').
 */
export const data = {
    arr: arrayMethods,
    obj: objectMethods
};