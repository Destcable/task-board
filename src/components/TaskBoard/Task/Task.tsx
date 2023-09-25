import styled from '@emotion/styled';

interface TaskProps { 
    tasks: { 
        type: "UX Design" | "UI Design" | "QA" | "Developer"
    }
}


const TaskWrapper = styled.div`
    width: 325px;
    background-color: #1F2124;
`;

const TagBlock = styled.div`
    color
`;

const Task = (props: TaskProps) => {

    return( 
        <TaskWrapper>
            <TagBlock>
                <span>{props.tasks.type}</span>
            </TagBlock>
        </TaskWrapper>
    )
};

export default Task;