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

const TagBlock = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
`;

const Task = (props: TaskProps) => {
    const taskData = TaskController({
        tasks: props.tasks
    });

    const typeColor = taskData.colorType;

    return( 
        <TaskWrapper className='d-flex mt-4 rounded'>
            <TagBlock
                className='d-flex justify-content-center '
                style={{ 
                    color: `rgb(${typeColor.r}, ${typeColor.g}, ${typeColor.b}`,
                    backgroundColor: `rgba(${typeColor.r}, ${typeColor.g}, ${typeColor.b}, 0.2)`
                }}
            >
                <span>{props.tasks.type}</span>
            </TagBlock>
        </TaskWrapper>
    )
};

export default Task;