import '../Assets/CSS/style.css'
import Logo from '../Assets/Image/logo.png'
import GPLogo from '../Assets/Image/gpLogo.png'
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logoHeader">
                    <img src={Logo} className="img" />
                </div>
                <div className="headerText">
                    <h1>
                        SN Data Display
                    </h1>
                </div>
                <div className="logoHeader">
                    <img src={GPLogo} className="gpimg" />
                </div>
            </div>
        </div>
    )
}
export default Header;