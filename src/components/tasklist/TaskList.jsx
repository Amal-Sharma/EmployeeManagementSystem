import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
    console.log(data);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return<AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} />
            }
        })}

        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'> */}
            {/* <div className='flex justify-between items-center'> */}
                {/* <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3> */}
                {/* <h4 className='text-sm'>1 Dec 2024</h4> */}
            {/* </div> */}
            {/* <h2 className='mt-5 text-2xl font-semibold'>Make a New Project</h2> */}
            {/* <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas, maxime quae repellat dolore hic.</p> */}
        {/* </div> */}

        
    </div>
  )
}

export default TaskList