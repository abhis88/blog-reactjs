import { useEffect } from "react";

const BlogList = (props) => {
    const blogs = props.blogs;

    // useEffect(() => {
    //     console.log("test again");
    // }, []);

    return (
        <div className="blog-list">
            <h2>{props.title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;