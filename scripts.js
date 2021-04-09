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
        } else {
            $('#anime-btn').attr('class', "btn btn-danger");
            changeScore(false);
        }
        showFullPic();
    });

    $("#hentai-btn").on("click", function () {
        if (selectedImage[0].type === "hentai") {
            changeScore(true);
            $('#hentai-btn').attr('class', "btn btn-success");
        } else {
            $('#hentai-btn').attr('class', "btn btn-danger");
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
        $('#aoh-btn').attr('class', "btn btn-dark");
        $('.nav-btn').attr('class', "btn btn-light");
        dark = true;
    } else {
        theme.href = "style.css";
        $('#aoh-btn').attr('class', "btn btn-light");
        $('.nav-btn').attr('class', "btn btn-dark");
        dark = false;
    }
}

function changeScore(success) {
    if (success) {
        score++;
        chooseAudio(score);
        playAudio();
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
        if(!dark) {
            $('#aoh-btn').attr('class', "btn btn-dark");
        } else {
            $('#aoh-btn').attr('class', "btn btn-light");
        }
        showRandomImage();

    }, timeImageIsShown);
    //sleep for x
    //change color of both buttons
};

function showRandomImage() {
    var value = Math.ceil(Math.random() * jsonfull.length);

    selectedImage = jsonfull.splice(value, 1);

    // console.log("Value " + value);
    // console.log("Object: " + selectedImage[0].imageLink);

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