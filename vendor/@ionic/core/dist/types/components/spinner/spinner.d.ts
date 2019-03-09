import { ComponentInterface } from '../../stencil.core';
import { Color, Config, Mode, SpinnerTypes } from '../../interface';
export declare class Spinner implements ComponentInterface {
    config: Config;
    mode: Mode;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * Duration of the spinner animation in milliseconds. The default varies based on the spinner.
     */
    duration?: number;
    /**
     * The name of the SVG spinner to use. If a name is not provided, the platform's default
     * spinner will be used. Possible values are: `"lines"`, `"lines-small"`, `"dots"`, `"bubbles"`,
     * `"circles"`, `"crescent"`.
     */
    name?: SpinnerTypes;
    /**
     * If true, the spinner's animation will be paused. Defaults to `false`.
     */
    paused: boolean;
    private getName;
    hostData(): {
        class: {
            'spinner-paused': boolean;
        } | {
            [x: string]: boolean;
            'spinner-paused': boolean;
        };
    };
    render(): any[];
}