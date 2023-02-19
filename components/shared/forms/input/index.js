

 export default function Input(){
    return(
        <input 
        type="text"
        name='name'
        value={name}
        placeholder='Name'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500' 
        onChange = {handleChangeName}
        />
    )

}