export const Navbar = ({ children }) => {
    return <nav className=" lg:top-0 top-auto bottom-[30px] p-4 bg-nav-800/[.30] backdrop-blur-xl rounded-2xl flex flex-row items-center lg:justify-between justify-center h-[60px] text-text-400 w-2/3 lg:mt-6 fixed">{children}</nav>

}