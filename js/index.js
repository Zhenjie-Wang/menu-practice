window.onload = function() {
  var span = document.getElementsByTagName("span");

  for (var i = 0; i < span.length; i++) {
    //获取所有的class为menuSpan的元素
    var menuSpan = document.querySelectorAll(".menuSpan");

    //定义一个变量，来保存当前打开的菜单
    var openDiv = menuSpan[0].parentNode;
    
    span[i].onclick = function() {
      var parentDiv = this.parentNode;
      //切换菜单的显示状态
      toggleMenu(parentDiv);

      //判断openDiv和parentDiv是否相同
      if (openDiv != parentDiv && !hasClass(openDiv, "collapsed")) {
        //切换菜单的显示状态
        toggleMenu(openDiv);
      }

      //修改openDiv为当前打开的菜单
      openDiv = parentDiv;
    };
  }
};

/*
 * 用来切换菜单折叠和显示状态
 */
function toggleMenu(obj) {
  //在切换类之前，获取元素的高度
  var begin = obj.offsetHeight;

  //切换parentDiv的显示
  toggleClass(obj, "collapsed");

  //在切换类之后获取一个高度
  var end = obj.offsetHeight;

  //动画效果就是将高度从begin向end过渡
  //将元素的高度重置为begin
  obj.style.height = begin + "px";

  //执行动画，从bengin向end过渡
  move(obj, "height", end, 10, function() {
    //动画执行完毕，内联样式已经没有存在的意义了，将其删除
    obj.style.height = "";
  });
}
