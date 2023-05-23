import React from 'react';
import './BlogPost.css'
import  { useParams } from 'react-router-dom'

function BlogPost() {
    const { id } = useParams();

    return (
        <main>
            <h1>Titel</h1>
            <h3>Datum</h3>
            <p>Inhoud blog</p>
        </main>
    );
}

export default BlogPost;