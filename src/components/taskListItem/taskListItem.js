import React from 'react';
import Task from '../task';
import { formatDistanceToNow } from 'date-fns';
import './taskListItem.css';

const TaskListItem = (props) => {
    return (
        <li className={props.nameClass} key={props.id}>
          <Task state={props.stateTask} date = {formatDistanceToNow(new Date())} onDeleted= {props.onDeleted}/>
          { props.nameClass == 'editing' ? <input type='text' className='edit' value='Editing task' />: null}
         </li>
    )
}
export default TaskListItem;