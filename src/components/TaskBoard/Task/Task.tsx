import styled from '@emotion/styled';
import TaskController from './TaskController';

interface TaskProps { 
    tasks: { 
        type: "UX Design" | "UI Design" | "QA" | "Developer"
    }
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