// Improve the #nav-footer-access-content behavior by scrolling to
// the bottom when users open this section
(function (win, doc) {
    var el = doc.getElementById('nav-footer-access-switch');
    if (!win.addEventListener || !el) { return; }

    function scrollTo(scrollDuration) {
        var scrollInterval = setInterval(function () {
            // stop animation when window is scrolled to bottom
            if ((win.innerHeight + win.scrollY) >= doc.body.offsetHeight) {
                clearInterval(scrollInterval);
                // move scroll 20px each time
            } else {
                win.scrollBy(0, 20);
            }
        }, 15);
    }

    // User interaction
    el.addEventListener('change', function (ev) {
        if (!this.checked) {
            setTimeout(function () {
                scrollTo(400);
            }, 200);
        }
    });
}(window, document));

// Improve the #nav-header-menu behavior by closing when users click outside checkbox.
// Deprecated in 0.2.0
(function (doc) {
    var input = doc.getElementById('nav-header-user-switch');
    // Only works when a user menu exists (for logged users)
    if (!input || !window.addEventListener) return;
    // Listen for every click on tag "html"
    // The support for IE8+ was dropped because of lack of support of :checked pseudo-selector
    doc.documentElement.addEventListener('click', function (ev) {
        // Avoid to close if I click on the trigger. In that case, it will use CSS
        if (input.checked && ev.target !== input && ev.target !== input.previousElementSibling) {
            input.checked = false;
        }
    });
}(document));
