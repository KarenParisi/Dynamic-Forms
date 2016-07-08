$(document).ready(function(){
  

  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';

    data.forEach(function(field){
      console.log(data)
      if (field.type === 'text') {
         htmlStr += `
          <div class="text">
          <label for="${field.id}"></label>
          <input type="text" placeholder= "${field.label}" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
          </div>
        `;
         
      }
      if (field.type === 'email') {
        htmlStr += `
          <div class="text">
         <label for="${field.id}"></label> 
          <input type="text" placeholder= "${field.label}" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
          </div>
        `;
      }
      if (field.type === 'select') {
        htmlStr += `
         <div class="text">
          <label for="${field.id}"></label>
          <select id="${field.id}">`
          field.options.forEach(function(option){
          htmlStr+= `<option value=${option.value}>${option.label}</option>`
          })
        htmlStr += `</select>   
        </div>       
        `;
      }

        if (field.type === 'textarea') {
        htmlStr += `
          <div class="textarea">
          <label for="${field.id}"></label>
          <textarea type="text" placeholder="${field.label}" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
          </div>
        `;
      }
      if (field.type === 'tel') {
        htmlStr += `
          <div class="text">
          <label for="${field.id}"></label>
          <input type="text" placeholder = "${field.label}" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
          </div>
        `;
      }

    })
    $("#content").html(htmlStr);
  })
});

