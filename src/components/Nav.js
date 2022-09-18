import whiteLogo from '../images/blacklogo.png'
import colorLogo from '../images/redlogo.png'

const Nav= ({minimal,  setShowModal, showModal, setIsSignUp}) => {

    const handleClick= ()=> {
        setShowModal(true)
        //when click on the button changes state of setIsSignUp to false
        setIsSignUp(false)
    }

    const authToken= true
    return(
        <nav>
        <div className="logo-container">
            <img 
                className="logo" 
                src={minimal ? colorLogo : whiteLogo}
                alt="Coffee Chat Logo" />
        </div>
        {!authToken && !minimal && (
        <button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >
                Log in
                </button>)}
    </nav>
    )
}

export default Nav