$(document).ready(function () {
  // Contact form popup
  $("#contact-us-btn").on("click", function () {
    $("#contact-form-popup").modal("show");
  });

  // // Contact form submission
  // $('#contact-form').on('submit', function(e) {
  //     e.preventDefault();
  //     var formData = $(this).serialize();
  //     $.ajax({
  //         url: 'https://getform.io/f/adrygnza',
  //         method: 'POST',
  //         data: formData,
  //         dataType: 'json',
  //         success: function(response) {
  //             alert('Form submitted successfully!');
  //             $('#contact-form-popup').modal('hide');
  //         },
  //         error: function(err) {
  //             alert('An error occurred. Please try again.');
  //         }
  //     });
  // });

  $("#ajaxForm").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: action,
      crossDomain: true,
      data: new FormData(this),
      dataType: "json",
      processData: false,
      contentType: false,
      headers: {
        Accept: "application/json",
      },
    })
      .done(function () {
        alert("The form was submitted successfully.");
      })
      .fail(function () {
        alert("An error occurred! Please try again later.");
      });
  });

  // Services slider
  var currentSlide = 0;
  var slides = $(".slide");
  var slideCount = slides.length;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
    updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }

  function updateDots() {
    $(".slider-dots").empty();
    for (var i = 0; i < slideCount; i++) {
      var dot = $("<span>").addClass("dot");
      if (i === currentSlide) {
        dot.addClass("active");
      }
      $(".slider-dots").append(dot);
    }
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000);

  // "WHY WE ARE BEST" image switching
  $(".content-item").on("click", function () {
    var imageSrc = $(this).data("image");
    $("#proj-img").attr("src", imageSrc);
    $(".content-item").removeClass("active");
    $(this).addClass("active");
  });
});
