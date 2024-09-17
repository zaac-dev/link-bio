function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        //Se tiver lightmode, adicionar a imagem light
        img.setAttribute('src', './images/avatar-light.png')
    } else {
        //Se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './images/avatar.png')
    }

}
