//selcting popupbox,overlay,button
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("addpopup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancel=document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container,addbutton, bookname,bookauthor,description
 var container=document.querySelector(".container")
 var addbutton=document.getElementById("addbook")
 var bookName=document.getElementById("book-name-input")
 var bookauthor=document.getElementById("book-author-input")
 var description=document.getElementById("book-descriptioninput")

 addbutton.addEventListener("click",function(event){
     event.preventDefault()
     var div=document.createElement("div")
     div.setAttribute("class","subcontainer")
     div.innerHTML=`<h2>${bookName.value}</h2>
               <h5>${bookauthor.value}</h5>
               <p>${description.value}</p>
              <button onclick="deletebook(event)">Delete</button>`

     container.append(div)
     popupoverlay.style.display="none"
     popupbox.style.display="none"
     

 })
 
 function deletebook(event)
 {
    event.target.parentElement.remove()
 }