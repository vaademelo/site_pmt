$(document).on("click", ".js-hamburger-button", function(){
  var $level2Menu = $(this).parent().find(".level-2-menu");

  if ($level2Menu.css("display") === "none"){
    $(this).find(".js-menu-icon").removeClass("flaticon-menu").addClass("flaticon-cancel-2");

  } else {
    $(this).find(".js-menu-icon").removeClass("flaticon-cancel-2").addClass("flaticon-menu");
    $(".js-menu-category").find(".js-menu-sub-category").hide();
  }

  $level2Menu.toggle();
});

$(document).on("click", ".js-menu-category", function(){
  $level3Menu = $(this).find(".js-menu-sub-category");
  $(".js-menu-category").not(this).find(".js-menu-sub-category").hide();

  $level3Menu.toggle();
});
