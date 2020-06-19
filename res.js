var data=JSON.parse(window.localStorage.getItem("data"))
window.addEventListener("load", function () {
    
    var count=JSON.parse(window.localStorage.getItem("count"))
   
  console.log(count)
            var name = data.restaurants[count].restaurant.name;
           // console.log(name)
            var cuisines=JSON.parse(window.localStorage.getItem("data")).restaurants[count].restaurant.cuisines;
            var cost=JSON.parse(window.localStorage.getItem("data")).restaurants[count].restaurant.average_cost_for_two;
            var timings=JSON.parse(window.localStorage.getItem("data")).restaurants[count].restaurant.timings;
            var reviewcount=JSON.parse(window.localStorage.getItem("data")).restaurants[count].restaurant.all_reviews_count;
            var home = document.getElementById("home");
            var namedispaly=document.createElement("h4")
            namedispaly.textContent="Name of the restaurant="+name
            var cuisinesdispaly=document.createElement("h4")
            cuisinesdispaly.textContent="Type of cuisines="+cuisines
            var costdisplay=document.createElement("h4")
            costdisplay.textContent="Average cost per two="+cost
            var timingsdisplay=document.createElement("h4")
            timingsdisplay.textContent="Timings of restaurant open="+timings
            var reviewcountdisplay=document.createElement("h4")
            reviewcountdisplay.textContent="total review count="+reviewcount

           home.append(namedispaly,cuisinesdispaly,costdisplay,timingsdisplay,reviewcountdisplay)
  });
  var arr=[]
 var quantity=[]
 var cost=[]
  var biryani=document.getElementById("biryani")
  biryani.addEventListener("click",addbiryani)
function addbiryani(){

 var quantity_biryani=document.getElementById("quantity_biryani").value
 arr.push("biryani")
  quantity.push(quantity_biryani)
 cost.push(250) 
 
}
var pulao=document.getElementById("pulao")
pulao.addEventListener("click",addpulao)
function addpulao(){

var quantity_pulao =document.getElementById("quantity_pulao").value
arr.push("pulao")
quantity.push(quantity_pulao)
cost.push(300)
}
var chicken65=document.getElementById("chicken65")
chicken65.addEventListener("click",addchicken65)
function addchicken65(){

var quantity_chicken65=document.getElementById("quantity_chicken65").value
arr.push("chicken65")
quantity.push(quantity_chicken65)
cost.push(220)

}
var butternaan=document.getElementById("butternaan")
butternaan.addEventListener("click",addbutternaan)
function addbutternaan(){

var quantity_butternaan=document.getElementById("quantity_butternaan").value
arr.push("butternaan")
quantity.push(quantity_butternaan)
cost.push(40)

}
var chickencurry=document.getElementById("chickencurry")
chickencurry.addEventListener("click",addchickencurry)
function addchickencurry(){
 
var quantity_chickencurry=document.getElementById("quantity_chickencurry").value
arr.push("chickencurry")
quantity.push(quantity_chickencurry)
cost.push(300)

}
var muttoncurry=document.getElementById("muttoncurry")
muttoncurry.addEventListener("click",addmuttoncurry)
function addmuttoncurry(){
 
var quantity_muttoncurry=document.getElementById("quantity_muttoncurry").value
arr.push("muttoncurry")
quantity.push(quantity_muttoncurry)
cost.push(320)


}
var noodles=document.getElementById("noodles")
noodles.addEventListener("click",addnoodles)
function addnoodles(){
 
var quantity_noodles=document.getElementById("quantity_noodles").value
arr.push("noodles")
quantity.push(quantity_noodles)
cost.push(220)


}
var rainbow=document.getElementById("rainbow")
rainbow.addEventListener("click",addrainbow)
function addrainbow(){

var quantity_rainbowmilkshake=document.getElementById("quantity_rainbowmilkshake").value
arr.push("rainbowmilkshake")
quantity.push(quantity_rainbowmilkshake)
cost.push(250)


}
var icecream=document.getElementById("icecream")
icecream.addEventListener("click",addicecream)
function addicecream(){
 
var quantity_icecream=document.getElementById("quantity_icecream").value
arr.push("icecream")
quantity.push(quantity_icecream)
cost.push(150)
}
var addcart=document.getElementById("addcart")
addcart.addEventListener("click",add_to_cart)
function add_to_cart(){
  window.localStorage.setItem("items", arr);
  window.localStorage.setItem("quantity",quantity)
  window.localStorage.setItem("cost",cost)
  console.log(arr,quantity,cost)

  window.location.assign("./zomato.html")
}



