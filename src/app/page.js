import Link from "next/link";

export default function Home() {
  return (
    <div className="d-flex gap-4 align-items-center justify-content-center" style={{ height: '90vh' }}>
      <Link href={'/users'} style={{ textDecoration: 'none', color: "white", background: "blue", padding: '10px 40px', borderRadius: "5px" }}>See All Users</Link>
      <Link href={'/add-user'} style={{ textDecoration: 'none', color: "white", background: "blue", padding: '10px 40px', borderRadius: "5px" }}>Register New User</Link>
    </div>
  )
}
