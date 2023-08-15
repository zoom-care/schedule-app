import spaces from "../../types/spaces";

class MarginHelper {

    public static GetMarginAll(space: keyof typeof spaces = 'xxxs'): string {
        let className = ``;

        className = `sch-margin-${space}`;
        return className;
    }

    public static GetMargin(space: { top?: keyof typeof spaces, bottom?: keyof typeof spaces, left?: keyof typeof spaces, right?: keyof typeof spaces }): string {
        let className = ``;

        if (space.left) {
            className = `${className} sch-margin-left-${space.left}`;
        }

        if (space.right) {
            className = `${className} sch-margin-right-${space.right}`;
        }

        if (space.top) {
            className = `${className} sch-margin-top-${space.top}`;
        }

        if (space.bottom) {
            className = `${className} sch-margin-bottom-${space.bottom}`;
        }

        return className;
    }
}
export default MarginHelper;