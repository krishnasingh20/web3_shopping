import { useEffect, useState } from 'react'
import axios from 'axios';

function Apicalling() {
    const [allInventory, setAllInventory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const API = 'https://fakestoreapi.com/products'
        async function calling() {
            try {
                setLoading(true)
                let resp = await axios.get(API)
                setAllInventory(resp.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        calling()
    }, [])
    return { allInventory, loading, error };
}

export default Apicalling