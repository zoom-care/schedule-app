import { FC } from "react";
import { Button as StyledButton } from './styles'
interface IProps {
    value: string;
}

const Button: FC<IProps> = ({ value }) => {
    return <StyledButton>{value}</StyledButton>;
}

export default Button;