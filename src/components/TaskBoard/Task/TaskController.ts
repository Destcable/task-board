import type { Task as TaskType } from "../../../types/Task";

interface TaskControllerProps { 
    tasks: TaskType
}

enum eColorType { 
    "UX Design" = "#36ACFF",
    "UI Design" = "#084DC6",
    "QA" = "#FD7C33",
    "Developer" = "#5BE18A"
}

const TaskController = (props: TaskControllerProps) => { 
    const typeTask = props.tasks.type;

    const colorType = eColorType[typeTask]
    
    return ({ 
        colorType: colorType
    })
};

export default TaskController;