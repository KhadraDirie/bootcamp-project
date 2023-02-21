export default function Input({value,placeholder,onChange}){
    const handleChange = (event) =>{
        const value = event.target.value
        onChange(value)
    }
    return(
        <input 
        value={value}
        placeholder={placeholder}
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500' 
        onChange = {handleChange}
        /> 
    )
}

// The Input component allows a parent component to pass in a value, a placeholder, and a function to handle changes to the value. When the user types in the input field, the handleChange function is called with the new value, which is then passed to the onChange function provided by the parent component.