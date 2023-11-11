let myButton = document.querySelector('#liveToastBtn');
let myTask = document.querySelector('#task')
let ulDOM = document.querySelector('#list');
let toastSucces = document.querySelector('#liveToast1')
let toastError = document.querySelector('#liveToast2')



//  element eklemeyi saglayan fonksiyon 

function newElement() {

  let liDOM = document.createElement('li')
  if (myTask.value !== '') {
    liDOM.innerHTML = myTask.value
    ulDOM.appendChild(liDOM)

    liDOM.classList.add('newli')

    let closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;'; // "x" işareti
    liDOM.appendChild(closeBtn);
    $(toastSucces).toast(`show`)

    // elementi silmeyi saglayan  fonksiyon

    closeBtn.addEventListener('click', function () {
      ulDOM.removeChild(liDOM);
    });

    //tiklanildi
    liDOM.addEventListener('click', function () {
      liDOM.classList.toggle('checked')
      

    })
  } else {
    $(toastError).toast(`show`)

  }

}

myTask.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    newElement();
  }
});






