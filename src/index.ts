/**
 * @file src/index.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Entry Point
 * @description
 * * 🇬🇧: Main library entry point. Aggregates Core, Types, Utils, and all functional modules into a single export.
 * * 🇩🇪: Haupt-Einstiegspunkt der Bibliothek. Aggregiert Core, Types, Utils und alle funktionalen Module in einen einzigen Export.
 * @requires ./core
 * * 🇬🇧: Core class logic and inheritance.
 * * 🇩🇪: Kern-Klassenlogik und Vererbung.
 * @requires ./types
 * * 🇬🇧: TypeScript type definitions and interfaces.
 * * 🇩🇪: TypeScript Typ-Definitionen und Interfaces.
 * @requires ./utils
 * * 🇬🇧: Helper functions (throttle, debounce).
 * * 🇩🇪: Hilfsfunktionen (throttle, debounce).
 * @requires ./modules/css
 * * 🇬🇧: Style manipulation methods.
 * * 🇩🇪: Style-Manipulations-Methoden.
 * @requires ./modules/events
 * * 🇬🇧: Event handling logic.
 * * 🇩🇪: Event-Handling-Logik.
 * @requires ./modules/dom
 * * 🇬🇧: DOM traversal and manipulation.
 * * 🇩🇪: DOM-Traversierung und -Manipulation.
 * @requires ./modules/effects
 * * 🇬🇧: Visual effects and animations.
 * * 🇩🇪: Visuelle Effekte und Animationen.
 * @requires ./modules/http
 * * 🇬🇧: HTTP client for AJAX requests.
 * * 🇩🇪: HTTP-Client für AJAX-Anfragen.
 * @requires ./modules/data
 * * 🇬🇧: Data structure utilities.
 * * 🇩🇪: Datenstruktur-Utilities.
 */

import { jBase as JBaseClass } from './core';
import { JBaseInput, JBaseCSSProperty, JBaseEventMap } from './types';

import { cssMethods } from './modules/css';
import { eventMethods } from './modules/events';
import { domMethods } from './modules/dom';
import { effectMethods } from './modules/effects';

// Runtime Extension
Object.assign(JBaseClass.prototype, cssMethods);
Object.assign(JBaseClass.prototype, eventMethods);
Object.assign(JBaseClass.prototype, domMethods);
Object.assign(JBaseClass.prototype, effectMethods);

/**
 * TypeScript Declaration Merging.
 */
declare module './core' {
    interface jBase {
        /* ==========================================================================
           CSS MODULE
           ========================================================================== */

        /**
         * * 🇬🇧: Adds one or more CSS classes to the selected elements.
         * * 🇩🇪: Fügt den ausgewählten Elementen eine oder mehrere CSS-Klassen hinzu.
         * @param classNames
         * * 🇬🇧: One or more class names to be added.
         * * 🇩🇪: Eine oder mehrere Klassennamen, die hinzugefügt werden sollen.
         * @returns
         * * 🇬🇧: The current jBase instance for method chaining.
         * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
         */
        addClass(...classNames: string[]): jBase;

        /**
         * * 🇬🇧: Removes one or more CSS classes from the selected elements.
         * * 🇩🇪: Entfernt eine oder mehrere CSS-Klassen von den ausgewählten Elementen.
         * @param classNames
         * * 🇬🇧: One or more class names to be removed.
         * * 🇩🇪: Eine oder mehrere Klassennamen, die entfernt werden sollen.
         * @returns
         * * 🇬🇧: The current jBase instance for method chaining.
         * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
         */
        removeClass(...classNames: string[]): jBase;

        /**
         * * 🇬🇧: Toggles a CSS class (adds if missing, removes if present).
         * * 🇩🇪: Wechselt eine CSS-Klasse (fügt hinzu wenn fehlt, entfernt wenn vorhanden).
         * @param className
         * * 🇬🇧: The class name to toggle.
         * * 🇩🇪: Der Klassenname, der gewechselt werden soll.
         * @returns
         * * 🇬🇧: The current jBase instance for method chaining.
         * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
         */
        toggleClass(className: string): jBase;

