const idSlip = document.getElementById('advice-id');

const adviceSlip = document.getElementById('advice-description');

document.getElementById('advice-update').addEventListener('click', () => {
    
    gerarConselho().then(data => {
        const slipId = data.slip.id;
        idSlip.innerText = `advice #${slipId}`;        
        const slipAdvice = data.slip.advice;
        adviceSlip.innerText = `"${slipAdvice}"`
    })
})

async function gerarConselho(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

gerarConselho().then(data => {
    const slipId = data.slip.id
    idSlip.innerText = `advice #${slipId}`;
    const slipAdvice = data.slip.advice
    adviceSlip.innerText = `"${slipAdvice}"`;
});