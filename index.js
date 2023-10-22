//default tab


//test
var messagejs = 'hi'



function openCat(evt, category) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}


function reference(type) {
    //Getting retrieval date
    let d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    let month = monthNames[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    let retrieved = month+" " +day+", "+year+", ";



  if (type=='wo'){
    //Finding all html elements
    let organisation = document.querySelector('#woorganisation');
    let date = document.querySelector('#wodate');
    let title = document.querySelector('#wotitle');
    let url = document.querySelector('#wourl');
    let response = document.querySelector('#woresponse');

    message = organisation.value+". (" + date.value+ "). "+title.value + ". Retrieved "+ retrieved+"from "+url.value;
    response.innerHTML = message;



  }
  if (type=='wa'){
    //Finding all html elements
    let authorl = document.querySelector('#waauthorl');
    let authorf = document.querySelector('#waauthorf');
    let date = document.querySelector('#wadate');
    let title = document.querySelector('#watitle');
    let url = document.querySelector('#waurl');
    let response = document.querySelector('#waresponse');

    message = authorl.value+", "+authorf.value+". (" + date.value+ "). "+title.value + ". Retrieved "+ retrieved+"from "+url.value;
    response.innerHTML = message;
  }

  if (type=='vi'){
    //Finding all html elements
    let authorl = document.querySelector('#viauthorl');
    let authorf = document.querySelector('#viauthorf');
    let date = document.querySelector('#vidate');
    let title = document.querySelector('#vititle');
    let url = document.querySelector('#viurl');
    let publisher = document.querySelector('#vipublisher');
    let response = document.querySelector('#viresponse');

    message = authorl.value+", "+authorf.value+". (" + date.value+ "). "+title.value + " [Video]. "+ publisher.value +". Retrieved "+ retrieved+"from "+url.value;
    response.innerHTML = message;
  }

  if (type=='bo'){
    //Finding all html elements
    let authorl = document.querySelector('#boauthorl');
    let authorf = document.querySelector('#boauthorf');
    let date = document.querySelector('#bodate');
    let title = document.querySelector('#botitle');
    let publisher = document.querySelector('#bopublisher');
    let response = document.querySelector('#boresponse');

    message = authorl.value+", "+authorf.value+". (" + date.value+ "). "+title.value + ". "+ publisher.value+".";
    response.innerHTML = message;
  }

  if (type=='im'){
    //Finding all html elements
    let authorl = document.querySelector('#imauthorl');
    let authorf = document.querySelector('#imauthorf');
    let date = document.querySelector('#imdate');
    let title = document.querySelector('#imtitle');
    let url = document.querySelector('#imurl');
    let type = document.querySelector('#imtype');
    let response = document.querySelector('#imresponse');

    message = authorl.value+", "+authorf.value+". (" + date.value+ "). "+title.value + " ["+type.value+"]. Retrieved "+ retrieved+"from "+url.value;
    response.innerHTML = message;
  }

    



}

   




function copy(){
   // Selecting the text to copy
   

   // Copying the text
   navigator.clipboard.writeText(message)
     .then(function() {
       alert("Copied the text");
     })
     .catch(function(error) {
       alert('Failed to copy text: ', error);
     });

}