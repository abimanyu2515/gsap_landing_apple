import { navLinks } from '../constants';
import logo from '/logo.svg';

const NavBar = () => {
  return (
    <header className='w-screen fixed top-0 left-0 z-50 flex-center bg-black min-h-[7vh]'>
        <nav className='flex justify-around items-center container mx-auto flex-between px-5 2xl:px-0'>
            <img src={logo} className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out' alt="" />

            <ul className='flex-center gap-8 bg-transparent border-none outline-none cursor-pointer'>
                {navLinks.map(({label}) => (
                    <li key={label} className='hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out'>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>

                <button>
                    <img src="/cart.svg" alt="Cart image" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar