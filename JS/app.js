const mainForm = document.querySelector('#main-form')
const formBtn = document.querySelector('#form-btn')

formBtn.addEventListener('click',e => {
    e.preventDefault()
})

const isLogin = user => {
    if(user){
        return true
    }
    else{
        return false
    }
}

const register = reg => {
    if(reg.info){
        return true
    }
    else{
        return false
    }
}

const getMeApi = api => {
    if(api == 'Ok'){
        return true
    }
    else{
        return false
    }
}