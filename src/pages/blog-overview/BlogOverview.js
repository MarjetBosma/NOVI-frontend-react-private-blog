import React from 'react';
import './BlogOverview.css'
import posts from '../../data/posts.json';
import { Link } from "react-router-dom";

function BlogOverview() {
    return (
       <main>
        <h1>Overzicht blogs</h1>
        <h3>Aantal blogposts: {posts.length}</h3>
           <ul className="blog-list">
               {posts.map((blog) => {
                   console.log(blog.title)
                   return <li className= "blog-link" key={ blog.id }>
                       <Link to={`/blogposts/${blog.id}`}>
                           {blog.title}
                       </Link>
                   </li>
               })}
           </ul>
       </main>
    );
}

export default BlogOverview;