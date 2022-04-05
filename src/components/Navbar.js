import logo from './images/Logo.png';

const Navbar = () => {
    return (
        <header>
            <nav className="flex flex-row lg:flex-row md:flex-row  justify-between lg:justify-around nav  py-4 px-8">

                <div className="w-12 nav_logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="px-12 nav_links">
                    <ul className="gap-4 flex  lg:flex-row md:flex-row py-3 ">
                        <li><a href="About" className=" font-semibold no-underline hover:underline">About</a></li>
                        <li><a href="Case Studies" className=" font-semibold no-underline hover:underline">Case Studies</a></li>
                        <li><a href="Services" className=" font-semibold no-underline hover:underline">Services</a></li>
                        <li><a href="Blog" className=" font-semibold no-underline hover:underline">Blog</a></li>
                    </ul>
                </div>
                <div className="nav_search px-24 pt-2 ">
                    <div className="border-b-2 ">

                        <span className="fa fa-search text-slate-300 "></span>
                        <input type="text" className=" w-28" placeholder="Search Here" />
                    </div>
                </div>
                <div className="nav_login py-4 ">
                    <i className="w-24 fa fa-user "> login</i>

                </div>


                <div className="nav_toggle p-4">
                    <i className="fa-solid fa-bars"></i>
                    <div className="xsline1"></div>
                    <div className="xsline2"></div>
                    <div className="xsline3" ></div>
                </div >
            </nav >

        </header >
    )
} 


export default Navbar