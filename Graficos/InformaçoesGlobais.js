const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function vizualizarInformaçõesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round(dados.tempo_medio - horas) * 100
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo )*100).toFixed(2)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Vocễ sabia que o Mundo tem <span>${pessoasNoMundo} bilhões</span> de Pessoas e 
    que aproximadamente <span>${pessoasNoMundo} bilhões</span> estão conectadas em alguma rede social e 
    passam em média <span>${horas} horas</span> e <span>${minutos}</span> minutos conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> De pessoas estão conectadas em alguma rede social.`
    

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformaçõesGlobais()


  