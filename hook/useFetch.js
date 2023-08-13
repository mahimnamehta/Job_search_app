import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': 'd3ae0da359msh7f44665d9af1b35p107146jsn2c9856454053',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request(options);
            setData(res.data.data);
            setIsLoading(false);
        } catch (e) {
            setError(e);
            alert('There is an Error!')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data,isLoading,error,refetch};
}

export default useFetch;