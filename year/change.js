(function () {
    function resize() {
      var body = document.getElementsByTagName('body')[0];
      var html = document.getElementsByTagName('html')[0];
      var width = html.clientWidth;
      var height =  html.clientHeight;
      var max = width > height ? width : height;
      var min = width > height ? height : width;
      body.style.width = max + "px";
      body.style.height = min + "px";
    }
    resize();
    window.addEventListener("resize", resize)
  })();