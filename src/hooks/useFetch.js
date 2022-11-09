import { useEffect, useState } from "react";

const useFetch = (uri, isToken = false, method) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const apiFetch = async () => {
            try {
                let response = await fetch(uri, {
                    method: method || "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        apiFetch();

        return () => {
            apiFetch();
        };
    }, [uri, isToken, method]);

    return {
        data,
        loading,
    };
};

export default useFetch;
