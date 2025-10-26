import { navLinks } from '../constants';
import logo from '/logo.svg';

const NavBar = () => {
  return (
    <header>
        <nav className='flex justify-around items-center'>
            <img src={logo} alt="" />

            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
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