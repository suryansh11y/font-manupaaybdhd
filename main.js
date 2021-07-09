function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    video = createCanvas(300, 300);
    video.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('blue');
}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results)
    }
}