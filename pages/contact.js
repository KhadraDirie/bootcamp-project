
import Header from "../components/shared/header"
import Content from "../components/shared/content"
import Footer from "../components/shared/footer"

export default function Contact(){

    const handleSubmit = (onClick) =>{
        alert("button clicked")
      
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
        placeholder='Name'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        tabIndex='1' />
        
        
        <label className='block text-white font-medium mb-2 py-1' for='email'></label>
        <input
        type ="text"
        name='email'
        placeholder='Email'
        className='bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        tabIndex='2' />

<label className='block text-white font-medium mb-2 py-1' for='message'></label>
        <input
        type ="text"
        name='message'
        placeholder='Message...'
        className='bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        tabIndex='2' />


    </form>
    </div>
  
<div className='mb-4 py-4' type='submit'>
<button onClick={handleSubmit} className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
</div>
 </Content>


            
            
            <Footer className="text-white" title= "Home" href="/" />

        </div>
    )
       
}