// userInput Part

const mutateSlider = document.getElementById("mutateAmount")
const sensorCounter = document.getElementById("sensorCounter")
const angleTaker = document.getElementById("angleCounter")
const trafficCounter = document.getElementById("trafficCounter")

var sensorCount = parseInt(sensorCounter.value)
var mutateAmount = parseFloat(mutateSlider.value)
var spread = parseInt(angleTaker.value)
var trafficCount = parseInt(trafficCounter.value)
console.log(trafficCounter.value);
sensorCounter.oninput = function(){
    sensorCount = parseInt(sensorCounter.value)
    document.getElementById("sensorCountDisplayer").innerHTML = sensorCount
}

mutateSlider.oninput = function() {
    mutateAmount = parseFloat(mutateSlider.value)
    document.getElementById("mutateAmountDisplayer").innerHTML = mutateAmount
}

angleTaker.oninput = function() {
    spread = parseFloat(angleTaker.value)
    document.getElementById("angleCountDisplayer").innerHTML = spread
}

trafficCounter.oninput =  function() {
    trafficCount = parseInt(trafficCounter.value)
    document.getElementById("trafficDisplayer").innerHTML = trafficCount
}



<<<<<<< Updated upstream






=======
function updatePage(){
    document.getElementById("trafficDisplayer").innerHTML = trafficCount
    document.getElementById("sensorCountDisplayer").innerHTML = sensorCount
    document.getElementById("mutateAmountDisplayer").innerHTML = mutateAmount
    document.getElementById("angleCountDisplayer").innerHTML = spread
    
    chart.options.plugins.title.text = 'mFactor:' + mutateAmount + '_sensorCount:' + sensorCount + '_spread:' + spread + '_traffic:' + trafficCount
    initiateAll()
    chart.update()
}
>>>>>>> Stashed changes
