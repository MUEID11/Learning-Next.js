import React from 'react';
import getAllPost from '../lib/getallpost';
import Link from 'next/link';

const  page = async () => {
    const posts = await getAllPost();
    return (
        <div>
            <h1 className='text-2xl my-4'>All posts</h1>
            <ul>
                {posts.map(post => <li key={post.id}><Link href={`posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </div>
    );
};

export default page;