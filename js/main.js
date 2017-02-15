/*
* 广告轮播
* */

$(function () {

    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;

        $("#main_ad .carousel-inner > .item").each(function (i,item) {

            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data("img-xs") : $item.data("img-lg");
            $item.css("backgroundImage","url('" + imgSrc + "')");

            if(isSmallScreen){
                $item.html("<img src='" + imgSrc + "'>");
            }else{
                $item.empty();
            }

        });
    }
    $(window).on("resize",resize).trigger("resize");

     $('[data-toggle="tooltip"]').tooltip();

  /**
   * 控制标签页的标签容器宽度
   */
  var $ulContainer = $('.nav-tabs');
  // 获取所有子元素的宽度和
  var width = 30; // 因为原本ul上有padding-left
  // 遍历子元素
  $ulContainer.children().each(function(index, element) {
    // console.log(element.clientWidth);
    // console.log($(element).width());
    width += element.clientWidth;
  });
  // 此时width等于所有LI的宽度总和
  // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
  if (width > $(window).width()) {

    $ulContainer
      .css('width', width)
      .parent().css('overflow-x', 'scroll');
  }



     var $newTitle = $('.news-title');
    $('#news .nav-pills a').on('click', function() {
    // 获取当前点击元素
    var $this = $(this);
    // 获取对应的title值
    var title = $this.data('title');
    // 将title设置到相应的位置
    $newTitle.text(title);
  });

});