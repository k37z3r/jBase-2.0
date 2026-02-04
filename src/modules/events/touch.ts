/**
 * @file src/modules/events/touch.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Methods for handling touch events (touchstart, touchend, touchmove).
 * * 🇩🇪: Methoden zur Behandlung von Touch-Events (touchstart, touchend, touchmove).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Binds an event handler to the 'touchstart' event. Triggered when a touch point is placed on the touch surface.
 * * 🇩🇪: Bindet einen Event-Handler an das 'touchstart'-Ereignis. Wird ausgelöst, sobald ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
 * @param handler
 * * 🇬🇧: The callback function executed on touch start.
 * * 🇩🇪: Die Callback-Funktion, die bei Berührung ausgeführt wird.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
export function touchstart(this: jBase, handler: (event: TouchEvent) => void): jBase {
    return this.on('touchstart', handler as EventListener);
}

/**
 * * 🇬🇧: Binds an event handler to the 'touchend' event. Triggered when a touch point is removed from the touch surface.
 * * 🇩🇪: Bindet einen Event-Handler an das 'touchend'-Ereignis. Wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
 * @param handler
 * * 🇬🇧: The callback function executed on touch end.
 * * 🇩🇪: Die Callback-Funktion, die beim Loslassen ausgeführt wird.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
export function touchend(this: jBase, handler: (event: TouchEvent) => void): jBase {
    return this.on('touchend', handler as EventListener);
}

/**
 * * 🇬🇧: Binds an event handler to the 'touchmove' event. Triggered when a touch point moves along the touch surface. Important for swipe gestures or Drag & Drop.
 * * 🇩🇪: Bindet einen Event-Handler an das 'touchmove'-Ereignis. Wird ausgelöst, wenn sich ein Berührungspunkt entlang der Touch-Oberfläche bewegt. Wichtig für Swipe-Gesten oder Drag & Drop.
 * @param handler
 * * 🇬🇧: The callback function executed on movement.
 * * 🇩🇪: Die Callback-Funktion, die bei Bewegung ausgeführt wird.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
export function touchmove(this: jBase, handler: (event: TouchEvent) => void): jBase {
    return this.on('touchmove', handler as EventListener);
}

/**
 * * 🇬🇧: Binds an event handler to the 'touchcancel' event. Triggered when a touch point has been disrupted by the system (e.g., too many touch points or a UI popup).
 * * 🇩🇪: Bindet einen Event-Handler an das 'touchcancel'-Ereignis. Wird ausgelöst, wenn eine Berührung durch das System unterbrochen wurde (z.B. durch zu viele Berührungspunkte oder ein UI-Popup).
 * @param handler
 * * 🇬🇧: The callback function executed on cancellation.
 * * 🇩🇪: Die Callback-Funktion, die bei Abbruch ausgeführt wird.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
export function touchcancel(this: jBase, handler: (event: TouchEvent) => void): jBase {
    return this.on('touchcancel', handler as EventListener);
}