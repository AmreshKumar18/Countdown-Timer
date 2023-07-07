let days = document.getElementById("day")
let hrs = document.getElementById("hrs")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")

var dest = new Date ("july 8, 2024 00:00:00")

var x = setInterval(function(){
var now = new Date()
var diff = (dest - now)
var daycalc = Math.floor(diff/(1000*60*60*24))
var hrscalc = Math.floor(diff%(1000*60*60*24)/(1000*60*60))
var minscalc = Math.floor(diff%(1000*60*60)/(1000*60))
var seccalc = Math.floor(diff%(1000*60)/1000)

days.innerText = daycalc
hrs.innerText = hrscalc
mins.innerText = minscalc
sec.innerText = seccalc
},1000);