var jsonfull;
var selectedImage;
var score = 0;
var x = document.getElementById("myAudio");
var timeImageIsShown = 2000;
var dark = false;
const btn = document.querySelector("#btn-toggle");
const theme = document.querySelector("#theme-link");

$.getJSON("images.json", function (json) {
    jsonfull = json;
});

window.onload = function () {
    $("#anime-btn").on("click", function () {
        if (selectedImage[0].type === "anime") {
            changeScore(true);
            $('#anime-btn').attr('class', "btn btn-success");
            x = document.getElementById("grunt-audio");
            playAudio();
        } else {
            $('#anime-btn').attr('class', "btn btn-danger");
            chooseAudio(score);
            playAudio();
            changeScore(false);
        }
        showFullPic();
    });

    $("#hentai-btn").on("click", function () {
        if (selectedImage[0].type === "hentai") {
            changeScore(true);
            $('#hentai-btn').attr('class', "btn btn-success");
            chooseAudio(score);
            playAudio();
        } else {
            $('#hentai-btn').attr('class', "btn btn-danger");
            x = document.getElementById("grunt-audio");
            playAudio();
            changeScore(false);
        }
        showFullPic();
    });

    $("#btn-toggle").on("click", function () {
        lightSwitch();
    });
    showRandomImage();
};

function lightSwitch() {
    if (!dark) {
        theme.href = "style-dark.css";
        $('.aoh-btn').attr('class', "btn btn-light aoh-btn");
        $('.nav-btn').attr('class', "btn btn-dark nav-btn");
        dark = true;
    } else {
        theme.href = "style.css";
        $('.aoh-btn').attr('class', "btn btn-dark aoh-btn");
        $('.nav-btn').attr('class', "btn btn-light nav-btn");
        dark = false;
    }
}

function changeScore(success) {
    if (success) {
        score++;
    } else {
        score = 0;
    }
    $('#score-label').text("Score: " + score);

    setTimeout(() => {
        pauseAudio();
    }, timeImageIsShown);
};

function showFullPic(success) {
    $('#main-image').attr('src', (selectedImage[0].imageLink));

    setTimeout(() => {
        if (!dark) {
            $('#hentai-btn').attr('class', "btn btn-dark");
            $('#anime-btn').attr('class', "btn btn-dark");
        } else {
            $('#hentai-btn').attr('class', "btn btn-light");
            $('#anime-btn').attr('class', "btn btn-light");
        }
        showRandomImage();

    }, timeImageIsShown);
};

function showRandomImage() {
    var value = Math.ceil(Math.random() * jsonfull.length);

    selectedImage = jsonfull.splice(value, 1);

    $('#main-image').attr('src', (selectedImage[0].imageLinkCropped));
};

/////////////////////AUDIO/////////////////////////

function chooseAudio(score) {
    switch (score) {
        case 0:
            break
        case 1:
            x = document.getElementById("myAudio2")
            break;
        case 2:
            x = document.getElementById("myAudio3")
            break;
        case 3:
            x = document.getElementById("myAudio4")
            break;
        case 4:
            x = document.getElementById("myAudio5")
            break;
        case 5:
            x = document.getElementById("myAudio6")
            break;
        case 6:
            x = document.getElementById("myAudio7")
            break;
        case 7:
            x = document.getElementById("myAudio8")
            break;
        default:
            x = document.getElementById("myAudio8")
    }
};

function playAudio() {
    x.play();
};

function pauseAudio() {
    x.pause();
};