        /**
         * * 🇬🇧: Checks if at least one of the selected elements has the specified class.
         * * 🇩🇪: Prüft, ob mindestens eines der ausgewählten Elemente die angegebene Klasse besitzt.
         * @param className
         * * 🇬🇧: The class name to check for.
         * * 🇩🇪: Der Klassenname, nach dem gesucht werden soll.
         * @returns
         * * 🇬🇧: True if the class exists on at least one element, otherwise false.
         * * 🇩🇪: True, wenn die Klasse bei mindestens einem Element existiert, sonst False.
         */
        hasClass(className: string): boolean;

        /**
         * * 🇬🇧: Sets a CSS property for all selected elements.
         * * 🇩🇪: Setzt eine CSS-Eigenschaft für alle ausgewählten Elemente.
         * @param property
         * * 🇬🇧: The CSS property name (camelCase).
         * * 🇩🇪: Der Name der CSS-Eigenschaft (camelCase).
         * @param value
         * * 🇬🇧: The value to set.
         * * 🇩🇪: Der zu setzende Wert.
         * @returns
         * * 🇬🇧: The current jBase instance for method chaining.
         * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
         */
        css(property: JBaseCSSProperty, value: string | number): jBase;

        /**
         * * 🇬🇧: Gets the computed CSS value of the first element.
         * * 🇩🇪: Liest den berechneten CSS-Wert des ersten Elements.
         * @param property
         * * 🇬🇧: The CSS property name (camelCase).
         * * 🇩🇪: Der Name der CSS-Eigenschaft (camelCase).
         * @returns
         * * 🇬🇧: The computed value as a string.
         * * 🇩🇪: Der berechnete Wert als String.
         */
        css(property: JBaseCSSProperty): string;

        /* ==========================================================================
           EVENT MODULE
           ========================================================================== */

        /**
         * * 🇬🇧: Registers a typed event listener.
         * * 🇩🇪: Registriert einen typisierten Event-Listener.
         * @param event
         * * 🇬🇧: The event name (e.g., 'click').
         * * 🇩🇪: Der Name des Events (z.B. 'click').
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        on<K extends keyof JBaseEventMap>(event: K, handler: (event: JBaseEventMap[K]) => void): jBase;

        /**
         * * 🇬🇧: Registers an event listener (string-based / custom events).
         * * 🇩🇪: Registriert einen Event-Listener (String-basiert / Custom Events).
         * @param event
         * * 🇬🇧: The name of the custom event.
         * * 🇩🇪: Der Name des benutzerdefinierten Events.
         * @param handler
         * * 🇬🇧: The event listener.
         * * 🇩🇪: Der Event-Listener.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        on(event: string, handler: EventListenerOrEventListenerObject): jBase;

        /**
         * * 🇬🇧: Removes a typed event listener.
         * * 🇩🇪: Entfernt einen typisierten Event-Listener.
         * @param event
         * * 🇬🇧: The event name.
         * * 🇩🇪: Der Name des Events.
         * @param handler
         * * 🇬🇧: The exact reference of the handler to remove.
         * * 🇩🇪: Die exakte Referenz des zu entfernenden Handlers.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        off<K extends keyof JBaseEventMap>(event: K, handler: (event: JBaseEventMap[K]) => void): jBase;

        /**
         * * 🇬🇧: Removes an event listener (string-based).
         * * 🇩🇪: Entfernt einen Event-Listener (String-basiert).
         * @param event
         * * 🇬🇧: The name of the event.
         * * 🇩🇪: Der Name des Events.
         * @param handler
         * * 🇬🇧: The exact reference of the handler to remove.
         * * 🇩🇪: Die exakte Referenz des zu entfernenden Handlers.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        off(event: string, handler: EventListenerOrEventListenerObject): jBase;

        /* --- Mouse Events --- */

