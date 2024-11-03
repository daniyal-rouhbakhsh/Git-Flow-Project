const mainForm = document.querySelector('#main-form')
const formBtn = document.querySelector('#form-btn')

formBtn.addEventListener('click',e => {
    e.preventDefault()
})

const isLogin = user => {
    if(user){
        return {userId: 1,userName: 'Daniyal',userJob: 'Back-End Developer'}
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

const likeFeature = like => {
    if(like){
        return true
    }
    else{
        return false
    }
}

const disLikeFeature = disLike => {
    if(disLike){
        return false
    }
    else{
        return true
    }
}

const userSearch = user => {
    if(user){
        return true
    }
    else{
        return false
    }
}

const addProduct = pro => {
    if(pro){
        return "New Product Added"
    }
    else{
        return false
    }
}