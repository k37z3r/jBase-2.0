/**
 * @file src/modules/events/mouse.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Methods for handling mouse events (click, dblclick, hover, mouseenter, mouseleave).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Binds an event handler to the 'click' event or triggers the event manually.
 * - With handler: Registers the function.
 * - Without handler: Simulates a click on all selected elements.
 * - Mit Handler: Registriert die Funktion.
 * - Ohne Handler: Simuliert einen Klick auf alle selektierten Elemente.
 * @param handler
 * * (Optional) The callback function executed on click.
 * @returns
 * * The current jBase instance.
 */
export declare function click(this: jBase, handler?: (event: Event) => void): jBase;
/**
 * * Binds an event handler to the 'mousemove' event. Fires continuously while the pointer moves inside the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mousemove(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mouseleave' event. Fires when the pointer leaves the element (does not bubble).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mouseleave(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mouseenter' event. Fires when the pointer enters the element (does not bubble).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mouseenter(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mousedown' event. Fires as soon as a mouse button is pressed over the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mousedown(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mouseup' event. Fires when a mouse button is released over the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mouseup(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'dblclick' event or triggers it manually.
 * @param handler
 * * (Optional) The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function dblclick(this: jBase, handler?: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mouseout' event. Fires when the pointer leaves the element OR one of its children (bubbles).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mouseout(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * Binds an event handler to the 'mouseover' event. Fires when the pointer enters the element OR one of its children (bubbles).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export declare function mouseover(this: jBase, handler: (event: MouseEvent) => void): jBase;
//# sourceMappingURL=mouse.d.ts.map