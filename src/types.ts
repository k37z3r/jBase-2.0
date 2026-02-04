/**
 * @file src/types.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Types
 * @description
 * * 🇬🇧: Central type definitions, interfaces, and aliases for the jBase library.
 * * 🇩🇪: Zentrale Typ-Definitionen, Interfaces und Aliase für die jBase-Bibliothek.
 */

/**
 * * 🇬🇧: Represents the basic DOM elements managed by a jBase instance. Includes standard HTML elements, the Document, the Window object, and generic elements (e.g., SVG).
 * * 🇩🇪: Repräsentiert die grundlegenden DOM-Elemente, die von einer jBase-Instanz verwaltet werden können. Umfasst Standard-HTML-Elemente, das Dokument, das Window-Objekt sowie generische Elemente (z.B. SVG).
 */
export type JBaseElement = HTMLElement | Document | Window | Element;

/**
 * * 🇬🇧: Union type for all valid inputs to the main selector function $(...). Accepts CSS selectors (string), single DOM elements, NodeLists, Arrays, or null/undefined.
 * * 🇩🇪: Union Type für alle gültigen Eingabewerte der Haupt-Selektorfunktion $(...). Akzeptiert CSS-Selektoren (string), einzelne DOM-Elemente, NodeLists, Arrays oder null/undefined.
 */
export type JBaseInput = string | JBaseElement | NodeList | JBaseElement[] | null | undefined;

/**
 * * 🇬🇧: Extracts valid CSS property names from the native CSSStyleDeclaration. Excludes methods (like setProperty) and numeric indices to ensure type safety and autocomplete.
 * * 🇩🇪: Extrahiert ausschließlich die gültigen CSS-Eigenschaftsnamen aus der nativen CSSStyleDeclaration. Methoden (wie setProperty) und numerische Indizes werden ausgeschlossen, um Typ-Sicherheit zu gewährleisten.
 */
export type JBaseCSSProperty = Exclude<keyof CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty' | number>;

/**
 * * 🇬🇧: Extended event map linking native DOM events with framework-specific custom events. Serves as the base for generics in .on() and .off() to infer correct event types.
 * * 🇩🇪: Erweiterte Event-Map, die native DOM-Events mit Framework-spezifischen Custom-Events verknüpft. Dient als Basis für Generics in .on() und .off(), um den korrekten Event-Typ abzuleiten.
 */
export interface JBaseEventMap extends HTMLElementEventMap {
    /**
     * * 🇬🇧: Fired when the framework and DOM are fully initialized.
     * * 🇩🇪: Wird ausgelöst, wenn das Framework und DOM vollständig initialisiert sind.
     */
    'jbase:ready': CustomEvent;
}

/**
 * * 🇬🇧: Generic type for event handlers. Allows TypeScript to infer the 'event' parameter type based on the event name (K).
 * * 🇩🇪: Generischer Typ für Event-Handler. Ermöglicht TypeScript, den Typ des 'event'-Parameters basierend auf dem Event-Namen (K) automatisch zu bestimmen.
 */
export type JBaseEventHandler<K extends keyof JBaseEventMap> = (event: JBaseEventMap[K]) => void;

/**
 * * 🇬🇧: Fallback type for generic event handlers where the specific event type is unknown.
 * * 🇩🇪: Fallback-Typ für generische Event-Handler, wenn der spezifische Event-Typ nicht bekannt ist.
 */
export type GenericEventHandler = (event: Event) => void;

/**
 * * 🇬🇧: Standardized interface for API responses in the http module.
 * * 🇩🇪: Standardisierte Schnittstelle für API-Antworten des http-Moduls.
 * @template T
 * * 🇬🇧: The expected type of the data payload.
 * * 🇩🇪: Der Typ der erwarteten Nutzdaten.
 */
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}