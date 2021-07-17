import { useState } from "react";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        setIsPending(true);

        setTimeout(() => {
    
            fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers : { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
            }).then(() => {
                console.log("new blog added");
                setIsPending(false);
            })
        }, 1000);
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit= {handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    required
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button style={{"opacity":"0.5"}}disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;