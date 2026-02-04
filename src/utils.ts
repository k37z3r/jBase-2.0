/**
 * @file src/utils.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Utilities
 * @description
 * * 🇬🇧: General utility functions and helpers (e.g., debounce, throttle, type checks).
 * * 🇩🇪: Allgemeine Hilfsfunktionen und Helfer (z.B. debounce, throttle, Typ-Prüfungen).
 */

/**
 * * 🇬🇧: Creates a throttled version of the provided function. The function is executed at most once within the specified time interval, regardless of how often it is called.
 * Use case: Performance optimization for high-frequency events (e.g., Scroll, Resize, Mousemove).
 * * 🇩🇪: Erstellt eine gedrosselte (throttled) Version der übergebenen Funktion. Die Funktion wird höchstens einmal innerhalb des angegebenen Zeitintervalls ausgeführt, unabhängig davon, wie oft sie aufgerufen wird.
 * Einsatzgebiet: Performance-Optimierung bei hochfrequenten Events (z.B. Scroll, Resize, Mousemove).
 * @template T
 * * 🇬🇧: The type of the original function.
 * * 🇩🇪: Der Typ der ursprünglichen Funktion.
 * @param func
 * * 🇬🇧: The function to be throttled.
 * * 🇩🇪: Die Funktion, die gedrosselt werden soll.
 * @param limit
 * * 🇬🇧: The time interval in milliseconds during which at most one execution is permitted.
 * * 🇩🇪: Das Zeitintervall in Millisekunden, in dem höchstens eine Ausführung erlaubt ist.
 * @returns
 * * 🇬🇧: A new function that throttles calls.
 * * 🇩🇪: Eine neue Funktion, die die Aufrufe drosselt.
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function(this: any, ...args: Parameters<T>) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * * 🇬🇧: Creates a debounced version of the provided function. Execution is delayed until `delay` milliseconds have passed since the last invocation.
 * Use case: Waiting for user input (e.g., Live Search, Validation) to avoid unnecessary calculations.
 * * 🇩🇪: Erstellt eine entprellte (debounced) Version der übergebenen Funktion. Die Ausführung der Funktion wird verzögert, bis `delay` Millisekunden verstrichen sind, ohne dass ein neuer Aufruf erfolgt ist.
 * Einsatzgebiet: Warten auf Benutzereingaben (z.B. Live-Suche, Validierung) zur Vermeidung unnötiger Berechnungen.
 * @template T
 * * 🇬🇧: The type of the original function.
 * * 🇩🇪: Der Typ der ursprünglichen Funktion.
 * @param func
 * * 🇬🇧: The function to be debounced.
 * * 🇩🇪: Die Funktion, die entprellt werden soll.
 * @param delay
 * * 🇬🇧: The waiting time in milliseconds after the last call.
 * * 🇩🇪: Die Wartezeit in Millisekunden nach dem letzten Aufruf.
 * @returns
 * * 🇬🇧: A new function that delays execution.
 * * 🇩🇪: Eine neue Funktion, die die Ausführung verzögert.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return function(this: any, ...args: Parameters<T>) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}