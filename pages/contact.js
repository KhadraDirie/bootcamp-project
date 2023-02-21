
//CONTACT PAGE WITH AN API ENDPOINT


import Header from "../components/shared/header"
import Content from "../components/shared/content"
import Footer from "../components/shared/footer"
import { useState } from "react"
import Input from "../components/form/input"

export default function Contact(){
    const [name,setName] = useState("") // state to hold the value of name.email and message while user interacts with form
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [showSuccess,setShowSuccess] = useState(false)

    const handleChangeName= (value) => {
        const name = value
        setName(name)
    } // when the value changes it targets the setName state which will cause react to rerender the value which is being displayed inside the name area

    const handleChangeEmail= (value) => {
        const email = value
        setEmail(email) 
    }

    const handleChangeMessage= (value) => {
        const message = value
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
        <div className="w-full py-5">
             <Header name = "Contact"/>

            <Content>
                <div>

                <form className='form mb-4 py-5'>
  <div className="flex flex-col">
    <div className="mb-4">
      <Input
        value={name} 
        placeholder='Name'
        type = 'text'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        onChange={handleChangeName}
      />
    </div>
    <div className="mb-4">
      <Input
        value={email}
        placeholder='Email'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        onChange={handleChangeEmail}
      />
    </div>
    <div>
      <Input
        value={message}
        placeholder='Message'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        onChange={handleChangeMessage}
      />
    </div>
  </div>
</form>

    </div>
  
<div className='mb-4 py-4' type='submit'>
<button 
type="button"
onClick={handleSubmit} 
className='bg-rose-500 hover:bg-rose-700 text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>

{showSuccess === true ?
(<p className="text-black w-96 py-4">
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