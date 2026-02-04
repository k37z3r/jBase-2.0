/**
 * @file src/modules/dom/traversal.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for navigating the DOM tree (find, parent, children, siblings).
 * * 🇩🇪: Methoden zur Navigation im DOM-Baum (find, parent, children, siblings).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';



/**
 * * 🇬🇧: Traverses the parents (heading toward the document root) of each element and finds the first element that matches the specified selector.
 * * 🇩🇪: Durchläuft die Elternelemente (in Richtung Document Root) jedes Elements und findet das erste Element, das dem angegebenen Selektor entspricht.
 * @param selector
 * * 🇬🇧: A string containing a selector expression.
 * * 🇩🇪: Ein String, der einen Selektor-Ausdruck enthält.
 * @returns
 * * 🇬🇧: A new jBase instance containing the matched elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefundenen Elementen.
 */
export function closest(this: jBase, selector: string): jBase {
    const found: Element[] = [];

    this.forEach(el => {
        if (el instanceof Element) {
            const match = el.closest(selector);
            if (match) {
                found.push(match);
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets the direct parent of each element in the current set. Deduplicates results.
 * * 🇩🇪: Gibt das direkte Elternelement jedes Elements in der aktuellen Auswahl zurück. Entfernt Duplikate.
 * @returns
 * * 🇬🇧: A new jBase instance containing the parent elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Elternelementen.
 */
export function parent(this: jBase): jBase {
    const parents: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            parents.push(el.parentElement);
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(parents)]);
}

/**
 * * 🇬🇧: Gets the direct children of each element in the set, optionally filtered by a selector.
 * * 🇩🇪: Gibt die direkten Kinder jedes Elements zurück, optional gefiltert durch einen Selektor.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance containing the children.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Kindern.
 */
export function children(this: jBase, selector?: string): jBase {
    let allChildren: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            const kids = Array.from(el.children);
            allChildren = allChildren.concat(kids);
        }
    });

    if (selector) {
        allChildren = allChildren.filter(child => child.matches(selector));
    }

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(allChildren);
}

/**
 * * 🇬🇧: Finds descendants (deep) that match the selector using `querySelectorAll`.
 * * 🇩🇪: Findet Nachfahren (tief), die dem Selektor entsprechen. Nutzt `querySelectorAll`.
 * @param selector
 * * 🇬🇧: The CSS selector to search for.
 * * 🇩🇪: Der CSS-Selektor für die Suche.
 * @returns
 * * 🇬🇧: A new jBase instance with the found elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefundenen Elementen.
 */
export function findAll(this: jBase, selector: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element || el instanceof Document) {
            const matches = el.querySelectorAll(selector);
            matches.forEach(m => found.push(m));
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Recursively gets ALL descendants (not just direct children).
 * * 🇩🇪: Gibt rekursiv ALLE Nachfahren zurück (nicht nur direkte Kinder).
 * @returns
 * * 🇬🇧: A new jBase instance with all descendants.
 * * 🇩🇪: Eine neue jBase-Instanz mit allen Nachfahren.
 */
export function descendants(this: jBase): jBase {
    return this.findAll('*');
}

/**
 * * 🇬🇧: Gets all ancestors (parents, grandparents...) up to the root. Optionally filtered.
 * * 🇩🇪: Gibt alle Vorfahren (Eltern, Großeltern...) zurück bis zum Root-Element. Optional gefiltert.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector for ancestors.
 * * 🇩🇪: (Optional) Selektor zum Filtern der Vorfahren.
 * @returns
 * * 🇬🇧: A new jBase instance with the ancestors.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Vorfahren.
 */
export function parents(this: jBase, selector?: string): jBase {
    const ancestors: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.parentElement;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    ancestors.push(curr);
                }
                curr = curr.parentElement;
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(ancestors)]);
}

