/**
 * @file src/modules/effects/vertical.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for vertical sliding effects (slideDown, slideUp, slideToggle).
 * * 🇩🇪: Methoden für vertikale Slide-Effekte (slideDown, slideUp, slideToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Configuration options for vertical slide effects.
 * * 🇩🇪: Konfigurationsoptionen für vertikale Slide-Effekte.
 */
export interface SlideVerticalOptions {
    duration?: number;
    displayType?: string; // e.g., 'block', 'flex'
}

/**
 * * 🇬🇧: Slides an element down (animates height from 0 to auto). Sets `display` property and animates height.
 * * 🇩🇪: Fährt ein Element vertikal aus (animiert die Höhe von 0 auf auto). Setzt `display` und animiert die Höhe.
 * @param options
 * * 🇬🇧: Animation duration and display type.
 * * 🇩🇪: Dauer der Animation und Display-Typ.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideDown(this: jBase, options: SlideVerticalOptions = {}): jBase {
    const { duration = 300, displayType = 'block' } = options;

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            // 1. If already visible, abort
            if (window.getComputedStyle(el).display !== 'none') return;

            // 2. Make element visible but hidden to measure height 
            el.style.display = displayType;
            const height = el.scrollHeight; // Full content height

            // 3. Set start values (height to 0)
            el.style.height = '0px';
            el.style.overflow = 'hidden'; // Important to hide content immediately
            el.style.transition = `height ${duration}ms ease-in-out`;

            // 4. Force Reflow (browser must realize height is 0)
            void el.offsetHeight;

            // 5. Set target value (browser animates now)
            el.style.height = height + 'px';

            // 6. Cleanup after animation
            setTimeout(() => {
                el.style.height = 'auto'; // Allow responsive resizing
                el.style.overflow = 'visible';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Slides an element up (animates height to 0). Sets `display: none` after animation.
 * * 🇩🇪: Fährt ein Element vertikal ein (animiert die Höhe auf 0). Setzt am Ende `display: none`.
 * @param options
 * * 🇬🇧: Animation duration.
 * * 🇩🇪: Dauer der Animation.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideUp(this: jBase, options: SlideVerticalOptions = {}): jBase {
    const { duration = 300 } = options;

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            // 1. Fix current height (in case it is auto)
            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
            el.style.transition = `height ${duration}ms ease-in-out`;

            // 2. Force Reflow
            void el.offsetHeight;

            // 3. Animate to 0
            el.style.height = '0px';

            // 4. Hide after animation
            setTimeout(() => {
                el.style.display = 'none';
                el.style.height = '';
                el.style.overflow = '';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Toggles between slideDown and slideUp based on the display state.
 * * 🇩🇪: Wechselt zwischen slideDown und slideUp basierend auf dem display-Status.
 * @param options
 * * 🇬🇧: Animation duration.
 * * 🇩🇪: Dauer der Animation.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function slideToggleBox(this: jBase, options: SlideVerticalOptions = {}): jBase {
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            const display = window.getComputedStyle(el).display;
            // Wrap element in new jBase instance to call slideUp/Down
            const wrapper = new (this.constructor as any)(el);

            if (display === 'none') {
                wrapper.slideDown(options);
            } else {
                wrapper.slideUp(options);
            }
        }
    });
    return this;
}