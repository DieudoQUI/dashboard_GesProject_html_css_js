const dataReceive = JSON.parse(localStorage.getItem('registerDataTab'))  ||[];
/* console.log(dataReceive); */
  const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const usernameLogin = document.getElementById('usernameLogin').value
    const passwordLogin = document.getElementById('passwordLogin').value
    
    const user = dataReceive.find(item => item.username==usernameLogin && item.password==passwordLogin)
    console.log(user);
    if (!user){
        document.getElementById('error').innerHTML='Les informations que vous avez renseignées ne correspondent à un compte'
    }else{
        document.getElementById('error').innerHTML='Les informations sont correctes'
        document.getElementById('error').style.color='green'
        /* windows.style.webkitAnimationPlayState = "running"; */
        window.location.replace('index.html')
    }
    
})  
