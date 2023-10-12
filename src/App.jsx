


const App = () => {
  return (
     <div className='card w-96 bg-base-100 shadow-xl my-20 mx-auto' >
        <div className="card-body">
           <h1 className='text-center text-3xl font-bold'>Task List</h1>
            <form className='flex justify-center items-center'>
                <input type="text" name='todo' className="input input-bordered "  
          
         />
                <button className='btn btn-active my-3 flex justify-center'>Add Task</button>
            </form>
            
        </div>
       
        </div>
  );
};

export default App;