/**
 * * 🇬🇧: Gets all ancestors UP TO (but not including) an element matching the selector.
 * * 🇩🇪: Gibt alle Vorfahren zurück, BIS (aber nicht einschließlich) ein Element dem Selektor entspricht.
 * @param selector
 * * 🇬🇧: The selector where traversal stops.
 * * 🇩🇪: Der Selektor, bei dem gestoppt wird.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the collected elements.
 * * 🇩🇪: (Optional) Zusätzlicher Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function parentsUntil(this: jBase, selector: string, filter?: string): jBase {
    const ancestors: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.parentElement;
            while (curr && !curr.matches(selector)) {
                if (!filter || curr.matches(filter)) {
                    ancestors.push(curr);
                }
                curr = curr.parentElement;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(ancestors)]);
}

/**
 * * 🇬🇧: Recursively finds descendants but stops traversing a branch if `untilSelector` is met. Useful for finding nested elements without going too deep (e.g., nested forms).
 * * 🇩🇪: Sucht rekursiv nach Nachfahren, stoppt aber den "Tiefgang" in einem Zweig, sobald ein Element dem `untilSelector` entspricht.
 * @param untilSelector
 * * 🇬🇧: The selector that stops recursion in a branch.
 * * 🇩🇪: Der Selektor, der die Rekursion in diesem Zweig stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Selector to filter collected elements.
 * * 🇩🇪: (Optional) Selektor, welche Elemente gesammelt werden sollen.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function descendantsUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];

    const traverse = (parent: Element) => {
        const kids = parent.children;
        for (let i = 0; i < kids.length; i++) {
            const child = kids[i];
            if (child.matches(untilSelector)) {
                continue;
            }
            if (!filter || child.matches(filter)) {
                found.push(child);
            }
            traverse(child);
        }
    };
    this.forEach(el => {
        if (el instanceof Element) traverse(el);
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets the immediately following sibling.
 * * 🇩🇪: Holt das unmittelbar folgende Geschwisterelement.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function next(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.nextElementSibling) {
            const nextEl = el.nextElementSibling;
            if (!selector || nextEl.matches(selector)) {
                found.push(nextEl);
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets the immediately preceding sibling.
 * * 🇩🇪: Holt das unmittelbar vorhergehende Geschwisterelement.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function prev(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.previousElementSibling) {
            const prevEl = el.previousElementSibling;
            if (!selector || prevEl.matches(selector)) {
                found.push(prevEl);
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Alias for `next()`.
 * * 🇩🇪: Alias für `next()`.
 */
export function nextSibling(this: jBase, selector?: string): jBase {
    return this.next(selector);
}

/**
 * * 🇬🇧: Alias for `prev()`.
 * * 🇩🇪: Alias für `prev()`.
 */
export function prevSibling(this: jBase, selector?: string): jBase {
    return this.prev(selector);
}

/**
 * * 🇬🇧: Alias for `next()`.
 * * 🇩🇪: Alias für `next()`.
 */
export function sibling(this: jBase, selector?: string): jBase {
    return this.next(selector);
}

/**
 * * 🇬🇧: Gets ALL following siblings.
 * * 🇩🇪: Holt ALLE nachfolgenden Geschwisterelemente.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function nextAll(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.nextElementSibling;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    found.push(curr);
                }
                curr = curr.nextElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets ALL preceding siblings.
 * * 🇩🇪: Holt ALLE vorhergehenden Geschwisterelemente.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function prevAll(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.previousElementSibling;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    found.push(curr);
                }
                curr = curr.previousElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets ALL siblings (previous and next), excluding itself.
 * * 🇩🇪: Holt ALLE Geschwisterelemente (vorherige UND nachfolgende), außer sich selbst.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function siblings(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            const children = Array.from(el.parentElement.children);
            children.forEach(child => {
                if (child !== el) { // Exclude self
                    if (!selector || child.matches(selector)) {
                        found.push(child);
                    }
                }
            });
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets all following siblings UNTIL a selector is met (exclusive).
 * * 🇩🇪: Holt alle nachfolgenden Elemente BIS ein Selektor zutrifft (exklusive).
 * @param untilSelector
 * * 🇬🇧: The selector that stops the search.
 * * 🇩🇪: Der Selektor, der die Suche stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the found elements.
 * * 🇩🇪: (Optional) Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function nextUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.nextElementSibling;
            while (curr && !curr.matches(untilSelector)) {
                if (!filter || curr.matches(filter)) {
                    found.push(curr);
                }
                curr = curr.nextElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Gets all preceding siblings UNTIL a selector is met (exclusive).
 * * 🇩🇪: Holt alle vorhergehenden Elemente BIS ein Selektor zutrifft (exklusive).
 * @param untilSelector
 * * 🇬🇧: The selector that stops the search.
 * * 🇩🇪: Der Selektor, der die Suche stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the found elements.
 * * 🇩🇪: (Optional) Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export function prevUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.previousElementSibling;
            while (curr && !curr.matches(untilSelector)) {
                if (!filter || curr.matches(filter)) {
                    found.push(curr);
                }
                curr = curr.previousElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * 🇬🇧: Reduces the set to the element at the specified index. Supports negative indices.
 * * 🇩🇪: Reduziert das Set auf das Element am angegebenen Index. Unterstützt negative Indizes.
 * @param index
 * * 🇬🇧: The position (0-based). Negative values count from the end.
 * * 🇩🇪: Die Position (0-basiert). Negative Werte zählen vom Ende.
 * @returns
 * * 🇬🇧: A new jBase instance containing the single element (or empty).
 * * 🇩🇪: Eine neue jBase-Instanz mit dem einzelnen Element (oder leer).
 */
