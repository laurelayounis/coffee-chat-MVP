import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import {useState} from 'react'

const Home= () =>{
    const[showModal, setShowModal]= useState(false)
    //where the state for is sign up is stored
    const[isSignUp, setIsSignUp]= useState(true)

    const authToken= false

    const handleClick= () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)
    }

    return(
        <div className="overlay">
        <Nav 
        minimal={false} 
        authToken={authToken} 
        setShowModal={setShowModal} 
        showModal={showModal}
        //passing through the state for is sign up / option to change it (logic is in the Nav component: so when we click on the button (const handleclick) it changes setIsSignUp to false
        setIsSignUp={setIsSignUp}
        />

        <div className="home">
            <h1 className='primary-title'>Get Linked  ®</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? "Signout" : "Create Account"}
            </button>

            {showModal && (
                <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
            )}


        </div>
        </div>
    )
}

export default Home 