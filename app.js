//constante que recebe do corpo do documento o objeto com celetor .clock...
const clockContainer = document.querySelector('.clock-container')

//constante que recebe a formatação da unidade caso tenha apenas um caracter em string
// adicionando um 0 em sua frente se for o caso (serve para hora, minuto, segundos, dias etc)
const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

// constante que recebe uma função com paramentro invocando as consts de outra função (hours,minutes,secunds)
// as coloca em uma tamplete string formatadas pela cosnt formatTimeUnit dentro de uma tag span
const getClockHTML = (hours,minutes,seconds) => `
<span>${formatTimeUnit(hours)}</span> :
<span>${formatTimeUnit(minutes)}</span> :
<span>${formatTimeUnit(seconds)}</span>
`
// função busca a data exata do computador 
const updateClock = () => {
    //constante que guarda essa informação
    const present = new Date()
    //aqui separamos oque será utilizado no relógio

    //horas, minutos e segundos
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    //passando a tamblete string getClockHTML para dentro da div .clock-container
    clockContainer.innerHTML = getClockHTML(hours,minutes,seconds)
    
    
}

//setInterval chama uma função com 1 paramentro tempo onde exacutara essa função a cada 1000 milisegundos ou seja 
// a cada 1 segundo ele chama a função
setInterval(updateClock, 1000)
