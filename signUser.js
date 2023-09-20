const registerForm=document.getElementById('registerForm')
const registerDataTab=[]
console.log(registerForm);
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cPassword = document.getElementById('cPassword').value;

    if(username =="" || email =="" || password =="" || cPassword =="" ){
        document.getElementById('error').innerHTML="Veuillez renseigner tous les champs"
        document.getElementById('error').style.color='red'
        document.getElementById('error').style.fontSize='18px'
        document.getElementById('error').style.fontWeight='500'
    }else if(password !=cPassword){
        document.getElementById('error').innerHTML="Excusez ! Les mots de passe ne sont pas conformes"
        document.getElementById('error').style.color='red'
        document.getElementById('error').style.fontSize='18px'
        document.getElementById('error').style.fontWeight='500'

    }else{
        const registerDataObject = {
            'username':username,
            'email':email,
            'password':password
        }
        registerDataTab.push(registerDataObject);
        console.log(registerDataTab);
         localStorage.setItem('registerDataTab', JSON.stringify(registerDataTab))
             document.getElementById('error').innerHTML="Informations about user are added !"
             document.getElementById('error').style.color='green'
             document.getElementById('error').style.fontSize='18px'
             document.getElementById('error').style.fontWeight='500'
             registerForm.reset()
             window.location.replace('loginPageUser.html')
    }
    


})   

const menu_hambergeur = document.querySelector('.menu-hambergeur')
menu_hambergeur.addEventListener('click', (e)=>{
    e.preventDefault()
    if(!menu_hambergeur.classList.contains('active')){
        menu_hambergeur.classList.add('active')
    }else{
        menu_hambergeur.classList.remove('active')
    }
})