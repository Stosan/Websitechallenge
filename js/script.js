let btn = document.querySelector('#btn_go');
let img = document.querySelector('#img_disp');

btn.addEventListener('click', () =>{
  let XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = () => {
    if(XHR.readyState == 4 && XHR.status == 200){
      let data = JSON.parse(XHR.responseText);
      img.setAttribute('src', data.message)
    }
  };
  XHR.open('get', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
})
