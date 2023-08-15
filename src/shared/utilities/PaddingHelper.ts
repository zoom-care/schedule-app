import spaces from "../../types/spaces";

class PaddingHelper {
    public static GetPaddingAll(space: keyof typeof spaces = 'xxxs'): string {
        let className = ``;

        className = `sch-padding-${space}`;
        return className;

    }

    public static GetPadding(space: { top?: keyof typeof spaces, bottom?: keyof typeof spaces, left?: keyof typeof spaces, right?: keyof typeof spaces }): string {
        let className = ``;

        if (space.left) {
            className = `${className} sch-padding-left-${space.left}`;
        }

        if (space.right) {
            className = `${className} sch-padding-right-${space.right}`;
        }

        if (space.top) {
            className = `${className} sch-padding-top-${space.top}`;
        }

        if (space.bottom) {
            className = `${className} sch-padding-bottom-${space.bottom}`;
        }

        return className;
    }

}
export default PaddingHelper;