import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useRequestData(inicialData, url) {
    const [data, setData] = useState(inicialData)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data.products)
            }).catch((err) => {
            })
    }, [url])
    return (data)
}