        /**
         * * 🇬🇧: Triggers the 'click' event or binds a handler.
         * * 🇩🇪: Löst das 'click'-Event aus oder bindet einen Handler.
         * @param handler
         * * 🇬🇧: (Optional) The function to execute on click.
         * * 🇩🇪: (Optional) Die Funktion, die beim Klick ausgeführt wird.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        click(handler?: (event: Event) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mousemove' event.
         * * 🇩🇪: Bindet einen Handler an das 'mousemove'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mousemove(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mouseleave' event.
         * * 🇩🇪: Bindet einen Handler an das 'mouseleave'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mouseleave(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mouseenter' event.
         * * 🇩🇪: Bindet einen Handler an das 'mouseenter'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mouseenter(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mousedown' event.
         * * 🇩🇪: Bindet einen Handler an das 'mousedown'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mousedown(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mouseup' event.
         * * 🇩🇪: Bindet einen Handler an das 'mouseup'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mouseup(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Triggers the 'dblclick' event or binds a handler.
         * * 🇩🇪: Löst das 'dblclick'-Event aus oder bindet einen Handler.
         * @param handler
         * * 🇬🇧: (Optional) The callback function.
         * * 🇩🇪: (Optional) Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        dblclick(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mouseout' event.
         * * 🇩🇪: Bindet einen Handler an das 'mouseout'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mouseout(handler: (event: MouseEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'mouseover' event.
         * * 🇩🇪: Bindet einen Handler an das 'mouseover'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        mouseover(handler: (event: MouseEvent) => void): jBase;

        /* --- Keyboard Events --- */

        /**
         * * 🇬🇧: Binds a handler to the 'keydown' event.
         * * 🇩🇪: Bindet einen Handler an das 'keydown'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        keydown(handler: (event: KeyboardEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'keyup' event.
         * * 🇩🇪: Bindet einen Handler an das 'keyup'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        keyup(handler: (event: KeyboardEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'keypress' event (Deprecated).
         * * 🇩🇪: Bindet einen Handler an das 'keypress'-Event (Veraltet).
         * @deprecated Use keydown instead.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        keypress(handler: (event: KeyboardEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler that fires only when a specific key is pressed.
         * * 🇩🇪: Bindet einen Handler, der nur feuert, wenn eine bestimmte Taste gedrückt wird.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        pressedKey(handler: (event: KeyboardEvent) => void): jBase;

        /* --- Form Events --- */

        /**
         * * 🇬🇧: Binds a handler to the 'submit' event.
         * * 🇩🇪: Bindet einen Handler an das 'submit'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        submit(handler: (event: SubmitEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'change' event.
         * * 🇩🇪: Bindet einen Handler an das 'change'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        change(handler: (event: Event) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'input' event (real-time).
         * * 🇩🇪: Bindet einen Handler an das 'input'-Event (Echtzeit).
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        input(handler: (event: Event) => void): jBase;

        /**
         * * 🇬🇧: Sets focus on the element.
         * * 🇩🇪: Setzt den Fokus auf das Element.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        focus(): jBase;
        /**
         * * 🇬🇧: Binds a handler to the 'focus' event.
         * * 🇩🇪: Bindet einen Handler an das 'focus'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        focus(handler: (event: FocusEvent) => void): jBase;

        /**
         * * 🇬🇧: Removes focus from the element.
         * * 🇩🇪: Entfernt den Fokus vom Element.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        blur(): jBase;
        /**
         * * 🇬🇧: Binds a handler to the 'blur' event.
         * * 🇩🇪: Bindet einen Handler an das 'blur'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        blur(handler: (event: FocusEvent) => void): jBase;

        /* --- Touch Events --- */

        /**
         * * 🇬🇧: Binds a handler to the 'touchstart' event.
         * * 🇩🇪: Bindet einen Handler an das 'touchstart'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        touchstart(handler: (event: TouchEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'touchend' event.
         * * 🇩🇪: Bindet einen Handler an das 'touchend'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        touchend(handler: (event: TouchEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'touchmove' event.
         * * 🇩🇪: Bindet einen Handler an das 'touchmove'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        touchmove(handler: (event: TouchEvent) => void): jBase;

        /**
         * * 🇬🇧: Binds a handler to the 'touchcancel' event.
         * * 🇩🇪: Bindet einen Handler an das 'touchcancel'-Event.
         * @param handler
         * * 🇬🇧: The callback function.
         * * 🇩🇪: Die Callback-Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        touchcancel(handler: (event: TouchEvent) => void): jBase;

        /* ==========================================================================
           DOM MODULE
           ========================================================================== */

