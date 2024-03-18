'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteBtn = ({ userId }) => {
    const router = useRouter()
    const deleteUser = async (id) => {
        try {
            const data = await axios.delete(`/api/get-users/${id}`)
            alert("User deleted successfully")
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button className='btn btn-danger' onClick={() => deleteUser(userId)}>Delete</button>
    )
}

export default DeleteBtn
