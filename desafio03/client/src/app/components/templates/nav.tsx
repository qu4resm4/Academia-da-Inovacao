import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-2">
            <Link className="text-white" href='/'>Home</Link>
            <Link className="text-white" href='login'>Login</Link>
            <Link className="text-white" href='cadastro'>Cadastro</Link>
            <Link className="text-white" href='dashboard'>Dashboard</Link>
        </nav>
    )
}