        /**
         * * 🇬🇧: Gets the HTML content of the first element.
         * * 🇩🇪: Gibt den HTML-Inhalt des ersten Elements zurück.
         * @returns
         * * 🇬🇧: The HTML content as a string.
         * * 🇩🇪: Der HTML-Inhalt als String.
         */
        html(): string;
        /**
         * * 🇬🇧: Sets the HTML content of all selected elements.
         * * 🇩🇪: Setzt den HTML-Inhalt aller ausgewählten Elemente.
         * @param content
         * * 🇬🇧: The new HTML content.
         * * 🇩🇪: Der neue HTML-Inhalt.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        html(content: string): jBase;

        /**
         * * 🇬🇧: Gets the text content of the first element.
         * * 🇩🇪: Gibt den Text-Inhalt des ersten Elements zurück.
         * @returns
         * * 🇬🇧: The text content as a string.
         * * 🇩🇪: Der Text-Inhalt als String.
         */
        text(): string;
        /**
         * * 🇬🇧: Sets the text content of all selected elements (safe against XSS).
         * * 🇩🇪: Setzt den Text-Inhalt aller Elemente (XSS-sicher).
         * @param content
         * * 🇬🇧: The new text content.
         * * 🇩🇪: Der neue Text-Inhalt.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        text(content: string): jBase;

        /**
         * * 🇬🇧: Gets an attribute value from the first element.
         * * 🇩🇪: Liest einen Attributwert vom ersten Element.
         * @param name
         * * 🇬🇧: The name of the attribute.
         * * 🇩🇪: Der Name des Attributs.
         * @returns
         * * 🇬🇧: The attribute value or null.
         * * 🇩🇪: Der Attributwert oder null.
         */
        attr(name: string): string | null;
        /**
         * * 🇬🇧: Sets an attribute for all selected elements.
         * * 🇩🇪: Setzt ein Attribut für alle ausgewählten Elemente.
         * @param name
         * * 🇬🇧: The name of the attribute.
         * * 🇩🇪: Der Name des Attributs.
         * @param value
         * * 🇬🇧: The value to set.
         * * 🇩🇪: Der zu setzende Wert.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        attr(name: string, value: string): jBase;

        /**
         * * 🇬🇧: Gets the value of the first form element.
         * * 🇩🇪: Liest den Wert (Value) des ersten Formularelements.
         * @returns
         * * 🇬🇧: The value as a string.
         * * 🇩🇪: Der Wert als String.
         */
        val(): string;
        /**
         * * 🇬🇧: Sets the value for all selected form elements.
         * * 🇩🇪: Setzt den Wert (Value) für alle ausgewählten Formularelemente.
         * @param value
         * * 🇬🇧: The value to set.
         * * 🇩🇪: Der zu setzende Wert.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        val(value: string | number): jBase;

        /* --- Manipulation --- */

        /**
         * * 🇬🇧: Replaces elements with a deep clone of themselves (removes listeners).
         * * 🇩🇪: Ersetzt Elemente durch eine tiefe Kopie (entfernt Listener).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        replaceWithClone(): jBase;

        /**
         * * 🇬🇧: Removes all selected elements from the DOM.
         * * 🇩🇪: Entfernt alle ausgewählten Elemente aus dem DOM.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        remove(): jBase;

        /**
         * * 🇬🇧: Removes all child nodes from the selected elements.
         * * 🇩🇪: Entfernt alle Kind-Elemente (leert den Inhalt).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        empty(): jBase;

        /**
         * * 🇬🇧: Finds the closest ancestor matching the selector.
         * * 🇩🇪: Findet das nächste Vorfahren-Element, das dem Selektor entspricht.
         * @param selector
         * * 🇬🇧: The CSS selector to match.
         * * 🇩🇪: Der CSS-Selektor zum Abgleich.
         * @returns
         * * 🇬🇧: A new jBase instance containing the ancestor.
         * * 🇩🇪: Eine neue jBase-Instanz mit dem Vorfahren.
         */
        closest(selector: string): jBase;

