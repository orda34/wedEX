var Links = {
  setColor:function(color){
    var list = document.querySelectorAll('a');
    // var i=0;
    // while(i<list.length){
    //     list[i].style.color=color;
    //     i++;
    // }
    $('a').css('color',color);
  }
}

var Body = {
  setColor:function(color){
    // var target=document.querySelector('body');
    // target.style.color=color;
    $('body').css('color',color);
  },
  setBackgruondColor:function(color){
    // var target=document.querySelector('body');
    // target.style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){

  var target=document.querySelector('body');
  if (self.value==='night'){
  Body.setBackgruondColor('black');
  Body.setColor('white');
  self.value='day';

  Links.setColor('powderblue');

  } else {
  Body.setBackgruondColor('white');
  Body.setColor('black');
  self.value='night';

  Links.setColor('blue');
}

}
