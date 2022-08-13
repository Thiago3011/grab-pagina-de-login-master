class Error {
    checaErro(input, btnEntrar, e) {

        e.preventDefault()

        if (input.value === '') {
            this.adcionarMsgErro(input, btnEntrar)
        } else {
            if (input.id === 'email') {
                this.validaEmail(input, btnEntrar)
            } else {
                this.validaSenha(input, btnEntrar)
            }
        }
    }

    validaEmail(email, btnEntrar) {

        const regex = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

        let emailValidator = regex.exec(email.value)

        if (emailValidator !== null) {
            alert('E-mail válido')
        } else {
            this.adcionarMsgErro(email, btnEntrar)
        }
    }

    validaSenha(password, btnEntrar) {
        if (password != '') {
            alert('Senha preenchida')
        } else {
            this.adcionarMsgErro(password, btnEntrar)
        }
    }

    adcionarMsgErro(input, btnEntrar) {
        const inputContainer = input.parentNode

        btnEntrar.setAttribute("disabled", true)
        const p = document.createElement('p')
        p.classList.add('erro-msg')

        if (input.id === 'email') {
            p.innerHTML = 'Por favor, insira um e-mail válido!'
        } else {
            p.innerHTML = 'Por favor, insira uma senha válida!'
        }

        inputContainer.appendChild(p)
        inputContainer.style.border = 'red 1.8px solid'
        inputContainer.firstElementChild.style.color = 'red'

        setTimeout(() => {
            p.style.opacity = 0
            inputContainer.style.border = 'white 1.8px solid'
            inputContainer.firstElementChild.style.color = 'white'
            btnEntrar.removeAttribute("disabled", true)
        }, 2000);
    }


}


export default new Error