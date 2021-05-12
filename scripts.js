const Modal = {
    open() {
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    }
},
    close() {
     document
        .querySelector('modal-averlay')
         .classList
         .remove('active')
    }
    const transactions =[
        {
            id: 1,
            description: 'Luz'
            amount: -50000,
            date: '23/01/2021,'
        }
        {
            id: 2,
            description: 'Website'
            amount: 500000,
            date: '23/01/2021,'
        }
        {
            id: 3,
            description: 'Internet'
            amount: -20000,
            date: '23/01/2021,'
        }
    ]

    const Transactions = {
        incomes() {

        },
        expenses() {

        },
        total() {

        },

    }

    const Dom = {
        innerHTMLTransaction() {
            const html = `
            <tr>
                <td class="description">luz</td>
                <td class="expense">- R$ 500,00</td>
                <td class="date">23/01/2021</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover transação"
                </td>
            </tr>
            `
        }
    }