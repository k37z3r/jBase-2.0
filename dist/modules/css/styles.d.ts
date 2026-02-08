/**
 * @file src/modules/css/styles.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * Methods for getting and setting inline CSS styles.
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Sets or gets the value of a style property for the selected elements.
 * @param property
 * * The CSS property name (camelCase).
 * @param value
 * * (Optional) The value to set. If undefined, the method acts as a getter.
 * @returns
 * * The computed style value (string) if acting as a getter, or the current jBase instance if setting.
 */
export declare function css(this: jBase, property: string, value?: string | number): string | jBase;
//# sourceMappingURL=styles.d.ts.map