
var perfumeTypes = prompt ('welcome to my shop , What kind of perfume do you want to shop ,Si or One Million ? ')
console.log(perfumeTypes)
function getType()
{
    var types = prompt('what is the type');
console.log(types)

var message= '';
console.log(message);
if(types == "Si"){ 
    message = 'Si perfume';

}else if(types == "One Million"){
    message = ' One Million perfume';
}
else {
    message = 'visit us again'
}
document.write('<h2>' + message + '</h2>');
}

function correct(){
while( perfumeTypes !== 'Si'&& perfumeTypes !=='One Million'){
     perfumeTypes = prompt ('please enter the correct item')
     console.log(perfumeTypes)
}

var perfume = prompt ('How many perfume do you want ?');

alert ('welcome to my shop');
 var img ='';
 for(var i=0; i<perfume ;i ++){
     if(perfumeTypes == "Si"){
         document.write('<h2>'+ 'Si perfume'+ '</h2>');
         img='<img src="https://www.sephora.com/productimages/sku/s2161008-av-01-zoom.jpg?imwidth=300">'
         document.write(img);
     
        }else if(perfumeTypes== "One Million"){
         document.write('<h2>' + 'One Million perfume'+'</h2>');
         img='<img src="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/p/a/paco_rabanne_lady_million_edp_perfume_for_women_80ml_1_1.jpg">'
         document.write(img) 
     }
    
}
}
    getType();
    correct();



 
 

 

 


































