mp3Song1 = "";
mp3Song2 = "";

function preload()
{
    mp3Song1 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.position(520, 300);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function play()
{
    mp3Song1.play();
    mp3Song1.setVolume(1);
    mp3Song1.rate(2);
}