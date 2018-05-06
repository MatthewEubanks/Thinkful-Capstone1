function getDog() {
    $.getJSON("https://dog.ceo/api/breeds/image/random", function (data) {
        
        $(".image-content").html("<img src='" + data.message + "'>");
    });
};

$('.getDogPic').on('click', function () {
    getDog();
});