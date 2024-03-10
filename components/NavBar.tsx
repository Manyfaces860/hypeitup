
const NavBar = () => {
  return (
    <div className="absolute inset-0 h-[70px]">
        <nav className="flex justify-between items-center">
            <div className="logo w-[100px] h-[100px] rounded-lg overflow-clip ml-3 -mt-9">
                <img src="/hypeitup.jpg" alt="logo" />
            </div>
            <div className="navbox w-11 h-11 mr-6 mt-3 flex justify-evenly items-center overflow-clip" style={{backgroundColor : '#DBFF00'}}>
                <div className="nav-for-anime w-4 h-7 bg-purple-600"></div>
                <div className="nav-for-anime w-2 h-7 bg-purple-600"></div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar