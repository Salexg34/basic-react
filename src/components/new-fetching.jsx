import { useMyFetch } from "../hooks/use-my-fetch";

const FetchComponent = () => {
    const {isLoading, hasError, data} = useMyFetch({
        url: 'https://jsonplaceholder.typicode.com/todos',
        onSuccess: () => {
            console.log('ITs works')
        },
    })

    const handleRefetch = () => {
        console.log("CLICKED REFETCH")
    }

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
            {data && <ul>
                {data.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}

export default FetchComponent;
