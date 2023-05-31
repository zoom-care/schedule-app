import Card from 'react-bootstrap/Card';
import { ChildrenProps } from '../../types';

const ZCCard = ({ children }: ChildrenProps) => {
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default ZCCard;
