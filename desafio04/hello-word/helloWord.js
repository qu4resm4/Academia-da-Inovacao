class HelloWord extends HTMLElement{
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
            <div>Hello Word</div>
        `
    }
}

customElements.define('hello-word', HelloWord)