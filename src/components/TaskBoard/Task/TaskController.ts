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

    const colorType = adjustHexToRGB(eColorType[typeTask]);

    return ({ 
        colorType: colorType
    })
};

function adjustHexToRGB(color: string) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
  
    return ({r,g,b});
  }

export default TaskController;