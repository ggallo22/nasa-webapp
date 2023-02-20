import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className='N_Bar'>
            <img className="NASAlogo" src="NASAlogowhite.png"></img>
            <div className="logo">
                <h1>Web Application</h1>
            </div>
            <Link href="/">View Gallery</Link>
            <Link href="/polychromatic">View Polychromatic</Link>

        </nav>
    );
}

export default Navbar;