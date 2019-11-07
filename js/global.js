$( document ).ready(function() {

    // gamburger menu show and hide
    $(".open-menu-button").click(function(){
      $(".gamburger-mega-menu").show();
    });
    $(".close-menu-button").click(function(){
      $(".gamburger-mega-menu").hide();
    });
            
    // gamburger menu collapse when screen narrow    
    bsContainerWidth = $("body").width()
    if (bsContainerWidth > 767)
        $(".mega-menu-callapse").addClass("show");
    else
        $(".mega-menu-callapse").removeClass("show");

    $(".setting-icon").click(function(){
        $(".setting-collapse").toggle();
    });

});

// Card toggler
$('.card-custom-toggler').click(function() {
    var elementId = $(this).data('target-id');
    $('#' + elementId).toggle();
});

// Custom range
let amount_range = $('#amount-range');
$('.amount-fill').css('width', parseInt(amount_range.width()) / 300000000 * parseInt(amount_range.val()) + 'px');

let duration_range = $('#duration-range');
$('.duration-fill').css('width', parseInt(duration_range.width()) / 36 * parseInt(duration_range.val()) + 'px');

$('input[type="range"]').on('input', function() {
    let slider = $(this);
    let fill = $('.' + $(this).data('fill') );
    let range_max = $(this).attr('max');
    let result_show = $('.' + $(this).data('result-show') );
    let num = $(this).val();
    let result = "";
    let gap_size = 3; // Desired distance between spaces

    while (num.length > 0) // Loop through string
    {
        result = result + " " + num.substring(0, gap_size); // Insert space character
        num = num.substring(gap_size);  // Trim String
    }

    result_show.val(result);

    // Change range fill width
    slider_length = parseInt( slider.val() );
    slider_width = parseInt( slider.width() );
    fill.css('width', slider_width / range_max * slider_length + 'px');
});

$('.formatted-number').on('input', function() {
    let num = $(this).val();
    let result = '';
    result = formatNumber(num);
    $(this).val(result);
});

function formatNumber(num) {
    let result = '';
    let gap_size = 3;

    while (num.length > 0) // Loop through string
    {
        result = result + " " + num.substring(0, gap_size); // Insert space character
        num = num.substring(gap_size);  // Trim String
    }

    return result;
}
