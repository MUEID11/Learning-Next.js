import React from 'react';

const layout = ( {children}) => {
    return (
        <div className='mt-6'>
            <nav>misson | vision</nav>
            {children}
        </div>
    );
};

export default layout;