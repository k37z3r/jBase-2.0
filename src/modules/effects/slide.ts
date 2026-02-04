/**
 * @file src/modules/effects/slide.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for horizontal sliding effects (slideIn, slideOut, slideToggle).
 * * 🇩🇪: Methoden für horizontale Slide-Effekte (slideIn, slideOut, slideToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Configuration interface for slide methods.
 * * 🇩🇪: Konfigurations-Interface für die Slide-Methoden.
 */
export interface SlideOptions {
    direction?: 'left' | 'right';
    duration?: number;
}

/**
 * * 🇬🇧: Slides an element (e.g., a menu) into view. Sets `transform: translateX(0)`.
 * * 🇩🇪: Schiebt ein Element (z.B. ein Menü) in den sichtbaren Bereich. Setzt `transform: translateX(0)`.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideIn(this: jBase, options: SlideOptions = {}): jBase {
    const { duration = 300 } = options;

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            // Performance: Enable hardware acceleration
            el.style.willChange = 'transform';
            el.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

            // Move into view
            requestAnimationFrame(() => {
                el.style.transform = 'translateX(0%)';
            });

            // Save state
            el.setAttribute('data-slide-state', 'open');
        }
    });
    return this;
}

/**
 * * 🇬🇧: Slides an element out of view.
 * * 🇩🇪: Schiebt ein Element aus dem sichtbaren Bereich heraus.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideOut(this: jBase, options: SlideOptions = {}): jBase {
    const { direction = 'left', duration = 300 } = options;
    const translateValue = direction === 'left' ? '-100%' : '100%';

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.willChange = 'transform';
            el.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

            requestAnimationFrame(() => {
                el.style.transform = `translateX(${translateValue})`;
            });

            el.setAttribute('data-slide-state', 'closed');
        }
    });
    return this;
}

/**
 * * 🇬🇧: Toggles between slideIn and slideOut based on the current state.
 * * 🇩🇪: Wechselt zwischen slideIn und slideOut basierend auf dem aktuellen Status.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideToggle(this: jBase, options: SlideOptions = {}): jBase {
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            // Check our own attribute or guess based on transform property
            const state = el.getAttribute('data-slide-state');
            const currentTransform = el.style.transform;

            // If explicitly 'open' or transform is 0 -> close
            if (state === 'open' || currentTransform === 'translateX(0%)' || window.getComputedStyle(el).display !== 'none') {
                // Wrap single element to apply slideOut logic correctly
                const wrapper = new (this.constructor as any)(el);
                wrapper.slideOut(options);
            } else {
                const wrapper = new (this.constructor as any)(el);
                wrapper.slideIn(options);
            }
        }
    });
    return this;
}