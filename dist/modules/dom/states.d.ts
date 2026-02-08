/**
 * @file src/modules/dom/states.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for checking element states (e.g., visibility, checked, disabled).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */
import { jBase } from '../../core';
/**
 * * Gets or sets the 'checked' state of checkboxes and radio buttons.
 * @param state
 * * (Optional) `true` to check, `false` to uncheck. If undefined, acts as a getter.
 * @returns
 * * Boolean (getter) or the current jBase instance (setter).
 */
export declare function checked(this: jBase, state?: boolean): boolean | jBase;
/**
 * * Gets or sets the 'selected' state of `<option>` elements.
 * @param state
 * * (Optional) `true` to select, `false` to deselect. If undefined, acts as a getter.
 * @returns
 * * Boolean (getter) or the current jBase instance (setter).
 */
export declare function selected(this: jBase, state?: boolean): boolean | jBase;
/**
 * * Enables or disables form fields and buttons. Additionally toggles the CSS class `.disabled`.
 * @param state
 * * (Optional) `true` to disable, `false` to enable. If undefined, acts as a getter.
 * @returns
 * * Boolean (getter) or the current jBase instance (setter).
 */
export declare function disabled(this: jBase, state?: boolean): boolean | jBase;
//# sourceMappingURL=states.d.ts.map