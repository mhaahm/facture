// app entrypoint
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap")

window.addEventListener('load',(event) => {
  console.log('load event')
  const edit_btn = document.querySelector('.js-edit');
  console.log(edit_btn)
  if(edit_btn) {
    edit_btn.addEventListener('click',(ev) => {
      ev.preventDefault();
      const raison_id = ev.currentTarget.getAttribute('data-raison-id')
      const url = window.location.origin+"/raison_social/"+raison_id;
      window.location.href = url;
    })
  }

})


