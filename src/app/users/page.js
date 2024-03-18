// 'use client'
import axios from "axios"
import Link from "next/link";
import DeleteBtn from "../_components/DeleteBtn";

export async function getUsers() {
    const res = await axios.get(`${process.env.NEXTJS_URL}/api/get-users`, { cache: "no-cache" })
    return res.data.result;
}
const Users = async () => {
    const data = await getUsers()


    return (
        <div className='container'>
            <h1 className='text-center mt-3'>All Registered Users</h1>
            <div className="text-center bg-warning p-3 text-light" style={{ width: 'fit-content' }}><Link href={'/add-user'} style={{ textDecoration: "none", color: "black" }}>Add New User</Link></div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">User Phone No.</th>
                        <th scope="col">Action Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length && data.map((user, id) => (
                            <tr key={id}>
                                <th scope="row">{id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className="d-flex gap-3 align-items-center"><Link href={`/users/${user._id}`} style={{ textDecoration: "none", backgroundColor: "blue", padding: '4px 8px', color: "white" }}>Edit</Link>
                                    <DeleteBtn userId={user._id} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Users
