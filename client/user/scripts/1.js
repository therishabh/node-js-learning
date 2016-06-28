//Ipsum, don't pay too much mind too this.
(function($) {

  var ipsum = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit molestie urna, ullamcorper ultricies eros laoreet nec. Phasellus tristique magna eu egestas pretium. Nunc finibus mollis fringilla. In eu venenatis augue. Integer iaculis justo eu orci efficitur, vel fermentum enim gravida. Proin ligula felis, mattis sed dolor eu, hendrerit ullamcorper felis. Praesent at urna arcu.", "Vestibulum sodales metus quis mauris aliquet ullamcorper. Quisque imperdiet cursus risus ac tempor. Curabitur arcu elit, euismod nec egestas ac, mollis a lorem. Mauris ac est laoreet, faucibus mauris at, pretium erat. Maecenas vehicula lorem ut magna placerat malesuada. Pellentesque finibus pellentesque lacus, a ultrices augue eleifend vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.", "In est velit, aliquet vitae ultricies sit amet, commodo finibus libero. Nunc in massa sem. Morbi in eros egestas, scelerisque magna nec, imperdiet justo. Donec quis rhoncus risus, quis pellentesque est. Nulla egestas condimentum metus vel semper. In nunc augue, porttitor a ipsum vel, commodo vulputate purus. Integer sit amet fermentum metus. Nulla facilisi. Vivamus ornare pulvinar erat sit amet congue. Duis vel iaculis tortor. Aenean dui nunc, vulputate a nisl in, varius fringilla elit. Integer dapibus mi at consectetur rhoncus. Donec id enim elementum, suscipit nibh vel, mattis urna. Aenean luctus mattis felis, id mollis quam rutrum vitae. Aenean nec arcu mattis nulla laoreet vulputate. Aenean ultrices dignissim pellentesque."];

  $("[data-ipsum]").each(function() {
    $(this).html(ipsum[$(this).data("ipsum") * 1]);
  });

})(jQuery);