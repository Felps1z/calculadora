function createCount() {
    let clickEqualButton = false;
    return{
        display: document.querySelector('.display'),
        button: document.querySelector('.btn-num'),
        btnSymbols: document.querySelector('td:nth-of-type(4) button'),

        start(){
            this.btnToDisplay()
        },

        btnToDisplay(){
            document.addEventListener('click', event => {
                if (event.target.classList.contains('btn-num') & clickEqualButton == false) {
                    this.display.value += event.target.innerText;
                } else if (event.target.classList.contains('btn-num') & clickEqualButton == true){
                    this.display.value = '';
                    this.display.value = event.target.innerText;
                    clickEqualButton = false;
                } 

                if (event.target.classList.contains('btn-eq')) {
                    this.display.value = this.count();
                }         
                if (event.target.classList.contains('btn-clear')) {
                    this.display.value = '';
                }
                if (event.target.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1)
                }
            })
        },
        count(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
            } catch (error){
                alert('Conta Inválida');
                return
            }
            
            clickEqualButton = true;
            return conta;
        }

    }
}

const calculator = createCount();
calculator.start();