'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const router = useRouter()
    const addUser = async () => {
        try {
            const result = await axios.post('/api/register-user', {
                name, email, phone
            })
            setName(""),
                setEmail(""),
                setPhone("")
            window.location.href="/users"
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container d-flex flex-column justify-content-center' style={{ height: "90vh" }}>
            <h1 className='text-center mt-3'>Register New User Here</h1>
            <div className="text-center w-50 mx-auto">
                <input type="text" className="form-control my-4" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Your Name" />
                <input type="email" className="form-control my-4" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email" />
                <input type="number" className="form-control my-4" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter Your Phone No." />
                <button className='btn btn-success w-100' onClick={addUser}>Add User</button>
            </div>
        </div>
    )
}

export default AddUser
