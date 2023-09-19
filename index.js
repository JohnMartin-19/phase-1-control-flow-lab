function scuberGreetingForFeet(num){
  // Write your code here!
  if(num <= 400){
    console.log('This one is for me!');
  } else if (num > 400 <=2000){
    console.log('I will gladly take your 30 bucks!');
  } else{
    console.log('No can do!');
  }
};

scuberGreetingForFeet(200);


function ternaryCheckCity(city){
  // Write your code here!
  if(city= 'NYC'){
    console.log('Ok. Sounds good');
  } else {
    console.log('No.Go')
  }
};
ternaryCheckCity('nairobi');

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip = 'generous'){
    console.log('Thank you so much!');
  } else if (tip = 'not as generous'){
    console.log('Thank you!')
  } else {
    console.log('bye')
  }
};
switchOnCharmFromTip('fuck');
