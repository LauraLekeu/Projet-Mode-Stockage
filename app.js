
let btn = document.querySelector('#mode');
let texteBtn = document.querySelector('#mode span');

if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'sombre'){
    modeSombre();
  }
}



function modeSombre() {
  document.body.classList.add('dark');
  texteBtn.innerText = "Thème clair";
  localStorage.setItem('theme', 'sombre');
}


btn.onclick = () => {
  
  if (document.body.classList.contains('dark')) {
    // Mode clair
    document.body.classList.remove('dark');
    texteBtn.innerText = "Thème sombre";
    localStorage.setItem('theme', 'clair');
  }
    
  else {
    // Mode sombre
    modeSombre();
  }
  
}