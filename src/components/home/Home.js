import BlogList from "./../bloglist/BlogList"
import useFetch from "./../../utility/useFetch";

const Home = () => {

    const {data: blogs, error, isPending} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {<div>{error}</div>}
            {blogs && <BlogList blogs = {blogs} title = {"All Blogs"} />}
        </div>
    )
}

export default Home;