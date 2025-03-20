import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between items-center py-3 px-6'>
        {/* Left logo */}
        <div>
            <Link to="/" className="text-2xl font-medium">Rabbit</Link>
        </div>
        
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Men
            </Link>
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Women
            </Link>
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Top Wear
            </Link>
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Bottom Wear
            </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
                <HiOutlineUser className='h-6 w-6 text-gray-700'/>
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;
