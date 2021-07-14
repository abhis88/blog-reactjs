import { useState } from "react";

const Home = () => {

    const handleClick = () => {
        console.log("Hello, Ninjas");
    }

    const handleClickWithParam = (name) => {
        console.log("Hello " + name);
        setName(name);
    }

    const [name, setName] = useState('mario');
    
    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick = { handleClick }>Click me</button>
            <button onClick = { () => handleClickWithParam ('ninjas')}>Click Me with Param</button>
            <div>{name}</div>
        </div>
    )
}

export default Home;