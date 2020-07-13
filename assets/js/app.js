const tasks = document.querySelectorAll('#task')
const dropzones = document.querySelectorAll('#dropzone')

tasks.forEach( task => {
    task.addEventListener('dragstart', dragstart)
    task.addEventListener('drag', drag)
    task.addEventListener('dragend', dragend)
} )

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
} )


function dragstart(){
   this.classList.add('is-dragging')
}

function drag(){
   
}

function dragend(){
    this.classList.remove('is-dragging')
}

function dragenter(){
   
}

function dragover(){
   const taskBeingDragged = document.querySelector('.is-dragging')
   this.appendChild(taskBeingDragged)
}

function dragleave(){
   
}

function drop(event){
   
}