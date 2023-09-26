import type { Task as TaskType } from "../../../types/Task";
import eColorType from "../../../UI.config";
interface TaskControllerProps { 
    tasks: TaskType
}

const TaskController = (props: TaskControllerProps) => { 
    const typeTask = props.tasks.type;

    const colorType = eColorType[typeTask]
    
    return ({ 
        colorType: colorType
    })
};

export default TaskController;