import { IColumn } from "./types"

let dataMock:IColumn[] =[
    {
        title: 'Backlog',
        issues: [
        ]   
    },
    {
        title: 'Ready',
        issues: [
        ]   
    },
    {
        title: 'In Progress',
        issues: [
        ]   
    },
    {
        title: 'Finished',
        issues: [
        ]   
    }
]

let id = {
    id: 0
}

if (localStorage.length === 0) {
    localStorage.setItem('data', JSON.stringify(dataMock));
    localStorage.setItem('id', JSON.stringify(id));
} else {
    dataMock = JSON.parse(localStorage.getItem("data")!);
    id = JSON.parse(localStorage.getItem("id")!);
}

console.log(localStorage)


function updateStorage() {
    localStorage.setItem('data', JSON.stringify(dataMock));
    localStorage.setItem('id', JSON.stringify(id));
}

export {id, updateStorage}
export default dataMock