function getRandomDog() {
    $.getJSON("https://dog.ceo/api/breeds/image/random", function (data) {
        console.log(data);
        $(".image-content").html("<img src='" + data.message + "'>");
    });
};

$('.getDogPic').on('click', function () {
    getRandomDog();
});

function getChosenDog() {
    let selectedDog = $('.dog-selector option:selected').val();
    let dogUrl = selectedDog.replace(/-/g, '/');
    $.getJSON(`https://dog.ceo/api/breed/${dogUrl}/images/random`, function (result) {
        $('.image-content').html(`<img src=${result.message}>`);
    });
}

function loadDogs() {
    $.getJSON("https://dog.ceo/api/breeds/list/all", function (result) {
        let breeds = result.message;
        let firstDog = Object.keys(breeds)[0];

        $.each(breeds, function (dog, breed) {
            if (breeds[dog].length >= 1) {
                for (let i = 0; i < breeds[dog].length; i++) {
                    $(".dog-selector").append(`<option value=${dog}-${breeds[dog[i]]}>${breeds[dog][i]} ${dog}</option>`);
                }
            } else if (breeds[dog].length < 1) {
                $(".dog-selector").append(`<option value=${dog}>${dog}</option>`);
            }
        });

        $.getJSON(`https://dog.ceo/api/breed/${firstDog}/images/random`, function (result) {
            $('.image-content').html(`<img src=${result.message}>`);
        });
    });
}
$('.dog-selector').change(function () {
    $('.dog-selector option:selected').each(function () {
        getChosenDog();
    });
});
$(document).ready(function () {
    loadDogs();
});