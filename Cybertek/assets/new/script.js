$(document).ready(function () {
  $(".step__choice").click(function () {
    let choiceId = $(this).data("id");
    $(".step__choice").removeClass("active");
    $(this).addClass("active");
    $(".logo").hide();
    $(".logo").removeAttr("style");
    $(".logo[data-id=" + choiceId + "]").show();
  });

  $(".step__input input").on("input", function () {
    let text = $(this).val();
    $(".computer-text").html(text);
  });

  $("#typo").change(function () {
    let $computerText = $(".computer-text");
    $computerText.removeClass();
    $computerText.addClass("computer-text");
    $computerText.addClass($(this).val());
  });

  $(".logo").draggable({
    containment: "parent",
  });

  $(".computer-text").draggable({
    containment: "parent",
    drag: function () {
      $(".computer-text").addClass("dragged");
    },
  });

  document
    .querySelector("#submitConfigurator")
    .addEventListener("click", function () {
      html2canvas(document.querySelector("#configuratorCanvas"), {
        onrendered: function (canvas) {
          // document.body.appendChild(canvas);
          return Canvas2Image.saveAsJPEG(canvas);
        },
      });
    });
});
