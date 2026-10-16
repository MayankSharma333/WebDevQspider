let form = document.querySelector('form')

form.addEventListener('submit', () => {
    event.defaultPrevented()
    let username=document.getElementsByTagName('input')[0].value.trim()
    let rname=document.getElementsByTagName('input')[1].value.trim()
    let email=document.getElementsByTagName('input')[2].value.trim()
    let password = document.getElementsByTagName('input')[3].value.trim()
    
    // getting the data from the localstorage
let allUser = JSON.parse(localStorage.getItem('user')) || []

// checking user is already signed or not
let existingUser = allUser.find((val) => {
    return val.username===username && val.password===password
})
    if (existingUser) {
        alert('Already Signed...Please Login')
        return
    }
    if (username === "" || name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all the details...")
        return;
    }

    if (password !== confirmPassword) {
        alert("Password does not match")
        return;
    }
    // creating a new user
    let newUser = {
        username,
        name,
        email,
        password,
        confirmPassword
    }

    allUser.push(newUser)
    localStorage.setItem("user", JSON.stringify(allUsers))
    alert('Registration Successful')
    window.location.href="./login.html"
})