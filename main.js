loadedvideo = "";
modelstatus = "";
inputtext = "";

function preload() {
    loadedvideo = createVideo("junglevideo.mp4");
    loadedvideo.hide();

}

function setup() {
    canvas = createCanvas(550, 350);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function startapp() {
    model = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    inputtext = document.getElementById("animalinput").value;
}

function modelloaded() {
    console.log("Model Loaded");
    modelstatus = true;
}

function draw() {
    image(webcam, 0, 0, 550, 350);
}