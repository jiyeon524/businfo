/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const myForm = document.querySelector('#businfo');
myForm.addEventListener('start-button', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const url = 'https://rzgz7n5oq5.execute-api.ap-northeast-2.amazonaws.com/dev';

  const file = {
    station_id: 5,
    bus_num: 360
  };

  var formData = new FormData();
  formData.append("upload_file" , file);
  
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.open("GET", url, true);     
  
  xmlHttp.setRequestHeader('Content-Type', 'application/json');
  
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200 ) {
      console.log(xmlHttp.responseText);
    }
  };
  
  xmlHttp.send(formData); 
  console.log(xmlHttp.responseText); 
}
