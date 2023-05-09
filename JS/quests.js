
let questInput //quest content
let errorInfo //Error
let addBtn // add button- adds new element to the list
let ulList //questes list
let newQuest //new Quest

let popUp // popup
let popUpInfo // info when user didnt added text
let questEdit // editing quests
let popUpInput // input in popup field
let popUpAddBtn // confirm changes
let popUpCloseBtn // cancel changes and close


const main = () => {
    prepareDOMelements()
    prepareDOMevents()
}

//getting elements form HTML
const prepareDOMelements = () => {
    questInput = document.querySelector('.quest-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.questslist ul')

    popUp = document.querySelector('.popup')
    popUpInfo = document.querySelector('.popup-info')
    popUpInput = document.querySelector('.popup-input')
    popUpAddBtn = document.querySelector('.accept')
    popUpCloseBtn = document.querySelector('.cancel')
}


const prepareDOMevents = () => {
    addBtn.addEventListener('click', addNewQuest)
    ulList.addEventListener('click', checkClick)
    popUpCloseBtn.addEventListener('click', closePopUp)
    popUpAddBtn.addEventListener('click', changeQuest)
    questInput.addEventListener('keyup', enterkeyCheck )
}

const addNewQuest = () => {
    if (questInput.value !== '') {
        newQuest = document.createElement('li')
        newQuest.textContent = questInput.value
        ulList.append(newQuest)
        questInput.value = ''
        errorInfo.textContent = ''

        createNewBar()

    } else {
        errorInfo.textContent = "You did't add new quest."
    }
}


//CREATE NEW BAR FOR NEW QUEST

const createNewBar = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newQuest.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'Change'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}


const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editQuest(e)
    } else if (e.target.matches('.delete')) {
        deleteQuest(e)
    }
}

const editQuest = (event) => {
    questEdit = event.target.closest('li')
    popUpInput.value = questEdit.firstChild.textContent
    popUp.style.display = 'flex'
    popUp.style.visibility = 'visible'
}

const closePopUp = () => {
    popUp.style.display = 'none'
    popUpInfo.textContent = ''
}


const changeQuest = () => {

    if (popUpInput.value !== '') {
        questEdit.firstChild.textContent = popUpInput.value
        popUp.style.display = 'none'

    } else {
        popUpInfo.textContent = 'But there is nothing here...'
    }
}

const deleteQuest = (event) => {
    event.target.closest('li').remove()
    const allQuests = ulList.querySelectorAll('li')

    if (allQuests.length === 0) {
        errorInfo.textContent = " No new quests."
    }

}


const enterkeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewQuest()
    }

}

document.addEventListener('DOMContentLoaded', main)

