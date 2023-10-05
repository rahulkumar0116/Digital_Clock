const banner = document.getElementById('banner')
const clock = document.querySelector('#clock');

 const  newdate = setInterval( function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

},1000)
