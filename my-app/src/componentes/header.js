import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Profile} from '../assets/images/perfil.svg';
import './header.css';


function Header() {
    return (
        <header className='main-header'>
            <div className='title'>
                <Logo className='logo' style={{ width: '100px', fill: 'orange'}}/>
                <a className="app" href="/">My-App</a>
            </div>
            <nav className="profile">
                <a href="/profile">
                <Profile className="icon" style={{ width: '100px', fill: 'white'}}/>
                </a>
            </nav>
        </header>
    );
}

export default Header;
