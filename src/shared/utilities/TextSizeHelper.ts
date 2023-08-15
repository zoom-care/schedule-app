import fontSize from "../../types/fontSize";

class TextSizeHelper {
    GetMarginClass(size?: keyof typeof fontSize): string {
        return `sch-text-${size}`;
    }
}
export default TextSizeHelper;