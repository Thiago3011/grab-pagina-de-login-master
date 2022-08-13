const btnEntrar = document.getElementById('btn-entrar')
const email = document.getElementById('email')
const password = document.getElementById('password')

import validacao from '../lib/validacao.js'
import Validacao from '../lib/validacao.js'

btnEntrar.addEventListener('click', (e) => {
    if (email) {
        Validacao.checaErro(email, btnEntrar, e)
    } 
    
    if (password) {
        validacao.checaErro(password, btnEntrar, e)
    }

})