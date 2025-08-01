"use client"
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    console.log(mainTask)
    settitle("")
    setdesc("")
    console.log("Task added successfully")

  }

const deleteHandler = (i) => {
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
  
}
let renderTask = <h2>No Task Available</h2>

if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
      return(
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>  
    )
  })
}
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-4' 
      placeholder='Enter title here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }}>
      </input>
      

      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-4' 
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }} 
          
      
      ></input>

      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      
    </form>

    <hr></hr>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page