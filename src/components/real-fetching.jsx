import { useEffect, useState, useRef } from "react";
const FetchComponent = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [needToFetch, setNeedToFetch] = useState(true);
    const url = useRef('https://jsonplaceholder.typicode.com/todosыы');

    const handleRefetch = () => {
        url.current = url.current.slice(0, -1);
        setNeedToFetch(true);
        setIsLoading(true);
        setHasError(false);
    }

    useEffect(() => {
        if (!needToFetch) {
            return;
        }

        const request = fetch(url.current);
        request
            .then((response) => {
                setNeedToFetch(false);

                if (!response.ok) {
                    throw new Error('Response is not ok')
                }
                return response.json();
            })
            .then(body => {
                setIsLoading(false);
                setHasError(false);
                const partOfBody = body.slice(0, 10);
                setData(partOfBody);
            })
            .catch(() => {
                setHasError(true);
                setNeedToFetch(false)
                setIsLoading(false);
            });

    }, [needToFetch]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {hasError && (
                <div>
                    <div>Извините? мы уже исправляем ошибку</div>
                    <button onClick={handleRefetch}>
                        обновить данные
                    </button>
                </div>
            )}
            <ul>
                {data.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FetchComponent;
