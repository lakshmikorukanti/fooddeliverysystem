var search=document.getElementById("search")
search.addEventListener("click",getDetails)
function getDetails(){
  
    var location=document.getElementById("location").value 
    var restaurant=document.getElementById("restaurant").value 
   var choose_zone=document.getElementById("choose_zone").value
    var choose_sort=document.getElementById("choose_sort").value
    var choose_order=document.getElementById("choose_order").value
    var xhr=new XMLHttpRequest()
    var params=new URLSearchParams()
    params.set('entity_id',location)
    params.set('q',restaurant)
    params.set('entity_type',choose_zone)
    params.set('sort',choose_sort)
    params.set('order',choose_order)
  
   var url=new URL("https://developers.zomato.com/api/v2.1/search?")
  
   url.search=params.toString()
   
   
    xhr.open("GET", url);
    xhr.setRequestHeader('user-key', '5ee36043d925e395214b6cce427c80a0')
    xhr.send()
    xhr.onload=function(){
        var data=JSON.parse(this.response)
     console.log(data)
     console.log(data.restaurants)
     window.localStorage.setItem("data", this.response);
  var length=data.restaurants
  for(var i=0;i<length.length;i++)
  {
      var name=data.restaurants[i].restaurant.name
      var location=data.restaurants[i].restaurant.location.address
      var phone=data.restaurants[i].restaurant.phone_numbers
      //console.log(name)
      display(name,location,phone)
  }
  
    }

}
function display(name,location,phone){
    var profile=document.getElementById("profile")
    var res=document.createElement("div")
    var h4=document.createElement("h4")
   var locationres=document.createElement("h4")
   var button=document.createElement("button")
   var phoneNum=document.createElement("h4")
   button.textContent="get more details"
   locationres.textContent="📌"+location
    h4.textContent=name
  phoneNum.textContent="📞"+phone
    res.append(h4)
    res.append(locationres,phoneNum)
    res.append(button)
res.setAttribute("class","box")
 
    profile.appendChild(res)
    renderDom(button)
}
function renderDom(button){
    button.addEventListener("click",turnNextPage)
    function turnNextPage(){
        window.location.assign("./res.html")
    }

}