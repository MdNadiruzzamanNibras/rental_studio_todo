import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    const [items, setitems] = useState([])
   const [enterkey, setEnterkey] = useState('');
  const additem = async(e) =>{
        e.preventDefault();
      const todo = e?.target?.todo?.value
      console.log(todo);
        const todolist={
           
            todo: todo
        }
        fetch('https://spotless-jade-seal.cyclic.app/todos',{
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(todolist)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Great add your task item')
            }
            else{
                toast.error('Something is Wrong')
                
            }

        })
  }

    useEffect(()=>{
        fetch('https://spotless-jade-seal.cyclic.app/todos',{
            method:'GET'
          })
          .then(res =>  res.json())
          .then(data=>setitems(data))
    }, [items])
    const deleteTodo =id=>{
        const processed = window.confirm('Are you sure task')
        if(processed){
            const url= `https://spotless-jade-seal.cyclic.app/tododel/${id}`
            fetch(url,{
                method:'DELETE',
               
               
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
              toast(data);
             const remaining = items.filter(item => item._id !== id);
             setitems(remaining);
            })
        }
       
     }  
  return (
     <div className='card w-96 bg-base-100 shadow-xl my-20 mx-auto' >
        <div className="card-body">
           <h1 className='text-center text-3xl font-bold'>Task List</h1>
            <form className='flex justify-center items-center' onSubmit={additem}>
                <input type="text" name='todo' className="input input-bordered "  
          value={enterkey}
          onChange={e => setEnterkey(e.target.value)}
         />
                <button className='btn btn-active ml-3 flex justify-center' >Add Task</button>
            </form>
            <div className='Task-list'>
                {items && items?.map(item=><div key={item._id} className='flex justify-between align-middle text-lg font-semibold my-1'>
                 <input type="checkbox" name="" id=""  className='mr-1'/>
                    <p className='item-content'>{item.todo}</p>
                    {/* <button  className='btn-sm rounded-full bg-green-600 px-5 text-white' >Edit</button> */}
                    <button  onClick={() => deleteTodo(item._id)} className='bg-red-600 mx-2 rounded-full px-4 btn-sm bodder text-white'>Delete</button>
                </div>)}
               
            </div>
        </div>
       <ToastContainer/>
        </div>
  );
};

export default App;