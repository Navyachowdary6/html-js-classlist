let doc=document.querySelector('h1')
doc.classList.add('red')

let remove=document.querySelector('.remove')
remove.classList.remove('remove')
let toggle=document.querySelector('.toggle')
if(toggle.classList.contains('red')){
    toggle.classList.remove('red')
}
else{
    toggle.classList.add('red')
}