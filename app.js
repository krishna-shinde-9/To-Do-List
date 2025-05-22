

const takeInput = document.querySelector('#taskInput')
const taskList = document.querySelector("#taskList")
let dueDate = document.querySelector('#dueDate')
let select = document.querySelectorAll('#options')


function addInput(ti, dDate, per) {
    //div
    let div = document.createElement('div')
    div.id = 'holder'
    div.className = "holder"
    taskList.appendChild(div)
    //list and buttons deudata
    let li = document.createElement('li')
    let deuelement = document.createElement('p')
    let btn = document.createElement('button')
    let btn2 = document.createElement('button')
    let spen = document.createElement('span')
    let checkbox = document.createElement('input')
    spen.className = 's'
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'check'
    div.appendChild(checkbox)


    li.id = "task"
    li.className = "task"
    deuelement.className = 'date'

    let addText = document.createTextNode(ti)
    let adddeu = document.createTextNode(dDate)
    let addpri = document.createTextNode(per)


    li.appendChild(addText)
    deuelement.append(adddeu)
    spen.appendChild(addpri)

    btn.className = "delete"
    btn2.className = 'update'
    btn2.textContent = 'Update'
    btn.innerText = "Delete"
    div.appendChild(li)
    div.appendChild(deuelement)
    div.appendChild(spen)
    div.appendChild(btn2)
    div.appendChild(btn)



    btn.addEventListener('click', (e) => {

        div.remove()

    })

    //updata Funtion
    btn2.addEventListener('click', (e) => {
        let updatedText = prompt('enter value')

        li.textContent = updatedText


    })



    let check = document.querySelector('.check')

    check.addEventListener('click', (e) => {
        if (check.checked === true) {
            li.style.textDecoration = "line-through"
        }
        else {

            li.style.textDecoration = "none"
        }

    })


}
let d
select.forEach((data) => {
    data.addEventListener('click', (e) => {

        d = data.textContent


    })

})

const addBtn = document.querySelector("#addBtn")
addBtn.addEventListener('click', (e) => {
    if (takeInput.value == '') {
        alert(`Enter The Task It Empty ??`)
        return
    }
    if (d === undefined) {
        d = '🟢 Low'

    }
  
    addInput(takeInput.value, `( ${dueDate.value} ) `, d)
})

