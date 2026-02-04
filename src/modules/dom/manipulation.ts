/**
 * @file src/modules/dom/manipulation.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for inserting, moving, and removing elements (append, prepend, remove).
 * * 🇩🇪: Methoden zum Einfügen, Verschieben und Entfernen von Elementen (append, prepend, remove).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Internal Helper: Converts a string into a DOM Node.
 * * 🇩🇪: Interner Helper: Wandelt einen String in eine DOM Node um.
 */
function parseHTML(html: string): HTMLElement {
    const tmp = document.createElement('div');
    tmp.innerHTML = html.trim();
    return tmp.firstElementChild as HTMLElement;
}

/**
 * * 🇬🇧: Internal Helper: Converts arbitrary input into a DocumentFragment to minimize reflows.
 * * 🇩🇪: Interner Helper: Wandelt beliebigen Input in ein DocumentFragment um, um Reflows zu minimieren.
 */
function normalizeToFragment(content: string | Node | jBase | (string | Node)[]): DocumentFragment {
    const fragment = document.createDocumentFragment();

    const add = (item: any) => {
        if (typeof item === 'string') {
            const temp = document.createElement('div');
            temp.innerHTML = item.trim();
            while (temp.firstChild) {
                fragment.appendChild(temp.firstChild);
            }
        } else if (item instanceof Node) {
            fragment.appendChild(item);
        } else if (item instanceof jBase || Array.isArray(item) || item instanceof NodeList) {
            Array.from(item).forEach(child => add(child));
        }
    };

    add(content);
    return fragment;
}

/**
 * * 🇬🇧: Removes the selected elements from the DOM.
 * * 🇩🇪: Entfernt die ausgewählten Elemente vollständig aus dem DOM.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function remove(this: jBase): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.remove();
    });
    return this;
}

/**
 * * 🇬🇧: Removes all child nodes and text content from the selected elements.
 * * 🇩🇪: Entfernt alle Kind-Elemente und Textknoten aus den ausgewählten Elementen.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function empty(this: jBase): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.innerHTML = '';
    });
    return this;
}

/**
 * * 🇬🇧: Replaces each element with a deep clone of itself. Useful for removing all event listeners ("Nuke" strategy).
 * * 🇩🇪: Ersetzt jedes Element durch eine tiefe Kopie seiner selbst. Nützlich, um alle Event-Listener hart zu entfernen.
 * @returns
 * * 🇬🇧: A new jBase instance containing the cloned elements.
 * * 🇩🇪: Eine neue jBase-Instanz, die die geklonten Elemente enthält.
 */
export function replaceWithClone(this: jBase): jBase {
    const newElements: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            const clone = el.cloneNode(true) as Element;
            el.replaceWith(clone);
            newElements.push(clone);
        }
    });

    return new (this.constructor as any)(newElements);
}

/**
 * * 🇬🇧: Inserts content at the end of each selected element (inside).
 * * 🇩🇪: Fügt Inhalt am Ende jedes Elements in der Sammlung ein (innerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function append(this: jBase, content: string | Node | jBase): jBase {
    const fragment = normalizeToFragment(content);

    this.forEach((el, i) => {
        if (el instanceof Element) {
            // Clone fragment for multiple targets, retain original for the last one
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.appendChild(contentToInsert);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Inserts content at the beginning of each selected element (inside).
 * * 🇩🇪: Fügt Inhalt am Anfang jedes Elements in der Sammlung ein (innerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function prepend(this: jBase, content: string | Node | jBase): jBase {
    const fragment = normalizeToFragment(content);

    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.prepend(contentToInsert);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Inserts content before the element (outside).
 * * 🇩🇪: Fügt Inhalt VOR dem Element ein (außerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function before(this: jBase, content: string | Node | jBase): jBase {
    const fragment = normalizeToFragment(content);

    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.before(contentToInsert);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Inserts content after the element (outside).
 * * 🇩🇪: Fügt Inhalt NACH dem Element ein (außerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function after(this: jBase, content: string | Node | jBase): jBase {
    const fragment = normalizeToFragment(content);

    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.after(contentToInsert);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Replaces the element with new content.
 * * 🇩🇪: Ersetzt das Element durch neuen Inhalt.
 * @param content
 * * 🇬🇧: The new content.
 * * 🇩🇪: Der neue Inhalt.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function replaceWith(this: jBase, content: string | Node | jBase): jBase {
    const fragment = normalizeToFragment(content);

    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.replaceWith(contentToInsert);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Appends the selected elements to the end of a target element.
 * * 🇩🇪: Hängt die aktuellen Elemente an das Ende des Ziel-Elements an.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function appendTo(this: jBase, target: string | Element): jBase {
    const parent = typeof target === 'string' ? document.querySelector(target) : target;
    if (parent instanceof Element) {
        const fragment = document.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        parent.appendChild(fragment);
    }
    return this;
}

/**
 * * 🇬🇧: Prepends the selected elements to the beginning of a target element.
 * * 🇩🇪: Fügt die aktuellen Elemente am Anfang des Ziel-Elements ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function prependTo(this: jBase, target: string | Element): jBase {
    const parent = typeof target === 'string' ? document.querySelector(target) : target;
    if (parent instanceof Element) {
        const fragment = document.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        parent.prepend(fragment);
    }
    return this;
}

/**
 * * 🇬🇧: Inserts the selected elements immediately before the target element.
 * * 🇩🇪: Fügt die aktuellen Elemente unmittelbar VOR dem Ziel-Element ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function insertBefore(this: jBase, target: string | Element): jBase {
    const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
    if (targetEl instanceof Element) {
        const fragment = document.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        targetEl.before(fragment);
    }
    return this;
}

/**
 * * 🇬🇧: Inserts the selected elements immediately after the target element.
 * * 🇩🇪: Fügt die aktuellen Elemente unmittelbar NACH dem Ziel-Element ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function insertAfter(this: jBase, target: string | Element): jBase {
    const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
    if (targetEl instanceof Element) {
        const fragment = document.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        targetEl.after(fragment);
    }
    return this;
}

/**
 * * 🇬🇧: Wraps each selected element with the specified HTML structure.
 * * 🇩🇪: Umschließt jedes Element in der Auswahl mit der angegebenen HTML-Struktur.
 * @param wrapperHtml
 * * 🇬🇧: HTML string defining the wrapper (e.g., `<div class="box"></div>`).
 * * 🇩🇪: Ein HTML-String, der die Wrapper-Struktur definiert (z.B. `<div class="box"></div>`).
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function wrap(this: jBase, wrapperHtml: string): jBase {
    this.forEach(el => {
        if (el instanceof Element) {
            const wrapper = parseHTML(wrapperHtml);
            if (el.parentNode) {
                el.parentNode.insertBefore(wrapper, el);
            }
            wrapper.appendChild(el);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Removes the direct parent of the selected elements from the DOM.
 * * 🇩🇪: Entfernt das direkte Elternelement der ausgewählten Elemente aus dem DOM.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function unwrap(this: jBase): jBase {
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            const parent = el.parentElement;
            const fragment = document.createDocumentFragment();
            while (parent.firstChild) {
                fragment.appendChild(parent.firstChild);
            }
            parent.replaceWith(fragment);
        }
    });
    return this;
}