        /**
         * * 🇬🇧: Executes the handler when the DOM is fully loaded.
         * * 🇩🇪: Führt den Handler aus, sobald das DOM vollständig geladen ist.
         * @param handler
         * * 🇬🇧: The function to execute.
         * * 🇩🇪: Die auszuführende Funktion.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        ready(handler: () => void): jBase;

        /**
         * * 🇬🇧: Inserts content at the end of the selected elements (inside).
         * * 🇩🇪: Fügt Inhalt am Ende der Elemente ein (innerhalb).
         * @param content
         * * 🇬🇧: Content to insert (String, Node, or jBase).
         * * 🇩🇪: Einzufügender Inhalt (String, Node oder jBase).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        append(content: string | Node | jBase): jBase;

        /**
         * * 🇬🇧: Inserts content at the beginning of the selected elements (inside).
         * * 🇩🇪: Fügt Inhalt am Anfang der Elemente ein (innerhalb).
         * @param content
         * * 🇬🇧: Content to insert (String, Node, or jBase).
         * * 🇩🇪: Einzufügender Inhalt (String, Node oder jBase).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        prepend(content: string | Node | jBase): jBase;

        /**
         * * 🇬🇧: Inserts content before the selected elements (outside).
         * * 🇩🇪: Fügt Inhalt vor den Elementen ein (außerhalb).
         * @param content
         * * 🇬🇧: Content to insert (String, Node, or jBase).
         * * 🇩🇪: Einzufügender Inhalt (String, Node oder jBase).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        before(content: string | Node | jBase): jBase;

        /**
         * * 🇬🇧: Inserts content after the selected elements (outside).
         * * 🇩🇪: Fügt Inhalt nach den Elementen ein (außerhalb).
         * @param content
         * * 🇬🇧: Content to insert (String, Node, or jBase).
         * * 🇩🇪: Einzufügender Inhalt (String, Node oder jBase).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        after(content: string | Node | jBase): jBase;

        /**
         * * 🇬🇧: Replaces the selected elements with new content.
         * * 🇩🇪: Ersetzt die ausgewählten Elemente durch neuen Inhalt.
         * @param content
         * * 🇬🇧: Content to insert (String, Node, or jBase).
         * * 🇩🇪: Einzufügender Inhalt (String, Node oder jBase).
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        replaceWith(content: string | Node | jBase): jBase;

        /**
         * * 🇬🇧: Appends the selected elements to a target.
         * * 🇩🇪: Hängt die aktuellen Elemente an ein Ziel an (Ende).
         * @param target
         * * 🇬🇧: Target element or selector.
         * * 🇩🇪: Ziel-Element oder Selektor.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        appendTo(target: string | Element): jBase;

        /**
         * * 🇬🇧: Prepends the selected elements to a target.
         * * 🇩🇪: Hängt die aktuellen Elemente in ein Ziel ein (Anfang).
         * @param target
         * * 🇬🇧: Target element or selector.
         * * 🇩🇪: Ziel-Element oder Selektor.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        prependTo(target: string | Element): jBase;

        /**
         * * 🇬🇧: Inserts the selected elements before a target.
         * * 🇩🇪: Fügt die aktuellen Elemente vor einem Ziel ein.
         * @param target
         * * 🇬🇧: Target element or selector.
         * * 🇩🇪: Ziel-Element oder Selektor.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        insertBefore(target: string | Element): jBase;

        /**
         * * 🇬🇧: Inserts the selected elements after a target.
         * * 🇩🇪: Fügt die aktuellen Elemente nach einem Ziel ein.
         * @param target
         * * 🇬🇧: Target element or selector.
         * * 🇩🇪: Ziel-Element oder Selektor.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        insertAfter(target: string | Element): jBase;

        /**
         * * 🇬🇧: Wraps each selected element with the specified HTML structure.
         * * 🇩🇪: Umschließt jedes Element mit der angegebenen HTML-Struktur.
         * @param wrapperHtml
         * * 🇬🇧: The HTML string for the wrapper.
         * * 🇩🇪: Der HTML-String für den Wrapper.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        wrap(wrapperHtml: string): jBase;

        /**
         * * 🇬🇧: Removes the direct parent of the selected elements.
         * * 🇩🇪: Entfernt das direkte Elternelement.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        unwrap(): jBase;

        /* --- Traversal --- */

        /**
         * * 🇬🇧: Gets the direct parents.
         * * 🇩🇪: Gibt die direkten Elternelemente zurück.
         * @returns
         * * 🇬🇧: A new jBase instance with parents.
         * * 🇩🇪: Eine neue jBase-Instanz mit den Eltern.
         */
        parent(): jBase;

