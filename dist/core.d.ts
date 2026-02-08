/**
 * @file src/core.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Core
 * @description
 * * The main jBase class. Handles the selection engine, initialization, and plugin architecture.
 */
import { JBaseElement, JBaseInput } from './types';
/**
 * * The core class of the framework, inheriting from the native Array class. Acts as a wrapper around DOM elements and enables chainable methods (Fluent Interface).
 */
export declare class jBase extends Array<JBaseElement> {
    selectorSource: string;
    doc: Document;
    /**
     * * Initializes a new jBase instance. Analyzes the provided selector and populates the internal array with found or created DOM elements.
     * @param selector
     * * The input selector (CSS selector, HTML string, DOM element, or collection).
     */
    constructor(selector?: JBaseInput, context?: Document | Window);
    /**
     * * Custom serializer for JSON.stringify. Prevents circular references and huge outputs by returning a simplified preview.
     * @returns
     * * A simplified object representation for debugging.
     */
    toJSON(): {
        meta: string;
        query: string;
        count: number;
        preview: string[];
    };
}
//# sourceMappingURL=core.d.ts.map