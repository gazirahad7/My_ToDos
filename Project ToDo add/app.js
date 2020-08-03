const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search');

const genarateTemplete = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>   
        </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    //trim using after & befor space apply
    const todo = addForm.add.value.trim();

    //console.log(todo);
    //genarateTemplete(todo);
    if (todo.length) {
        genarateTemplete(todo);
        addForm.reset();
    }
});


//delete element

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


const filterTode = trem => {
    //console.log(list.children);
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(trem))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(trem))
        .forEach((todo) => todo.classList.remove('filtered'));
    //console.log(trem);
};

//keyup event

search.addEventListener('keyup', () => {
    const trem = search.search_box.value.trim().toLowerCase();
    filterTode(trem);
});