        /**
         * * 🇬🇧: Gets the direct children.
         * * 🇩🇪: Gibt die direkten Kindelemente zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance with children.
         * * 🇩🇪: Eine neue jBase-Instanz mit den Kindern.
         */
        children(selector?: string): jBase;

        /**
         * * 🇬🇧: Finds descendants matching the selector (deep).
         * * 🇩🇪: Findet tiefe Nachfahren basierend auf einem Selektor.
         * @param selector
         * * 🇬🇧: CSS selector to find.
         * * 🇩🇪: CSS-Selektor zum Suchen.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        findAll(selector: string): jBase;

        /**
         * * 🇬🇧: Gets all descendants recursively.
         * * 🇩🇪: Gibt rekursiv alle Nachfahren zurück.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        childrens(): jBase;

        /**
         * * 🇬🇧: Gets descendants recursively until a selector is met.
         * * 🇩🇪: Gibt rekursiv Nachfahren zurück, bis ein Selektor zutrifft.
         * @param untilSelector
         * * 🇬🇧: Selector to stop at.
         * * 🇩🇪: Selektor, bei dem gestoppt wird.
         * @param filter
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        childrensUntil(untilSelector: string, filter?: string): jBase;

        /**
         * * 🇬🇧: Gets all ancestors up to the root.
         * * 🇩🇪: Gibt alle Vorfahren bis zum Root zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        parents(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets all ancestors until a selector is met.
         * * 🇩🇪: Gibt alle Vorfahren zurück, bis ein Selektor zutrifft.
         * @param selector
         * * 🇬🇧: Selector to stop at.
         * * 🇩🇪: Selektor, bei dem gestoppt wird.
         * @param filter
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        parentsUntil(selector: string, filter?: string): jBase;

        /* --- Sibling Traversal --- */

        /**
         * * 🇬🇧: Gets the immediately following sibling.
         * * 🇩🇪: Gibt das unmittelbar folgende Geschwisterelement zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        next(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets the immediately preceding sibling.
         * * 🇩🇪: Gibt das unmittelbar vorhergehende Geschwisterelement zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        prev(selector?: string): jBase;

        /**
         * * 🇬🇧: Alias for `next()`.
         * * 🇩🇪: Alias für `next()`.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        sibling(selector?: string): jBase;

        /**
         * * 🇬🇧: Alias for `next()`.
         * * 🇩🇪: Alias für `next()`.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        nextSibling(selector?: string): jBase;

        /**
         * * 🇬🇧: Alias for `prev()`.
         * * 🇩🇪: Alias für `prev()`.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        prevSibling(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets all following siblings.
         * * 🇩🇪: Gibt alle nachfolgenden Geschwisterelemente zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        nextAll(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets all preceding siblings.
         * * 🇩🇪: Gibt alle vorhergehenden Geschwisterelemente zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        prevAll(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets all siblings (prev and next).
         * * 🇩🇪: Gibt alle Geschwisterelemente zurück.
         * @param selector
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        siblings(selector?: string): jBase;

        /**
         * * 🇬🇧: Gets following siblings until a selector is met.
         * * 🇩🇪: Gibt nachfolgende Geschwister zurück, bis ein Selektor zutrifft.
         * @param untilSelector
         * * 🇬🇧: Selector to stop at.
         * * 🇩🇪: Selektor, bei dem gestoppt wird.
         * @param filter
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        nextUntil(untilSelector: string, filter?: string): jBase;

        /**
         * * 🇬🇧: Gets preceding siblings until a selector is met.
         * * 🇩🇪: Gibt vorhergehende Geschwister zurück, bis ein Selektor zutrifft.
         * @param untilSelector
         * * 🇬🇧: Selector to stop at.
         * * 🇩🇪: Selektor, bei dem gestoppt wird.
         * @param filter
         * * 🇬🇧: (Optional) Filter selector.
         * * 🇩🇪: (Optional) Filter-Selektor.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        prevUntil(untilSelector: string, filter?: string): jBase;

        /* --- Filtering --- */

