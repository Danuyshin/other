var calc=document.querySelector('.calc'),
clear=document.querySelector('.clear'),
amount=document.querySelector('.text'),
type=document.querySelector('.type'),
time=document.querySelector('.time'),
card=document.querySelector('.card'),
out=document.querySelector('.out'),
discount=0,
timea=0,
price=1,
disc=0,
money=document.querySelector('.card');

clear.onclick=function(){
amount.value='';
type.value='none';
time.value='none';
money.value='none';
out.value=' ';
}
time.onchange=function(){
    if(time.value=="morning"){
timea=800;
    }
    if(time.value=="day"){
        timea=1500;
    }
    if(time.value=="evening"){
        timea=1800;
    }
    if(time.value=="night"){
        timea=2000;
        
    }
}
type.onchange=function(){
    if(type.value=="kid"){
        discount=0.5;
    }
    if(type.value=="adult"){
        discount=1;
    }
    if(type.value=="student"){
        discount=0.7;
    }
}
card.onchange=function(){
    if(card.value=="card"){
        disc=1.03;
    }
    if(card.value=="nal"){
        disc=1;
    }
}
//цена=кол*время)*тип билета)*скидка количества)*скидка по типу оплаты
calc.onclick=function(){
    if(amount.value==""||amount.value<1||amount.value%1!=0){
        alert('Введите количество билетов')
    }
else{
    if(type.value=="none"){
        alert('Выберите тип билета')
    }
    else{
        if(time.value=="none"){
            alert('Выберите время спектакля')
        }
        else{
            if(card.value=="none"){
                alert('Выберите тип оплаты');
            }
            else{
                var skid=1;
                if(amount.value>10){
                    skid=0.85;
                }
                price=(((amount.value*timea)*discount)*skid)*disc;
                out.value=Math.round(price);
            }
        }
    }
}
    
}