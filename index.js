let closeList = document.querySelector('header .contain .right .close')
let openList = document.querySelector('header .contain .list')
let rightList = document.querySelector('header .contain .right')
let lists = document.querySelectorAll('header .right .tools .tool .link')

closeList.addEventListener('click', function() {
    rightList.classList.toggle('toggle')
})

openList.addEventListener('click', function() {
    rightList.classList.toggle('toggle')
})

lists.forEach((list) => {
    list.addEventListener('click', function() {
        console.log(list.nextElementSibling)
        list.nextElementSibling.classList.toggle('list')
    })
})