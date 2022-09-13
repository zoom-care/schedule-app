import { FC } from "react";
import { Subtitle as StyledSubtitle, Title as StyledTitle } from "./styles"

interface IProps {
    title: string;
    titleColor?: 'primary' | 'secondary';
    subtitle?: string;
    secondSubtitle?: string;
}

const Title: FC<IProps> = ({ title, titleColor = 'primary', subtitle, secondSubtitle }) => {
    return (
        <div>
            <StyledTitle color={titleColor}>{title}</StyledTitle>
            {subtitle ?? <StyledSubtitle>{subtitle}</StyledSubtitle>}
            <br />
            {secondSubtitle ?? <StyledSubtitle>{secondSubtitle}</StyledSubtitle>}
        </div>
    )
}

export default Title;