        /**
         * * 🇬🇧: Reduces the set to the element at the index.
         * * 🇩🇪: Reduziert die Auswahl auf das Element am Index.
         * @param index
         * * 🇬🇧: Index (negative values count from the end).
         * * 🇩🇪: Index (negative Werte zählen vom Ende).
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        eq(index: number): jBase;

        /**
         * * 🇬🇧: Reduces the set to the first element.
         * * 🇩🇪: Reduziert die Auswahl auf das erste Element.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        first(): jBase;

        /**
         * * 🇬🇧: Reduces the set to the last element.
         * * 🇩🇪: Reduziert die Auswahl auf das letzte Element.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        last(): jBase;

        /**
         * * 🇬🇧: Filters elements by selector.
         * * 🇩🇪: Filtert Elemente anhand eines Selektors.
         * @param selector
         * * 🇬🇧: CSS selector to filter by.
         * * 🇩🇪: CSS-Selektor zum Filtern.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        filterBy(selector: string): jBase;

        /**
         * * 🇬🇧: Filters elements by a callback function.
         * * 🇩🇪: Filtert Elemente anhand einer Callback-Funktion.
         * @param predicate
         * * 🇬🇧: Function that returns true to keep the element.
         * * 🇩🇪: Funktion, die true zurückgeben muss, um das Element zu behalten.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        filterBy(predicate: (index: number, element: Element) => boolean): jBase;

        /**
         * * 🇬🇧: Removes elements matching the selector.
         * * 🇩🇪: Entfernt Elemente, die dem Selektor entsprechen.
         * @param selector
         * * 🇬🇧: CSS selector to remove.
         * * 🇩🇪: CSS-Selektor zum Entfernen.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        not(selector: string): jBase;

        /**
         * * 🇬🇧: Removes elements matching the callback function.
         * * 🇩🇪: Entfernt Elemente, die der Callback-Funktion entsprechen.
         * @param predicate
         * * 🇬🇧: Function that returns true to remove the element.
         * * 🇩🇪: Funktion, die true zurückgeben muss, um das Element zu entfernen.
         * @returns
         * * 🇬🇧: A new jBase instance.
         * * 🇩🇪: Eine neue jBase-Instanz.
         */
        not(predicate: (index: number, element: Element) => boolean): jBase;

        /* ==========================================================================
           EFFECTS MODULE
           ========================================================================== */

        /**
         * * 🇬🇧: Slides the element into view (horizontal).
         * * 🇩🇪: Schiebt das Element in den sichtbaren Bereich (horizontal).
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideIn(options?: { direction?: 'left' | 'right', duration?: number }): jBase;

        /**
         * * 🇬🇧: Slides the element out of view (horizontal).
         * * 🇩🇪: Schiebt das Element aus dem sichtbaren Bereich (horizontal).
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideOut(options?: { direction?: 'left' | 'right', duration?: number }): jBase;

        /**
         * * 🇬🇧: Toggles between slideIn and slideOut.
         * * 🇩🇪: Wechselt zwischen slideIn und slideOut.
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideToggle(options?: { direction?: 'left' | 'right', duration?: number }): jBase;

        /**
         * * 🇬🇧: Slides the element down (Accordion).
         * * 🇩🇪: Fährt das Element vertikal aus (Akkordeon).
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideDown(options?: { duration?: number, displayType?: string }): jBase;

        /**
         * * 🇬🇧: Slides the element up.
         * * 🇩🇪: Fährt das Element vertikal ein.
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideUp(options?: { duration?: number }): jBase;

        /**
         * * 🇬🇧: Toggles between slideDown and slideUp.
         * * 🇩🇪: Wechselt zwischen slideDown und slideUp.
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        slideToggleBox(options?: { duration?: number }): jBase;

        /**
         * * 🇬🇧: Fades the element in (Opacity).
         * * 🇩🇪: Blendet das Element ein (Opazität).
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        fadeIn(options?: { duration?: number, displayType?: string }): jBase;

        /**
         * * 🇬🇧: Fades the element out (Opacity).
         * * 🇩🇪: Blendet das Element aus (Opazität).
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        fadeOut(options?: { duration?: number }): jBase;

        /**
         * * 🇬🇧: Toggles between fadeIn and fadeOut.
         * * 🇩🇪: Wechselt zwischen fadeIn und fadeOut.
         * @param options
         * * 🇬🇧: Animation options.
         * * 🇩🇪: Animations-Optionen.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        fadeToggle(options?: { duration?: number }): jBase;

        /* ==========================================================================
           STATES MODULE
           ========================================================================== */

