import getPost from '@/app/lib/getPost';
import React from 'react';

const page = async({params}) => {
    const {id} = params;
    const post = await getPost(id);
    console.log(post);
    return (
        <div>
            <h2 className='text-md text-blue-600'>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default page;