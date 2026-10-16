let form = document.querySelector('form')

form.addEventListener('sumbit', () => {
    event.preventDefault()

    let email = document.getElementsByTagName('input')[0].value.trim()
    let password = document.getElementsByTagName('input')[1].valueOf.trim()
    
    let allUsers = JSON.parse(localStorage.getItem('users')) || []
    
    let existingUser = allUsers.find((val) => {
        return  val.email===email && val.password ===password
    })
    if (existingUser) {
        alert('log In Successful...')
        window.location.href = "./home.html"
        return
    }else{
        alert("Please signUp")
        window.location.href = "./signup.html"
        return
    }
})