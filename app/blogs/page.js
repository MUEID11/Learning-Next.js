import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "blog1",
      description: "blog 1 description",
    },
    {
      id: 2,
      title: "blog2",
      description: "blog 2 description",
    },
    {
      id: 3,
      title: "blog3",
      description: "blog 3 description",
    },
  ];
  return <main>
    <ul>
    {blogs.map(blog => <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>)}
    </ul>
    
  </main>;
};

export default page;
