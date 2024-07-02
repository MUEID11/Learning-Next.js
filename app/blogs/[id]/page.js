import React from 'react';

const page = ({params}) => {
    const {id} = params;
    return (
        <div>
            The blog is {id}
        </div>
    );
};

export default page;