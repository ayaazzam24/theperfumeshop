




var perfumeType = prompt ('welcome to my shop ,what you want to shop ,si or one million ')

while( perfumeType !== 'si'&& perfumeType !=='one million'){
     perfumeType = prompt ('please enter the correct item')
}

var perfume = prompt ('how many perfume you want ?');
 alert ('welcome to my shop');
 var img ='';
 for(var i=0; i<perfume ;i ++){
     if(perfumeType == "si"){
         document.write('<h3>'+ 'si perfume'+ '</h3>');
         img='<img src="https://www.sephora.com/productimages/sku/s2161008-av-01-zoom.jpg?imwidth=300">'
         document.write(img);
     
        }else if(perfumeType== "one million"){
         document.write('<h3>' + 'one million perfume'+'</h3>');
         img='<img src="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/p/a/paco_rabanne_lady_million_edp_perfume_for_women_80ml_1_1.jpg">'
         document.write(img) 
     }
 }

 document.body.style.background='pink';


































