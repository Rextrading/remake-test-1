import {posts} from '../../assets.js'
import Post from "../post/Post"

const Posts =()=>{

  return (
    <div className="posts">
	  {posts.map((post,index)=>(
		<Post key={index} post={post}/>
	  ))}
    </div>
  )
}

export default Posts
