import { useEffect, useState } from 'react';

const useBlogFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchBlog = async () => {
            try {
                let response =  await fetch("http://localhost:5000/blogs");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchBlog();
    }, []);

    return {
        data,
        loading,
    };
};

export default useBlogFetch;