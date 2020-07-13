const tasks = document.querySelectorAll('#task')
const dropzones = document.querySelectorAll('#dropzone')

function dragstart(){
   this.classList.add('is-dragging')
}

function dragend(){
    this.classList.remove('is-dragging')
}

function dragover(){
   const taskBeingDragged = document.querySelector('.is-dragging')
   this.appendChild(taskBeingDragged)
}

tasks.forEach( task => {
    task.addEventListener('dragstart', dragstart)
    task.addEventListener('dragend', dragend)
    task.addEventListener('touchstart', dragstart)
    task.addEventListener('touchend', dragend)
} )

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('touchover', dragover)

} )
