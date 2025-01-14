import React from 'react';
import './styles/TaskList.css';

const TaskList = ({ title, tasks, onUpdateStatus, onEditTask, onDeleteTask, onViewTask }) => {
  const calculateTimeLeft = (deadline) => {
    const now = new Date();
    const target = new Date(deadline);
    const diff = target - now;

    if (diff <= 0) return 'Deadline passed';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    if (days === 0 && hours === 0 && minutes === 0) {
      return 'Deadline passed';
    }

    return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes}m remaining`;
  };

  return (
    <div className="task-list">
      <h3>{title}</h3>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h4>{task.title}</h4>
          <p>{task.deadline && calculateTimeLeft(task.deadline)}</p>
          <div className="task-actions">
            <button onClick={() => onViewTask(task)} className='view'>View</button>
            <button onClick={() => onEditTask(task)} className='edit'>Edit</button>
            <button onClick={() => onUpdateStatus(task.id)} className='toggle-status'>Toggle Status</button>
            <button onClick={() => onDeleteTask(task.id)} className='delete'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
