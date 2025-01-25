export class HelloWord extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background: green;
                    padding: 10px;
                    border-radius: 5px;
                    color: white;
                }
            </style>
            <div>Olá, Mundo! Eu sou um Web Component!</div>
        `
    }
}