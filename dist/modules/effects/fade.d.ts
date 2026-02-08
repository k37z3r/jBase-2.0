/**
 * @file src/modules/effects/fade.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * Methods for fading elements in and out (fadeIn, fadeOut, fadeToggle).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
import { FadeOptions } from './types';
/**
 * * Fades an element in (Opacity 0 -> 1).
 * @param options
 * * Duration in ms (default: 300) and display type (default: 'block').
 * @returns
 * * The current jBase instance.
 */
export declare function fadeIn(this: jBase, options?: FadeOptions): jBase;
/**
 * * Fades an element out (Opacity 1 -> 0) and sets display: none afterwards.
 * @param options
 * * Duration in ms (default: 300).
 * @returns
 * * The current jBase instance.
 */
export declare function fadeOut(this: jBase, options?: FadeOptions): jBase;
/**
 * * Toggles between fadeIn and fadeOut based on the current display state.
 * @param options
 * * Animation options.
 * @returns
 * * The current jBase instance.
 */
export declare function fadeToggle(this: jBase, options?: FadeOptions): jBase;
//# sourceMappingURL=fade.d.ts.map