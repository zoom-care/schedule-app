import React from 'react';
import MarginHelper from '../shared/utilities/MarginHelper';

const FootBar: React.FC = () => {
    return (
        <div className={MarginHelper.GetMarginAll('md')}>
            <div>
                11958 SW Garden Place | Tigard, OR 97223
            </div>
            <div>
                © 2023 ZoomCare
            </div>
        </div>
    );
};

export default FootBar;
