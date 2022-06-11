const trigger = $("#search-trigger");

// Add a click event listener to the trigger element
trigger.click(function () {
    const modal = $("#search-modal");
    // add active class to it
    modal.addClass("active");
});

const close = $("#close");

// Listen for Esc key press
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        const modal = $("#search-modal");
        // remove active class from it
        modal.removeClass("active");
    }
});

// Add a click event listener to the close element
close.click(function () {
    const modal = $("#search-modal");
    // remove active class from it
    modal.removeClass("active");
});
