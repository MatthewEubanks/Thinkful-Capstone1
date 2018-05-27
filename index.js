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
    openHidden();
});
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function openHidden() {
    $('.chooseDog').on('click', () => {
        $('.getDogPic').hide();
        $('.about').hide();
        $('.breeds').show();
    });
    $('.randomDog').on('click', () => {
        $('.breeds').hide();
        $('.about').hide();
        $('.getDogPic').show();
    });
    $('.aboutPage').on('click', () => {
        $('.getDogPic').hide();
        $('.breeds').hide();
        $('.about').show();
    })
};
