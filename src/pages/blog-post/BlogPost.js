import React from 'react';
import './BlogPost.css'
import  { useParams, Link } from 'react-router-dom'
import posts from '../../data/posts.json'

function BlogPost() {
    const { blogId } = useParams();
    console.log(blogId);

    const currentPost = posts.find((post) => {
        return post.id === blogId;
    });
    // console.log(currentPost)

    return (
        <main>
          <section className={"blog-post"}>
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.date}</h3>
            <p>{currentPost.content}</p>
          </section>
          <section className={"link-back"}>
              <Link to={"/blogposts"}>Terug naar overzicht</Link>
          </section>
        </main>
    );
}

export default BlogPost;