export function eq(this: jBase, index: number): jBase {
    const len = this.length;
    // Calculate negative indices: -1 becomes len - 1
    const idx = index < 0 ? len + index : index;
    // Get element (or undefined)
    const el = this[idx];
    const Construction = this.constructor as new (args: any) => jBase;
    // If element exists, wrap in array, else empty array
    return new Construction(el ? [el] : []);
}

/**
 * * 🇬🇧: Reduces the set to the first element.
 * * 🇩🇪: Reduziert das Set auf das erste Element.
 */
export function first(this: jBase): jBase {
    return this.eq(0);
}

/**
 * * 🇬🇧: Reduces the set to the last element.
 * * 🇩🇪: Reduziert das Set auf das letzte Element.
 */
export function last(this: jBase): jBase {
    return this.eq(-1);
}

/**
 * * 🇬🇧: Filters elements based on a selector or a function.
 * * 🇩🇪: Filtert die Elemente basierend auf einem Selektor oder einer Funktion.
 * @param selectorOrFn
 * * 🇬🇧: CSS selector string or filter function.
 * * 🇩🇪: CSS-Selektor (String) oder Filter-Funktion.
 * @returns
 * * 🇬🇧: A new jBase instance with filtered elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefilterten Elementen.
 */
export function filterBy(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase {
    const found: Element[] = [];

    this.forEach((el, index) => {
        if (el instanceof Element) {
            if (typeof selectorOrFn === 'string') {
                // String filter: Check matches()
                if (el.matches(selectorOrFn)) {
                    found.push(el);
                }
            } else if (typeof selectorOrFn === 'function') {
                // Function filter: Check return value (true/false)
                // 'this' inside the function is the element itself (jQuery Style)
                if (selectorOrFn.call(el, index, el)) {
                    found.push(el);
                }
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(found);
}

/**
 * * 🇬🇧: Removes elements from the set that match the selector or function (Inverse of filterBy).
 * * 🇩🇪: Entfernt Elemente aus dem Set, die dem Selektor oder der Funktion entsprechen (Das Gegenteil von filterBy).
 * @param selectorOrFn
 * * 🇬🇧: CSS selector string or filter function.
 * * 🇩🇪: CSS-Selektor (String) oder Filter-Funktion.
 * @returns
 * * 🇬🇧: A new jBase instance with remaining elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den verbleibenden Elementen.
 */
export function not(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase {
    const found: Element[] = [];

    this.forEach((el, index) => {
        if (el instanceof Element) {
            if (typeof selectorOrFn === 'string') {
                // Keep if it does NOT match
                if (!el.matches(selectorOrFn)) {
                    found.push(el);
                }
            } else if (typeof selectorOrFn === 'function') {
                // Keep if function returns FALSE
                if (!selectorOrFn.call(el, index, el)) {
                    found.push(el);
                }
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(found);
}