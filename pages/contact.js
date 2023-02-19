
//CONTACT PAGE WITH AN API ENDPOINT


import Header from "../components/shared/header"
import Content from "../components/shared/content"
import Footer from "../components/shared/footer"
import { useState } from "react"

export default function Contact(){
    const [name,setName] = useState("") // state to hold the value of name.email and message while user interacts with form
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [showSuccess,setShowSuccess] = useState(false)

    const handleChangeName= (event) => {
        const name = event.target.value
        setName(name)
    } // when the value changes it targets the setName state which will cause react to rerender the value which is being displayed inside the name area

    const handleChangeEmail= (event) => {
        const email = event.target.value
        setEmail(email) 
    }

    const handleChangeMessage= (event) => {
        const message = event.target.value
        setMessage(message) 
    }


    const handleSubmit = async (event) =>{ 
        const response = await fetch (`/api/contact?name=${name}&email=${email}&message=${message}`)
        const data = await response.json();
      
       


       setName  ("") // when form is submitted and page refreshes the inputs are cleared
       setEmail ("")
       setMessage ("")
       setShowSuccess(true)


      } 
    return(
        <div className="w-full">
             <Header name = "Contact"/>

            <Content>
                <div>

    <form className='form mb-4'>
        <label className='block text-white font-medium mb-2' for="name"></label>
        <input 
        type="text"
        name='name'
        value={name}
        placeholder='Name'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500' 
        onChange = {handleChangeName}
        />
        
        
        <label className='block text-white font-medium mb-2 py-1' for='email'></label>
        <input
        type ="text"
        name='email'
        value={email}
        placeholder='Email'
        className='bg-gray-200 appearance-none border-2 rounded w-96 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500' 
        onChange = {handleChangeEmail}
        />

<label className='block text-white font-medium mb-2 py-1' for='message'></label>
        <input
        type ="text"
        name='message'
        value={message}
        placeholder='Message...'
        className='bg-gray-200 appearance-none border-2 rounded  py-3 px-4 w-96 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        onChange = {handleChangeMessage} />


    </form>
    </div>
  
<div className='mb-4 py-4' type='submit'>
<button 
type="button"
onClick={handleSubmit} 
className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>

{showSuccess === true ?
(<p className="text-white w-96 py-4">
    Your message was sent!
</p>)
:
null}  


</div>
 </Content>


            
            
            <Footer className="text-white" title= "Home" href="/" />

        </div>
    )
       
}