        /**
         * * 🇬🇧: Checks the 'checked' state (Getter).
         * * 🇩🇪: Prüft den 'checked'-Status (Getter).
         * @returns
         * * 🇬🇧: True if checked.
         * * 🇩🇪: True wenn gecheckt.
         */
        checked(): boolean;
        /**
         * * 🇬🇧: Sets the 'checked' state (Setter).
         * * 🇩🇪: Setzt den 'checked'-Status (Setter).
         * @param state
         * * 🇬🇧: The new state.
         * * 🇩🇪: Der neue Status.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        checked(state: boolean): jBase;

        /**
         * * 🇬🇧: Checks the 'selected' state (Getter).
         * * 🇩🇪: Prüft den 'selected'-Status (Getter).
         * @returns
         * * 🇬🇧: True if selected.
         * * 🇩🇪: True wenn ausgewählt.
         */
        selected(): boolean;
        /**
         * * 🇬🇧: Sets the 'selected' state (Setter).
         * * 🇩🇪: Setzt den 'selected'-Status (Setter).
         * @param state
         * * 🇬🇧: The new state.
         * * 🇩🇪: Der neue Status.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        selected(state: boolean): jBase;

        /**
         * * 🇬🇧: Checks the 'disabled' state (Getter).
         * * 🇩🇪: Prüft den 'disabled'-Status (Getter).
         * @returns
         * * 🇬🇧: True if disabled.
         * * 🇩🇪: True wenn deaktiviert.
         */
        disabled(): boolean;
        /**
         * * 🇬🇧: Sets the 'disabled' state and toggles CSS class (Setter).
         * * 🇩🇪: Setzt den 'disabled'-Status und CSS-Klasse (Setter).
         * @param state
         * * 🇬🇧: The new state.
         * * 🇩🇪: Der neue Status.
         * @returns
         * * 🇬🇧: The current jBase instance.
         * * 🇩🇪: Die aktuelle jBase-Instanz.
         */
        disabled(state: boolean): jBase;
    }
}

/**
 * * 🇬🇧: Factory function to initialize a new jBase instance.
 * * 🇩🇪: Factory-Funktion zur Initialisierung einer neuen jBase-Instanz.
 * @param selector
 * * 🇬🇧: CSS selector, HTML string, DOM element, or collection.
 * * 🇩🇪: CSS-Selektor, HTML-String, DOM-Element oder Sammlung.
 * @returns
 * * 🇬🇧: A new jBase collection.
 * * 🇩🇪: Eine neue jBase-Collection.
 */
const init = (selector: JBaseInput): JBaseClass => new JBaseClass(selector);

/**
 * * 🇬🇧: Export the factory under different aliases for maximum compatibility and convenience.
 * * 🇩🇪: Export der Factory unter verschiedenen Aliasen für maximale Kompatibilität und Komfort.
 */
export const $ = init;
export const jB = init;
export const _jB = init;
export const __jB = init;
export const _jBase = init;
export const __jBase = init;
export const jBase = init;

/**
 * * 🇬🇧: Utility for throttled function calls.
 * * 🇩🇪: Utility für gedrosselte Funktionsaufrufe.
 */
export { throttle } from './utils';

/**
 * * 🇬🇧: Utility for debounced function calls.
 * * 🇩🇪: Utility für verzögerte Funktionsaufrufe.
 */
export { debounce } from './utils';

/**
 * * 🇬🇧: HTTP Client for AJAX requests.
 * * 🇩🇪: HTTP-Client für AJAX-Anfragen.
 */
export { http } from './modules/http';

/**
 * * 🇬🇧: Data utilities for Arrays and Objects.
 * * 🇩🇪: Daten-Utilities für Arrays und Objekte.
 */
export { data } from './modules/data';

/**
 * * 🇬🇧: The class itself, if needed for type checks.
 * * 🇩🇪: Die Klasse selbst, falls für Typ-Prüfungen benötigt.
 */
export { JBaseClass };