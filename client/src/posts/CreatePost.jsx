import React, {  useState } from 'react'
import axios from 'axios'


const CreatePost = () => {
  const [topic,setTopic] = useState("")
  const [desc,setDesc] = useState("")
  const [mistakes,setMistakes] = useState("")
  const [summary,setSummary] = useState("")


  const submitHandler = async () =>{
    try {
      const response = await axios.post(`http://localhost:4000/create`,{
        summary,topic,desc,mistakes
      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <React.Fragment>   
      <input type="text" placeholder='Topic' value={topic} onChange={(e)=>setTopic(e.target.value)}/>
      <input type="text" placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}  />
      <input type="text" placeholder='Mistakes' value={mistakes} onChange={(e)=>setMistakes(e.target.value)}  /> 
      <input type="text" placeholder='Solution/Summary' value={summary} onChange={(e)=>setSummary(e.target.value)}  />
      <button onClick={submitHandler}>Submit</button>
    </React.Fragment>
  )
}

export default CreatePost