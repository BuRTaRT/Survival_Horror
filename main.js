 let span1 = $(".light1");

 function toggler() {
   span1.toggleClass("light-off");
 }
 (function loop() {
   let rand = Math.random() * 1500;
   setTimeout(function () {
     toggler();
     loop();
   }, rand)
 })()

 let span2 = $(".light2");

 function toggler2() {
   span2.toggleClass("light-off");
 }
 (function loop() {
   let rand = Math.random() * 5000;
   setTimeout(function () {
     toggler2();
     loop();
   }, rand)
 })()

 $(document).on('click', 'a[class^="nav-link"]', function (event) {
   event.preventDefault();
   $('html, body').animate({
     scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
 });

