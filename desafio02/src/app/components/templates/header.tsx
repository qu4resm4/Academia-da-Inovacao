import Nav from "./nav";

export default function Header() {
    return (
     <header className="bg-gray-800 p-6">
        <div className="flex justify-end">
            <Nav/>
        </div>
     </header>
    )
}