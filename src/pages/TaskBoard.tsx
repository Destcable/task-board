import styled from '@emotion/styled';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

interface TaskBoardProps {
    percentage: number
}

const HeaderTasker = styled.div`
    background-color: #1F2027;
`;

const BreadcrumbWrapper = styled.div`
    color: #868998;
`

const ButtonActive = styled.button`
    font-size: 18px;
    border: none;
    background-color: rgba(0,0,0,0);
    color: #5C70F7;
    border-bottom: solid;
`;

const ButtonNoActive = styled.button`
    font-size: 20px;
    border: none;
    background-color: rgba(0,0,0,0);
    color: #868998;
`;


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
    width: 300px;
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
            <HeaderTasker className='ps-3 pe-3 pt-3'>
                <Stack direction="horizontal" gap={3}>
                    <div className="">
                        <div>
                            <BreadcrumbWrapper>
                                <span>My workspace / Project</span>
                            </BreadcrumbWrapper>
                            <div className='display-6 text-white'>
                                Shopavvy
                            </div>
                            <div className='text-secondary'>
                                Due Date: Sep 7, 2023
                            </div>
                        </div>

                        <div className='d-flex flex-nowrap mt-3'>
                            <ButtonActive>Task</ButtonActive>
                            <ButtonNoActive>Timeline</ButtonNoActive>
                            <ButtonNoActive>File</ButtonNoActive>
                            <ButtonNoActive>Calendar</ButtonNoActive>
                        </div>
                    </div>
                    <div className="ms-auto d-flex">
                        <div className='d-flex align-items-center'>
                            <ProgressBar now={60} style={{ backgroundColor: "#282A2D", height: "6px", width: "300px" }} />
                            <span className='ms-2 text-secondary'>{props.percentage + "% completed"}</span>
                        </div>
                        <div className='ms-5'>
                            <Button variant="primary">Create</Button>
                        </div>
                    </div>
                </Stack>
            </HeaderTasker>

            <BlockTaskBoard className='ps-3 pt-3 pe-3'>
                <BlockTask>
                    <ButtonAddTask>
                        <span className='text-white fs-5'>To-do</span>
                        <span className='text-primary fs-5'>+</span>
                    </ButtonAddTask>
                </BlockTask>
            </BlockTaskBoard>
        </>

    )
};

export default TaskBoard;