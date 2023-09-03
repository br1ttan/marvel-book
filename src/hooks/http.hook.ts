import { useCallback, useState } from "react";

const UseHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessageHttp, setErrorMessageHttp] = useState('');

    const request = useCallback(
        async (
            url: string, 
            method = 'GET', 
            body = null, 
            headers = {'Content-Type': 'application/json'}
        ) => {
        setLoading(true);
        setError(false);
        setErrorMessageHttp('');

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${response.status}`);
            }
            return await response.json();
        } catch (e: any) {
            setError(true);
            setErrorMessageHttp(e.message);
            throw e;
        } finally {
            setLoading(false);
        }
    }, []);

    const clearError = useCallback(() => setError(false), []);

    return { loading, error, request, clearError, errorMessageHttp };
}

export default UseHttp;
