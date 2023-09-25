interface TaskControllerProps { 
    tasks: { 
        type: "UX Design" | "UI Design" | "QA" | "Developer"
    }
}

enum eColorType { 
    "UX Design" = "#36ACFF",
    "UI Design" = "#084DC6",
    "QA" = "#FD7C33",
    "Developer" = "#5BE18A"
}

function TaskController(props: TaskControllerProps) { 
    const colorType: string;
    const typeTask = props.tasks.type;
    
    return { 
        colorType: "wadw"
    }
};

export default TaskController;