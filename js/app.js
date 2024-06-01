function showSidebar(){
    const show = document.querySelector('.sidebar');
    show.style.display = 'flex';
}
function headSidebar(){
    const show = document.querySelector('.sidebar');
    show.style.display = 'none';
}
// this part is projects 
let switchers = document.querySelectorAll('.switcher li');
// let cards = Array.from(document.querySelectorAll('.project .card1'));
let cards = document.querySelectorAll('.project .card1');

switchers.forEach((li) =>{
    li.addEventListener('click', mangementElement);
    li.addEventListener('click', () =>{
        switchers.forEach((li) =>{
            li.classList.remove('active');
        })
        li.classList.add('active');
    });
})

function mangementElement(){
    cards.forEach((card) =>{
        card.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.category).forEach((el) => {
        el.style.display = 'grid';
    })
}