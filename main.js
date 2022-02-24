function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_iNLjcEas/model.json',modelReady);
}

function modelReady()
{
    Classifier.classify(gotResults);
}