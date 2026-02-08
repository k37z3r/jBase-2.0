/**
 * @file src/modules/events/binding.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Core event binding methods (on, off, trigger). Handles event registration and removal.
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Registers an event listener for all elements in the current selection. Uses the native `addEventListener` method internally.
 * @param event
 * * The name of the event (e.g., 'click', 'mouseenter').
 * @param handler
 * * The callback function to execute when the event triggers.
 * @returns
 * * The jBase instance for method chaining.
 */
export declare function on(this: jBase, event: string, handler: EventListenerOrEventListenerObject): jBase;
/**
 * * Removes a previously registered event listener from all elements in the current selection. Uses the native `removeEventListener` method internally.
 * Note: The handler passed must be the exact same reference used in `on`.
 * Hinweis: Der übergebene Handler muss exakt dieselbe Referenz sein, die bei `on` verwendet wurde.
 * @param event
 * * The name of the event.
 * @param handler
 * * The reference of the callback function to remove.
 * @returns
 * * The jBase instance for method chaining.
 */
export declare function off(this: jBase, event: string, handler: EventListenerOrEventListenerObject): jBase;
//# sourceMappingURL=binding.d.ts.map