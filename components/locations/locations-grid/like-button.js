export default function LikeButton({handleLike,likes}){
    return(
        <button
                onClick={handleLike}
                type="button"
                className="bg-gray-200 px-2 py-1 rounded text-black"
            >
                Like ({likes} likes)
            </button> 
    )
} 