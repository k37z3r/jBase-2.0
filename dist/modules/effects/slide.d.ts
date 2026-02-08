/**
 * @file src/modules/effects/slide.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * Methods for horizontal sliding effects (slideIn, slideOut, slideToggle).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
import { SlideOptions } from './types';
/**
 * * Slides an element (e.g., a menu) into view. Sets `transform: translateX(0)`.
 * @param options
 * * Direction ('left'|'right') and duration in ms.
 * @returns
 * * The current jBase instance.
 */
export declare function slideIn(this: jBase, options?: SlideOptions): jBase;
/**
 * * Slides an element out of view.
 * @param options
 * * Direction ('left'|'right') and duration in ms.
 * @returns
 * * The current jBase instance.
 */
export declare function slideOut(this: jBase, options?: SlideOptions): jBase;
/**
 * * Toggles between slideIn and slideOut based on the current state.
 * @param options
 * * Direction ('left'|'right') and duration in ms.
 * @returns
 * * The current jBase instance.
 */
export declare function slideToggle(this: jBase, options?: SlideOptions): jBase;
//# sourceMappingURL=slide.d.ts.map