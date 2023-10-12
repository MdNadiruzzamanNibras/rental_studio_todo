import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const additem = async(e) =>{
        e.preventDefault();
        const todo = e?.target?.todo?.value
        const todolist={
           
            todo: todo
        }
        fetch('http://localhost:5000/todos',{
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
  return (
     <div className='card w-96 bg-base-100 shadow-xl my-20 mx-auto' >
        <div className="card-body">
           <h1 className='text-center text-3xl font-bold'>Task List</h1>
            <form className='flex justify-center items-center'>
                <input type="text" name='todo' className="input input-bordered "  
          
         />
                <button className='btn btn-active ml-3 flex justify-center' onClick={additem}>Add Task</button>
            </form>
            
        </div>
       <ToastContainer/>
        </div>
  );
};

export default App;