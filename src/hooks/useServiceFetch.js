import { useEffect, useState } from "react";

const useServiceFetch = (url, method, token) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method: method || "GET",
            headers: {
                "Content-Type": "application/json",
                token: token ? `Bear ${localStorage.getItem("token")}` : null,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }, []);

    return {
        data,
        loading,
    };
};

export default useServiceFetch;
