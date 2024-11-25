const app = {};




// Bind the forms
app.bindForms = function(){
  document.querySelector("form").addEventListener("submit", function(e){

    // Stop it from submitting
    e.preventDefault();
    let formId = this.id;
    let path = this.action;
    let method = this.method.toUpperCase();

    let queries = {};
    
    let elements = this.elements;
    for(var i = 0; i < elements.length; i++){
      if(elements[i].type !== 'submit'){
        var valueOfElement = elements[i].type == 'checkbox' ? elements[i].checked : elements[i].value;
        queries[elements[i].name] = valueOfElement;
      }
    }

    console.log(queries);

    let requestUrl = path+'?';
    let counter = 0;
    for(let queryKey in queries){
      if(queries.hasOwnProperty(queryKey)){
         counter++;
         // If at least one query string parameter has already been added, preprend new ones with an ampersand
        if(counter > 1){
            requestUrl+='&';
       }
     // Add the key and value
    requestUrl+=queryKey+'='+queries[queryKey];
    }
}

   let xhr = new XMLHttpRequest();
   xhr.open('GET', requestUrl, true);
   //xhr.open('GET','http://127.0.0.1:8000/model/?Region=1&Year=2015',true)
   xhr.send();






  // When the request comes back, handle the response
 xhr.onreadystatechange = () => {
    if(xhr.readyState == XMLHttpRequest.DONE) {
      let statusCode = xhr.status;
      let responseReturned = JSON.parse(xhr.responseText);

      const para = document.createElement("p");
      const node = document.createTextNode(responseReturned.Result);
      para.appendChild(node);
      const element = document.getElementById("div1");
      element.appendChild(para);
      

      //console.log(statusCode,responseReturned)


      
     
}}

  });}    

    


// Init (bootstrapping)
app.init = function(){
  // Bind all form submissions
  app.bindForms();
};

// Call the init processes after the window loads
window.onload = function(){
  app.init();
};
