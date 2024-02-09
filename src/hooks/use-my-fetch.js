import { useState, useEffect } from 'react';


/**
 * Params:
 * {url, onSuccess, onError}
 * Return:
 * {data, isLoading, hasError}
 */
export const useMyFetch = (params) => {
    const {url, onSuccess, onError} = params;

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);


    useEffect(() => {
        console.log('USE EFFECT')
        const request = fetch(url.current);
        request
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response is not ok')
                }
                return response.json();
            })
            .then(body => {
                setIsLoading(false);
                setHasError(false);
                console.log(body);
                setData(body);

                onSuccess();
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);

                if (onError) {
                    onError();
                }
            });
    }, [url, onError, onSuccess]);

    return {
        data,
        isLoading,
        hasError,
    }

};
