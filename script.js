
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-150px";
}




  const scriptURL = "https://script.google.com/macros/s/AKfycbxXyVmGAezX2tXZTWmqsdrsRsNSEJ_sQ6xcbxthjI7405w1Ops_wutQL4t7iwQaGpDR/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Feedback Submitted"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })