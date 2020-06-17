var search=document.getElementById("search")
search.addEventListener("click",getDetails)
function getDetails(){
  
    var location=document.getElementById("location").value 
    var restaurant=document.getElementById("restaurant").value 
    var xhr=new XMLHttpRequest()
    var params=new URLSearchParams()
    params.set('entity_id',location)
    params.set('q',restaurant)
    params.set('entity_type',city)
   var url1="https://developers.zomato.com/api/v2.1/search?"
  
   let url = url1.toString()
   
    xhr.open("GET", url);
    xhr.setRequestHeader('user-key', '5ee36043d925e395214b6cce427c80a0')
    xhr.send()
    xhr.onload=function(){
        var data=JSON.parse(this.response)
     console.log(data)
    }
}