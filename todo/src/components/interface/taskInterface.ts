

export interface TaskProps{
    id: number,
    text: string,
    completed: boolean;
    deleteTask: (id:number)=> void;
    taskCompleted: (id:number)=> void;
}