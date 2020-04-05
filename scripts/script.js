$(function () {
  //HEADINGS
  $("section > h2, aside > h2")
    .css("border", "1px solid black")
    .css("color", "#CC1C0D")
    .css("padding", "3px 0 3px 20px")
    .css("border-radius", "5px 0 5px 0")
    .css("background-color", "#DFE3E6");

  //NAVIGATION
  $("ul li a").addClass("navigation");
  $(".navigation")
    .css("border", "1px solid #929CA4")
    .css("color", "#CC1C0D")
    .css("padding", "3px 0 3px 20px")
    .css("background-color", "#DFE3E6");

  //MAIN CONTENT
  $("section p").removeClass("vprospect");
  $("section p").removeClass("vconvert");
  $("section p").removeClass("vretain");
  $("aside p:last-child").append("<br>Chevy Dealers Association");
  $("aside p:first-of-type").wrapInner("<q></q>");
});
