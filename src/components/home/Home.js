import { useEffect, useState } from "react";
import BlogList from "./../bloglist/BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setIsPending(false);
                setBlogs(data);
            })
            .catch((err) => {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {<div>{error}</div>}
            {blogs && <BlogList blogs = {blogs} title = {"All Blogs"} />}
        </div>
    )
}

export default Home;