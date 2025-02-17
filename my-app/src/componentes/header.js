import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {
    return (
        <div>
            <div>
                <Logo style={{ width: '100px', fill: 'orange'}} className="logo" />
                <a href="/">My-App</a>
            </div>
            <nav className="flex">
                <a href="/profile">Profile</a>
            </nav>
        </div>
    );
}

export default Header;
