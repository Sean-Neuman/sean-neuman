
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'CV', href: '/cv', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Carbon Acres', href: '/carbon-acres', current: false },
  ]
  
const Navbar = () => {
    return(
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sean Neuman</span>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a href = "/contact">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</button>
        </a>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item) => (
            <li key={item.name} className="flex">
                <a
                href={item.href}
                className={`${
                    item.current
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400'
                } hover:text-gray-900 dark:hover:text-gray-100`}
                >
                {item.name}
                </a>
            </li>
            ))}
        </ul>
    </div>
    </div>
    </nav>
    );
};
export default Navbar;