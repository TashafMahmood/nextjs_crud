import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className='container-fluid navbar bg-success p-2 text-light'>
            <div>NEXT.JS CRUD</div>
            <div>
                <Link href={'/'} style={{textDecoration:"none",color:'white'}}>Home</Link>
            </div>
        </div>
    )
}

export default Navigation
