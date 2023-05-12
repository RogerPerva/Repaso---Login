const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const login = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');   /**Añadimos a la clase 'wrapper' otra clase llamada active */
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active'); /**Aqui le removemos la clase o atributo añadido 'active' */
});

login.addEventListener('click', ()=>{ /*Escuchamos por un click en login el cual almacena la clase btnLogin*/
    wrapper.classList.add('push');/** y agreagamos en wrapper la clase de push */
})

iconClose.addEventListener('click',() =>{
    wrapper.classList.remove('push');
})