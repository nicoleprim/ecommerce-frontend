import { useState } from 'react'

export default function useForm(initialState) {
    const [form, setform] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setform({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setform(initialState)
    }

    return { form, handleChange, cleanFields }

}