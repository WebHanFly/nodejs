console.log($)

$.get('./login',{ name:"Donald", town:"Ducktown" },function(res){
    console.log(res);
})

$.post('./reg',{ name:"Donald", town:"Ducktown" },function(res){
    console.log(res);
})