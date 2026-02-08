/**
 * @file src/modules/events/touch.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Methods for handling touch events (touchstart, touchend, touchmove).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Binds an event handler to the 'touchstart' event. Triggered when a touch point is placed on the touch surface.
 * @param handler
 * * The callback function executed on touch start.
 * @returns
 * * The current jBase instance for method chaining.
 */
export declare function touchstart(this: jBase, handler: (event: TouchEvent) => void): jBase;
/**
 * * Binds an event handler to the 'touchend' event. Triggered when a touch point is removed from the touch surface.
 * @param handler
 * * The callback function executed on touch end.
 * @returns
 * * The current jBase instance for method chaining.
 */
export declare function touchend(this: jBase, handler: (event: TouchEvent) => void): jBase;
/**
 * * Binds an event handler to the 'touchmove' event. Triggered when a touch point moves along the touch surface. Important for swipe gestures or Drag & Drop.
 * @param handler
 * * The callback function executed on movement.
 * @returns
 * * The current jBase instance for method chaining.
 */
export declare function touchmove(this: jBase, handler: (event: TouchEvent) => void): jBase;
/**
 * * Binds an event handler to the 'touchcancel' event. Triggered when a touch point has been disrupted by the system (e.g., too many touch points or a UI popup).
 * @param handler
 * * The callback function executed on cancellation.
 * @returns
 * * The current jBase instance for method chaining.
 */
export declare function touchcancel(this: jBase, handler: (event: TouchEvent) => void): jBase;
//# sourceMappingURL=touch.d.ts.map