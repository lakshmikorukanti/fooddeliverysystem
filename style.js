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
      display(name,location,phone,i)
  }
  
    }

}
function display(name,location,phone,i){
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
    renderDom(button,i)
}
function renderDom(button,i){
    button.addEventListener("click",turnNextPage)
    function turnNextPage(){
      
        window.localStorage.setItem("count", i);
       window.location.assign("./res.html")
    }

}
var cart=document.getElementById("cart")
var add=document.getElementById("add")
add.addEventListener("click",addAddress)
function addAddress(){
   var display_address=document.getElementById("display_address")
    var house_no=document.getElementById("house_no").value
    var mark=document.getElementById("mark").value
    var street=document.getElementById("street").value
    var city=document.getElementById("city").value
    var state=document.getElementById("state").value
    var displayAddress=document.createElement("h4")
    displayAddress.textContent=house_no+"\n"+mark+"\n"+street+"\n"+city+"\n"+state
    display_address.append(displayAddress)
}


var add=document.getElementById("cartitems")
add.addEventListener("click",addcartitem)
function addcartitem(){ 
    var sum=0
    var array=(window.localStorage.getItem("items"))  
    array=array.split(",")
    var quantity=window.localStorage.getItem("quantity")
    var quantity=quantity.split(",")
    var cost=window.localStorage.getItem("cost")
    var cost=cost.split(",")
    for(var i=0;i<array.length;i++)
    {
        var ul=document.createElement("ul")
        var item=document.createElement("li")
        item.textContent="name:"+array[i]
        var displayquantity=document.createElement("li")
        displayquantity.textContent="quantity:"+quantity[i]
        var displaycost=document.createElement("li")
        var totalcost=Number(quantity[i])*Number(cost[i])
        displaycost.textContent="cost:"+Number(quantity[i])*Number(cost[i])
        sum+=totalcost
        console.log(sum)
        ul.setAttribute("class","list-group")
        ul.setAttribute("class","displayul")
        ul.setAttribute("class","card")
        item.setAttribute("class","list-group-item")
        displayquantity.setAttribute("class","list-group-item")
      displaycost.setAttribute("class","list-group-item")
    
        ul.append(item,displayquantity,displaycost)
       
        cart.append(ul)

    }
    var totalbutton=document.createElement("button")
    totalbutton.textContent="total bill"
cart.append(totalbutton)
 display_total(totalbutton,sum)
  

}
function display_total(totalbutton,value){
totalbutton.addEventListener("click",getTotalBill)
function getTotalBill(){
    var h1=document.createElement("h1")
    h1.textContent=value
    cart.append(h1)
}
}