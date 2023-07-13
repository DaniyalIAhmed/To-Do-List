
const container = document.querySelector('.container');
const input1 = document.getElementById('in1');
const input2 = document.getElementById('in2');
const form = document.querySelector('form');
// console.log(container);
const tasks = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

const showTask = ()=>{
    tasks.forEach((value, index)=>{
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        const heading = document.createElement('p');
        heading.classList.add('heading');
        const des = document.createElement('p');
        des.classList.add('des');
        heading.innerText = value.title;
        des.innerText = value.description;
        const delBtn = document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.innerText = '-';
        delBtn.addEventListener('click', ()=>{
            removeTask();
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            showTask();
        })
        textDiv.append(heading);
        textDiv.append(des);
        taskDiv.append(textDiv);
        taskDiv.append(delBtn);
        container.append(taskDiv);
    })
}
showTask();
const removeTask = ()=>{
    tasks.forEach(()=>{
        const deiv = document.querySelector('.task');
        deiv.remove();
    })
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    removeTask();
    tasks.push({
        title: input1.value,
        description: input2.value
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTask();
})