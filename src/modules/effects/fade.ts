/**
 * @file src/modules/effects/fade.ts
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for fading elements in and out (fadeIn, fadeOut, fadeToggle).
 * * 🇩🇪: Methoden zum Ein- und Ausblenden von Elementen (fadeIn, fadeOut, fadeToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */

import { jBase } from '../../core';

/**
 * * 🇬🇧: Configuration options for fade effects.
 * * 🇩🇪: Konfigurationsoptionen für Fade-Effekte.
 */
export interface FadeOptions {
    duration?: number;
    displayType?: string;
}

/**
 * * 🇬🇧: Fades an element in (Opacity 0 -> 1).
 * * 🇩🇪: Blendet ein Element sanft ein (Opacity 0 -> 1).
 * @param options
 * * 🇬🇧: Duration in ms (default: 300) and display type (default: 'block').
 * * 🇩🇪: Dauer in ms (Standard: 300) und display-Typ (Standard: 'block').
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function fadeIn(this: jBase, options: FadeOptions = {}): jBase {
    const { duration = 300, displayType = 'block' } = options;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.opacity = '0';
            el.style.display = displayType;
            el.style.transition = `opacity ${duration}ms ease-in-out`;
            // Trigger Reflow
            void el.offsetHeight;
            requestAnimationFrame(() => {
                el.style.opacity = '1';
            });
            setTimeout(() => {
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Fades an element out (Opacity 1 -> 0) and sets display: none afterwards.
 * * 🇩🇪: Blendet ein Element sanft aus (Opacity 1 -> 0) und setzt danach display: none.
 * @param options
 * * 🇬🇧: Duration in ms (default: 300).
 * * 🇩🇪: Dauer in ms (Standard: 300).
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function fadeOut(this: jBase, options: FadeOptions = {}): jBase {
    const { duration = 300 } = options;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.opacity = '1';
            el.style.transition = `opacity ${duration}ms ease-in-out`;
            // Trigger Reflow
            void el.offsetHeight;
            requestAnimationFrame(() => {
                el.style.opacity = '0';
            });
            setTimeout(() => {
                el.style.display = 'none';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * 🇬🇧: Toggles between fadeIn and fadeOut based on the current display state.
 * * 🇩🇪: Wechselt zwischen fadeIn und fadeOut basierend auf dem aktuellen display-Status.
 * @param options
 * * 🇬🇧: Animation options.
 * * 🇩🇪: Animations-Optionen.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export function fadeToggle(this: jBase, options: FadeOptions = {}): jBase {
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            const display = window.getComputedStyle(el).display;
            const wrapper = new (this.constructor as any)(el);
            if (display === 'none') {
                wrapper.fadeIn(options);
            } else {
                wrapper.fadeOut(options);
            }
        }
    });
    return this;
}