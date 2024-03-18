'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditUser = ({ params }) => {
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const router = useRouter()

    useEffect(() => {

        getUserDetail()
    }, [])



    const getUserDetail = async () => {
        try {
            const idx = params.id
            const res = await axios.get(`/api/get-users/${idx}`)
            setUser(res.data.result)
            setName(res.data.result.name)
            setEmail(res.data.result.email)
            setPhone(res.data.result.phone)
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async () => {
        const id = params.id
        const data = { name, email, phone }
        try {
            const res = await axios.put(`/api/get-users/${id}`, data)
            alert("User Updated Successfully")
            window.location.href = "/users";
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='container d-flex flex-column justify-content-center' style={{ height: '90vh' }}>
                <h1 className='text-center mt-3'>Edit and Update User Details</h1>
                <div className="text-center w-50 mx-auto">
                    <input type="text" className="form-control my-4" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Your Name" />
                    <input type="email" className="form-control my-4" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email" />
                    <input type="number" className="form-control my-4" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter Your Phone No." />
                    <button className='btn btn-success w-100' onClick={updateUser}>Update User</button>
                </div>
            </div>
        </div>
    )
}

export default EditUser
