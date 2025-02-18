'use strict'

async function pesquisarFotos(){
    const url = `https://picsum.photos/v2/list`
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}

function criarImagem (link) {
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link.download_url

    galeria.appendChild(novaImg)
}

async function preencherFotos(){
    const fotos = await pesquisarFotos()
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')

    fotos.forEach(criarImagem)

    console.log(fotos)
}

preencherFotos()