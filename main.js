const NO_OF_ITERATIONS = 600
const DELAY = 500
const NO_OF_AGENT = 100

const networkCanvas = document.getElementById("networkCanvas")
const carCanvas = document.getElementById("carCanvas")
const chartCanvas = document.getElementById("scoreChart")
networkCanvas.width = 400;
chartCanvas.width = 400;
carCanvas.width = window.innerWidth - networkCanvas.width-chartCanvas.width-20;
<<<<<<< Updated upstream
=======
bestBrainCanvas.width = chartCanvas.width;

>>>>>>> Stashed changes
let carCtx = carCanvas.getContext('2d')
let networkCtx = networkCanvas.getContext('2d')

let laneCount = 6
<<<<<<< Updated upstream
const carCount = 25
let generation = 1
=======
const carCount = NO_OF_AGENT
let generation = 1
let startingLine = 0
let score = 0
let highScore = 0
let animationReq
let itr
let savedBrain = null
let NEURONS
>>>>>>> Stashed changes

const road = new Road(carCanvas.width/2, carCanvas.width * 0.9, laneCount)
var cars = []
var traffic = null
var damaged = []

initiateAll()

async function initiateAll(){
    cars = []
    NEURONS = [sensorCount, 6, 4]
    itr = 0


    for(let i = 0 ; i < carCount ; ++i){
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI", 5, sensorCount, spread, NEURONS))
    }

    traffic = new Traffic(cars[0].y, cars[0].height, trafficCount, 400, laneCount)
    
    damaged = []
    
    for(let i = 0 ; i < carCount ; ++i){
        if(savedBrain){
            cars[i].brain = NeuralNetwork.getCopy(cars[i].brain, savedBrain)
            NeuralNetwork.mutate(cars[i].brain, mutateAmount)
        }
<<<<<<< Updated upstream
        
        if(i != 0){
            NeuralNetwork.mutate(cars[i].brain, mutateAmount)
        }
=======
>>>>>>> Stashed changes
    }
    
    carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);
    writeText(carCtx, "Generation: " + generation, 100, 100, 30)
<<<<<<< Updated upstream
    await new Promise(x => setTimeout(x, 1000))
=======
    await new Promise(x => setTimeout(x, DELAY))
>>>>>>> Stashed changes

}

async function start(){
    await initiateAll()
    animate()
}

<<<<<<< Updated upstream
=======
function stop(){
    enableInput()
    cancelAnimationFrame(animationReq)
}

function storeData(){
    storeChartImage()
}

writeText(bestBrainCtx, "Best Brain", 30, 20, 20, "gray")

>>>>>>> Stashed changes
async function animate(time){    
    
    
    // --------------------- UPDATION -------------------------------
    // car updation
    let bestCar = cars.find(car => 
        car.y == Math.min(...cars.map(car => car.y)
    ))
    for(let i = 0 ; i < cars.length ; ++i){
        cars[i].update(road.borders, traffic.cars);
        if(cars[i].damaged){
            damaged.push(cars[i])
            cars.splice(i, 1)
            i--
        }
    }
    
    
    // traffic updation
    traffic.update(bestCar.y, laneCount)
    traffic.cars.forEach(trafficcar => trafficcar.update(road.borders, traffic.cars))

    // if all cars are dead
<<<<<<< Updated upstream
    if(cars.length == 0){
        save(bestCar)
        generation++
=======
    if(cars.length == 0 || itr == NO_OF_ITERATIONS){
        if(score > highScore)    {
            savedBrain = bestCar.brain
            if(savedBrain){
                Visualizer.drawNetwork(bestBrainCtx, savedBrain)
            }
            
            highScore = score
        }
        if(generation == 60){
            stop()
            enterData()
        }
        generation++;
        updateScoreChart(chartCtx, score)
>>>>>>> Stashed changes
        await initiateAll()
    }


    // ---------------------- DRAWING ----------------------------
    carCanvas.height = window.innerHeight - document.getElementById("inputs").clientHeight;
    networkCanvas.height = window.innerHeight- document.getElementById("inputs").clientHeight;
    
    carCtx.save()
    carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7)
    
    road.draw(carCtx)
    traffic.cars.forEach(trafficcar => trafficcar.draw(carCtx, "rgb(113, 74, 112)") )
    
    cars.forEach(car => car.draw(carCtx, "rgb(81, 175, 120)", false, 0.2))
    bestCar.draw(carCtx, "rgb(81, 175, 120)" , true, 1)
    damaged.forEach(damagedCar => {if(damagedCar)   damagedCar.draw(carCtx, "black", false, 0.2)})
    
    networkCtx.lineDashOffset= time/60
    Visualizer.drawNetwork(networkCtx, bestCar.brain)
    
    carCtx.restore()
<<<<<<< Updated upstream
    writeText(carCtx, "Y : " + Math.abs(Math.floor(bestCar.y)), 30,  60, 20)
    requestAnimationFrame(animate)
=======
    writeText(carCtx, "Score : " + score, 30,  60, 20)
    writeText(carCtx, "Generation : " + generation, 30,  80, 20)
    writeText(carCtx, "Time Remain : " + (NO_OF_ITERATIONS - itr) / 10, 30, 100, 20)
    itr++;
    animationReq = requestAnimationFrame(animate)
>>>>>>> Stashed changes

}