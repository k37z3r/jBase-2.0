/**
 * @file src/modules/effects/vertical.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * Methods for vertical sliding effects (slideDown, slideUp, slideToggle).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
import { SlideVerticalOptions } from './types';
/**
 * * Slides an element down (animates height from 0 to auto). Sets `display` property and animates height.
 * @param options
 * * Animation duration and display type.
 * @returns
 * * The current jBase instance.
 */
export declare function slideDown(this: jBase, options?: SlideVerticalOptions): jBase;
/**
 * * Slides an element up (animates height to 0). Sets `display: none` after animation.
 * @param options
 * * Animation duration.
 * @returns
 * * The current jBase instance.
 */
export declare function slideUp(this: jBase, options?: SlideVerticalOptions): jBase;
/**
 * * Toggles between slideDown and slideUp based on the display state.
 * @param options
 * * Animation duration.
 * @returns
 * * The current jBase instance.
 */
export declare function slideToggleBox(this: jBase, options?: SlideVerticalOptions): jBase;
//# sourceMappingURL=vertical.d.ts.map