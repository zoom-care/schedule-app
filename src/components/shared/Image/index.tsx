import { FC } from "react";
import { Image } from "./styles";

interface IProps {
    src: string;
    rounded?: boolean;
}

const ImageContainer: FC<IProps> = ({ src, rounded = false }) => {
    return <Image src={src} rounded={rounded} alt="time"/>
}

export default ImageContainer;