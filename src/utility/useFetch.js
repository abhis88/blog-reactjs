
import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setIsPending(false);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            })
        }, 1000)
    }, [url]);

    return {data, error, isPending}
}

export default useFetch;