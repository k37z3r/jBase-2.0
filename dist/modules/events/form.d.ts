/**
 * @file src/modules/events/form.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Methods for handling form events (submit, change, focus, blur, input).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Registers an event handler for the 'submit' event. Triggered when a form is submitted.
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export declare function submit(this: jBase, handler: (event: SubmitEvent) => void): jBase;
/**
 * * Registers an event handler for the 'change' event. Triggered when the value of an element (<input>, <select>, <textarea>) is changed by the user and committed (e.g., on blur).
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export declare function change(this: jBase, handler: (event: Event) => void): jBase;
/**
 * * Registers an event handler for the 'input' event. Triggered immediately when the value changes (real-time, e.g., every keystroke).
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export declare function input(this: jBase, handler: (event: Event) => void): jBase;
/**
 * * Handles the 'focus' event. If a handler is provided, it binds the listener. If no handler is provided, it programmatically sets focus on the element(s).
 * @param handler
 * * (Optional) The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export declare function focus(this: jBase, handler?: (event: FocusEvent) => void): jBase;
/**
 * * Handles the 'blur' event (element loses focus). If a handler is provided, it binds the listener. If no handler is provided, it programmatically removes focus.
 * @param handler
 * * (Optional) The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export declare function blur(this: jBase, handler?: (event: FocusEvent) => void): jBase;
//# sourceMappingURL=form.d.ts.map