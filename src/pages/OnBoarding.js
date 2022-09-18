import { useState } from "react"
import Nav from "../components/Nav"

const OnBoarding= () =>{
    //save form data for user (onboarding pg)
    //made the useState into an obj so it'll have the same info as our dbs
    const[formData, setFormData] = useState({
        user_id:'',
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender: false,
        gender_identity: 'woman',
        interest:'coffee chat',
        email:'',
        url:'',
        about:'',
        matches: []


    })

    const handleSubmit= () => {
        console.log('submitted')
    }

//pass through e for event  make sure name and value are correct on form inputs otherwise wont work (need to get the name and input of each
//value so we can save its name and value in our db)
//handle checked box if true get e.tagert.checked : e.target.value
    const handleChange= (e) => {
        const value= e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name= e.target.name
        console.log('value' + value, 'name' + name)

        //update new value to our db; get the previous state and update it to its current value using name
        //can now use formData with their values on our forms below 
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        })) 
    }
        console.log(formData)
    return(

        <>
      
          <Nav 
          minimal={true} 
          setShowModal={() => {}} 
          showModal={false} 
          />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>

                    <section>

                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />


                    <label>Birthday</label>

                    <div className="multiple-input-container">

                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD"
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
                        required={true}
                        value={formData.dob_year}
                        onChange={handleChange}
                    />
                    </div>

                    <label>Gender</label>
                    <div className="multiple-input-container">
                    <input
                        id="man-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="man"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'man'}
                    /> 
                        <label htmlFor="man-gender-identity">Man</label>

                    <input
                        id="woman-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="woman"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'woman'}
                    />
                         <label htmlFor="woman-gender-identity">Woman</label>


                    <input
                        id="more-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="more"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'more'}
                    />
                         <label htmlFor="more-gender-identity">More</label>
                    </div>
                         <label htmlFor="show-gender">Show gender on my profile</label>
                    <input
                        id="show-gender"
                        type="checkbox"
                        name="show_gender"    
                        onChange={handleChange}
                        checked={formData.show_gender}
                    />


                    <label>Show Me</label>
                    <div className="multiple-input-container">
                    <input
                        id="coffee-chat-interest"
                        type="radio"
                        name="interest"
                        value="coffee chat"
                        onChange={handleChange}
                        checked={formData.interest === 'coffee chat'}
                    /> 
                        <label htmlFor="coffee-chat-interest">Coffee Chat</label>
  
                    <input
                        id="conference-event-interest"
                        type="radio"
                        name="interest"
                        value="conference buddy"
                        onChange={handleChange}
                        checked={formData.interest === 'conference buddy'}
                    />
                         <label htmlFor="conference-event-interest">Conference Buddy</label>


                    <input
                        id="both-interest"
                        type="radio"
                        name="interest"
                        value="both"
                        onChange={handleChange}
                        checked={formData.interest === 'both'}
                    />
                         <label htmlFor="both-interest">Both</label>
                    </div>

                    <label htmlFor="about">About Me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I'm a software engineer, I love to go hiking and find new trails."
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <input type="submit"/>
                </section>

                <section>  
                    <label htmlFor="url">Profile Photo</label>
                         <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                    <div className="photo-container">
                        <img src={formData.url} alt="profile picture preview" />

                    </div>
                </section>
                   

                </form>

            </div>

     
        </>
    )
}

export default OnBoarding