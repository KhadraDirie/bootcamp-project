
//CONTACT PAGE WITH AN API ENDPOINT


import Header from "../components/shared/header"
import Content from "../components/shared/content"
import Footer from "../components/shared/footer"
import { useState,useEffect } from "react"
import Input from "../components/form/input"
import ListOfMessages from "../components/contact/list-of-messages"

export default function Contact(){
    const [name,setName] = useState("") // state to hold the value of name.email and message while user interacts with form
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [showSuccess,setShowSuccess] = useState(false)
    const [messages,setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMessages() //gets messages from the api endpoint once the component loads for te first time

    }, [])

    //call a function that will allow us to  get a list of messages 
    const getMessages = async () => {
        setIsLoading(true);
        const response = await fetch (`/api/contact-messages`);
        const data = await response.json();

        const {messages} = data;
        console.log(messages)
        setMessages(messages);
        setTimeout(() =>{
            setIsLoading(false) //once we have  our data 

        },3000) //delays the component from being rendered by 3 secs then sets the loading to false


        
    }

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

    const handleSubmit =  async (event) =>{ 

        let payload = {
          name:name,
          email: email,
          message: message
        }

        const response = await fetch (`/api/contact`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })

        const data = await response.json();

       setName  ("") // when form is submitted and page refreshes the inputs are cleared
       setEmail ("")
       setMessage ("")
       setShowSuccess(true)
       getMessages(); //whenever something is submitted it will show the loader and add it to the list of messages


      } 
  
    return(
        <div className="w-full py-5 ">
             <Header name = "Contact"/>

            <Content>
                <div>

                <form className='form mb-4 py-5 '>
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
className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3'>Submit</button>

{showSuccess === true ?
(<p className="text-black w-96 py-4">
    Your message was sent!
</p>)
:
null}  

   
</div>
<ListOfMessages  isLoading={isLoading} messages={messages}
 onDelete={getMessages}


/>  
 </Content>

 <Footer title= "Go back to home" href = "/"
 />
            
            
        

        </div>
    )
       
}