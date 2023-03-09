function initialize(){
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
 
    var setHours = window.document.getElementById('hours')
    setHours.innerText = `Agora são ${hour} : ${minutes}`
    var photo = window.document.getElementById('photo')

    if(hour >= 0 && hour < 12){
        photo.src = './images/fotomanha.png'
        window.document.body.style.backgroundColor = '#b0e0e6'

    }else if(hour >= 12 && hour < 18){
        photo.src = './images/fototarde.png'
        window.document.body.style.backgroundColor = '#ffd492'
    }else{
        photo.src = './images/fotonoite.png'
        window.document.body.style.backgroundColor = '#162938'
    }
}
