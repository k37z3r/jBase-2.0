/**
 * @file src/types.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Types
 * @description
 * * Central type definitions, interfaces, and aliases for the jBase library.
 */
/**
 * * Represents the basic DOM elements managed by a jBase instance. Includes standard HTML elements, the Document, the Window object, and generic elements (e.g., SVG).
 */
export type JBaseElement = HTMLElement | Document | Window | Element;
/**
 * * Union type for all valid inputs to the main selector function $(...). Accepts CSS selectors (string), single DOM elements, NodeLists, Arrays, or null/undefined.
 */
export type JBaseInput = string | JBaseElement | NodeList | JBaseElement[] | null | undefined;
/**
 * * Extracts valid CSS property names from the native CSSStyleDeclaration. Excludes methods (like setProperty) and numeric indices to ensure type safety and autocomplete.
 */
export type JBaseCSSProperty = Exclude<keyof CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty' | number>;
/**
 * * Extended event map linking native DOM events with framework-specific custom events. Serves as the base for generics in .on() and .off() to infer correct event types.
 */
export interface JBaseEventMap extends HTMLElementEventMap {
    /**
     * * Fired when the framework and DOM are fully initialized.
     */
    'jbase:ready': CustomEvent;
}
/**
 * * Generic type for event handlers. Allows TypeScript to infer the 'event' parameter type based on the event name (K).
 */
export type JBaseEventHandler<K extends keyof JBaseEventMap> = (event: JBaseEventMap[K]) => void;
/**
 * * Fallback type for generic event handlers where the specific event type is unknown.
 */
export type GenericEventHandler = (event: Event) => void;
/**
 * * Standardized interface for API responses in the http module.
 * @template T
 * * The expected type of the data payload.
 */
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}
//# sourceMappingURL=types.d.ts.map