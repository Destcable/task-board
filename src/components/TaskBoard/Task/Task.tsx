import styled from '@emotion/styled';
import TaskController from './TaskController';
import type { Task as TaskType } from "../../../types/Task";

interface TaskProps { 
    tasks: TaskType
}


const TaskWrapper = styled.div`
    width: 325px;
    background-color: #1F2124;
`;

const TagBlock = styled.div(props => ({
    color: props.color
}));

const Task = (props: TaskProps) => {
    const taskData = TaskController({
        tasks: props.tasks
    });

    return( 
        <TaskWrapper>
            <TagBlock
                color={taskData.colorType}
            >
                <span>{props.tasks.type}</span>
            </TagBlock>
        </TaskWrapper>
    )
};

export default Task;