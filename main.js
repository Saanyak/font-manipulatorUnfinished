difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.center();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initiolized And Loaded");
}

function draw() {
    background("#1167f2");
    fill("#84aff5");
    textSize(difference);
    text("Saanya",50,100);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx-rightWristx);
        console.log("Difference = "+difference);
        console.log("rightwrist_x = "+rightWristx+"leftwrist_x = "+leftWristx);
    }
}