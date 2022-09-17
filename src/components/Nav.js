import whiteLogo from '../images/blacklogo.png'
import colorLogo from '../images/redlogo.png'

const Nav= ({minimal, authToken}) => {


    return(
        <nav>
        <div className="logo-container">
            <img className="logo" src={minimal ? colorLogo : whiteLogo} />
        </div>
        {!authToken && !minimal && <button 
            className="nav-button">Log in</button>}
    </nav>
    )
}

export default Nav