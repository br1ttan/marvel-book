import { useCallback, useState } from "react";

const UseHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(
        async (
            url: string, 
            method = 'GET', 
            body = null, 
            headers = {'Content-Type': 'application/json'}
        ) => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${response.status}`);
            }
            return await response.json();
        } catch (e) {
            setError(true);
            throw e;
        } finally {
            setLoading(false);
        }
    }, []);

    const clearError = useCallback(() => setError(false), []);

    return { loading, error, request, clearError };
}

export default UseHttp;
