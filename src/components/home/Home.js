import { useEffect, useState } from "react";
import BlogList from "./../bloglist/BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setIsPending(false);
                setBlogs(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = {"All Blogs"} />}
        </div>
    )
}

export default Home;