let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')

//añadir item 
input.addEventListener('keyup', ()=>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})
//añadir nuevo item a la lista
addBtn.addEventListener('click', () =>{
    if (input.value.trim() != 0){
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `
        <p>${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    }else{
        alert('Por favor ingrese su tarea')
    }

})

//eliminar item de la lista
tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove()
    }
})

//marcado de item de lista
tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-pen-to-square'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})