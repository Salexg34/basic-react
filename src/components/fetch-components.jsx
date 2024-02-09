import React, {useEffect, useState, useRef} from "react";



const FetchComponent = () => {
    const [data, setData] = useState(['element', 'component', 'list', 'list']);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);
    const i = useRef(0);
    const isNeedFetched = useRef(false);

    const handleChange = () => {
        console.log(data.slice(0, data.length - 1))
        setData(data.slice(0, data.length - 1))
        // setIsLoading(true);
        isNeedFetched.current = true;
    }

    i.current = i.current + 1;

    // useEffect(() => {
    //     console.log('useEffect depends on isLoading');
    //     if (isNeedFetched.current === true) {
    //         setCount(x => x + 1);
    //         isNeedFetched.current = false;
    //     }
    // },[isLoading])

    // useEffect(() => {
    //     console.log('useEfect new', i.current);
    //     setIsLoading(true);
    //     const likeFetching = setTimeout(() => {
    //         if (!isLoading) {
    //             return;
    //         }
    //         console.log(i.current, 'timeout');

    //         setData((prevState) => {
    //             return [...prevState, 'list']
    //         })
    //         setIsLoading(false);
    //     }, 3000)

    //     return () => {
    //         console.log('unmount', i.current)
    //         setIsLoading(false);
    //         clearTimeout(likeFetching)
    //     }
    // }, [data])

    // https://jsonplaceholder.typicode.com/todos

    return (
        <div>
            <div>
                magic???
            </div>
            {count}
            <ul>
                {data.map((value, index) => {
                    return (
                        <li key={index}>
                            {value}
                        </li>
                    )
                })}
            </ul>

            <button onClick={handleChange}>
                click me
            </button>
        </div>
    )
}

export default FetchComponent;