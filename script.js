$(document).ready(function () {
  // Hide all sections except the home section on initial page load
  $('main section:not(#home)').hide();

  // Handle navigation link clicks
  $('nav a').click(function (event) {
    event.preventDefault();

    // Get the target section ID from the href attribute
    const targetSection = $(this).attr('href');

    // Hide all sections
    $('main section').hide();

    // Show the target section
    $(targetSection).show();
  });
});
