video = "";
status="";
objects=[];
function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.hide();
    video.size(480,380);
    canvas = createCanvas(480, 380);
    canvas.center();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    objects_name=document.getElementById("object_name").value;
}
function modelLoaded() {
    console.log("Model has been loaded");
    status = true;
}
function draw() {
    image(video, 0, 0, 480, 380);
}