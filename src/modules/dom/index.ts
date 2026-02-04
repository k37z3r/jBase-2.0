/**
 * @file src/modules/dom/index.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Central entry point for DOM operations. Aggregates methods for attributes, content, manipulation, traversal, and states.
 * * 🇩🇪: Zentraler Einstiegspunkt für DOM-Operationen. Aggregiert Methoden für Attribute, Inhalt, Manipulation, Traversierung und Status.
 * @requires ./attributes
 * * 🇬🇧: Attribute and value manipulation.
 * * 🇩🇪: Attribut- und Wert-Manipulation.
 * @requires ./content
 * * 🇬🇧: Content handling (html, text).
 * * 🇩🇪: Inhalts-Steuerung (html, text).
 * @requires ./manipulation
 * * 🇬🇧: DOM manipulation (append, remove, etc.).
 * * 🇩🇪: DOM-Manipulation (append, remove, etc.).
 * @requires ./traversal
 * * 🇬🇧: Tree traversal (find, parent, children).
 * * 🇩🇪: Baum-Durchquerung (find, parent, children).
 * @requires ./states
 * * 🇬🇧: State checks (checked, disabled).
 * * 🇩🇪: Status-Prüfungen (checked, disabled).
 */

import * as attributeMethods from './attributes';
import * as contentMethods from './content';
import * as manipulationMethods from './manipulation';
import * as traversalMethods from './traversal';
import * as stateMethods from './states';

/**
 * * 🇬🇧: Aggregation of all DOM methods. Bundles specialized sub-modules into a single interface. Used to extend the jBase prototype centrally via Object.assign.
 * * 🇩🇪: Aggregation aller DOM-Methoden. Bündelt spezialisierte Untermodule in einer einzigen Schnittstelle. Dient als Quelle für das Object.assign zur zentralen Erweiterung des jBase-Prototyps.
 */
export const domMethods = {
    ...attributeMethods,
    ...contentMethods,
    ...manipulationMethods,
    ...traversalMethods,
    ...stateMethods
};