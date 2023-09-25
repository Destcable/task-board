import styled from '@emotion/styled';
import TaskBoardHeader from '../components/TaskBoard/TaskBoardHeader';
import Task from '../components/TaskBoard/Task';

interface TaskBoardProps {
    percentage: number
}

//  основной блок

const BlockTaskBoard = styled.div`
    display: flex;
    background-color: #131415;
    height: 100vh;
`;

const BlockTask = styled.div`
    border: dashed #2C2E33;
    border-radius: 20px;
    padding: 10px
`
const ButtonAddTask = styled.button`
    display: flex;
    border: none;
    background-color: #1F2124;
    border-radius: 15px;
    width: 325px;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 7px;
    padding-bottom: 10px;
    justify-content: space-between;
`;

const TaskBoard = (props: TaskBoardProps) => {


    return (
        <>
            <TaskBoardHeader 
                percentage={props.percentage}
            />
            <BlockTaskBoard className='ps-3 pt-3 pe-3'>
                <BlockTask>
                    <ButtonAddTask>
                        <span className='text-white fs-5'>To-do</span>
                        <span className='text-primary fs-4'>+</span>
                    </ButtonAddTask>
                    <Task />
                </BlockTask>
            </BlockTaskBoard>
        </>

    )
};

export default TaskBoard;