const dropzones = document.querySelectorAll(".dropzone")
const colunas = document.querySelectorAll('.column')

console.log(colunas);
console.log(dropzones);
colunas.forEach(coluna => {
    coluna.addEventListener('dragstart', dragStart)
    coluna.addEventListener('drag', drag);
    coluna.addEventListener('dragend', dragEnd)
})

function dragStart(){
    this.classList.add('is-dragging')
}
function drag(){
    
}
function dragEnd() {
    this.classList.remove('is-dragging')
}
dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragenter", dragenter);
    console.log(dropzone)
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})




function dragenter() {

}
function dragleave() {
    
}
function dragover() {
    this.classList.add('over')
  
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}
function drop() {

   this.classList.remove('over')
}