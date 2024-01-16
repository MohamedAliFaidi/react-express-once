
function Navbar() {
    return (
        <div
        ><ul className="flex">
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="/">Movies</a>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="/new">Add new movie</a>
            </li>
        
        </ul></div>
    )
}

export default Navbar