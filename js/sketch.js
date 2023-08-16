let camera

let size = 200
let offsetFactor = 1.07

let removedBondTypes = []
let displayedFaces = []
let settings = {
	displayPentagons: true,
	displayHexagons: true,
	displayNetwork: true,
	
	pentagonColour: "#800080",
	hexagonColour: "#FFFFFF",
	
	edgesWeight: 1,
	edgesColour: "#646464",
	
	networkEdgesWeight: 2,
	networkAcolour: "#fA0000",
	networkBcolour: "#0064F0",
	networkCcolour: "#FAAC10",
	networkNodesSize: 5,
	networkNodesColour: "#666666",
	
	backgroundColour: "#FFFFFF",
	
	displayType: 0,	// 0: display all faces, 1: randomly remove some faces, 2: display one pentamer and the surrounding tiles
	
	removalProbability: 0.5,
}

//GUI

let probaController = null;

let gui = new dat.GUI({name: 'Polyomavirus interaction network',width: 300});
let tilesGui = gui.addFolder('Tiles');
var networkGui = gui.addFolder('Network');

gui.addColor(settings,"backgroundColour").name("background")
gui.add(settings,"displayType",0,2,1).name("display").onFinishChange(() => {
	updateDisplayedFaces();
	if(settings.displayType == 1) {
		if(probaController == null) {
			probaController = gui.add(settings,"removalProbability",0,1,0.1).name("Fraction removed").onFinishChange(updateDisplayedFaces)
		}
	}else {
		gui.remove(probaController)
		probaController = null;
	}
})

tilesGui.add(settings, 'displayPentagons', 0, 1, 1).name("show pentagons");
tilesGui.add(settings, 'displayHexagons', 0, 1, 1).name("show hexagons");
tilesGui.add(settings, 'edgesWeight', 0, 10, 1).name("edges weight");
tilesGui.addColor(settings, 'pentagonColour').name("pentagons colour");
tilesGui.addColor(settings, 'hexagonColour').name("hexagons colour");

networkGui.add(settings,'displayNetwork',0,1,1).name("show network")
networkGui.add(settings, 'networkNodesSize', 0, 50, 1).name("nodes size");
networkGui.add(settings,'networkEdgesWeight',0,10,1).name("edges weight")
networkGui.addColor(settings, 'networkBcolour').name("B bonds colour");
networkGui.addColor(settings, 'networkAcolour').name("A bonds colour");
networkGui.addColor(settings, 'networkCcolour').name("C bonds colour");


function updateDisplayedFaces() {
	displayedFaces = []
	for(let i = 0; i < 72; i++) {
		if (settings.displayType == 1 && Math.random() > settings.removalProbability) {
			displayedFaces.push(i);
		}else if(settings.displayType == 0) {
			displayedFaces.push(i);
		} 
	}
	if(settings.displayType == 2) {
		displayedFaces = [65,14,15,28,43,46];
	}
}

function setup() {
	updateDisplayedFaces()
	createCanvas(windowWidth, windowHeight, WEBGL);
	camera = createCamera();	
	camera.setPosition(328.0194072520545,-282.51371090543233,9.448365808553215)
	camera.lookAt(0,0,0)
}
	
function midPoint(face) {
	let x = 0;
	let y = 0;
	let z = 0;
	for(let pid of face) {
		let [fx,fy,fz] = NODES[pid]
		x += fx;
		y += fy;
		z += fz;
	}
	x /= face.length
	y /= face.length
	z /= face.length
	return [x,y,z]
}

let a =true

function draw() {
	smooth();
	// orbitControl(3,3)
	background(settings.backgroundColour);

	//Set lighting
	ambientLight(50,50,50);
	ambientMaterial(255);
	strokeWeight(3);
	pointLight(255, 255, 255, 220, -220, 220);
	directionalLight(255, 255, 255, -1, 1, -1);
	directionalLight(100, 100, 100, -1, 1, 1);
	

	//Draw the hexamers and pentamers
	for(let points of FACES) {
		if(displayedFaces.indexOf(FACES.indexOf(points)) != -1 && ((points.length == 5 && settings.displayPentagons) || (points.length == 6 && settings.displayHexagons) )){
			noFill();
			strokeWeight(settings.edgesWeight);
			stroke(settings.edgesColour)
			beginShape();
			if(points.length == 5) {
				fill(settings.pentagonColour)
			}else {
				fill(settings.hexagonColour)
			}
			for(id of points) {
				let [x,y,z] = NODES[id]
				vertex(x*size,y*size,z*size)	
			}
			endShape(CLOSE)
		}
	}


	//Draw the interaction network
	for(let [id1,id2,type] of BONDS) {
		if(removedBondTypes.indexOf(type) == -1 && displayedFaces.indexOf(id1) != -1 && displayedFaces.indexOf(id2) != -1 && settings.displayNetwork){
			noStroke()
			if(type==0) {
				fill(settings.networkAcolour)
			}else if (type == 1) {
				fill(settings.networkBcolour)
			}else {
				fill(settings.networkCcolour)
			}
			[x1,y1,z1] = midPoint(FACES[id1]);
			[x2,y2,z2] = midPoint(FACES[id2]);
			let v1 = createVector(x1 * size * offsetFactor,y1 * size * offsetFactor,z1 * size * offsetFactor);
			let v2 = createVector(x2 * size * offsetFactor,y2 * size * offsetFactor,z2 * size * offsetFactor);
			let direction = p5.Vector.sub(v2, v1);
			let midpoint = p5.Vector.lerp(v1, v2, 0.5);
			let axis = createVector(0, 1, 0).cross(direction).normalize()
			let angle = direction.angleBetween(createVector(0, 1, 0))
			
			push()
			translate(midpoint.x, midpoint.y, midpoint.z);
			rotate(abs(angle), axis)
			cylinder(settings.networkEdgesWeight, direction.mag(), 7, 1);
			pop()
			
			fill(settings.networkNodesColour)
			push()
			translate(size*x1 * offsetFactor,size*y1 * offsetFactor,size*z1 * offsetFactor);
			sphere(settings.networkNodesSize,7)
			pop()
			push()
			translate(size*x2 * offsetFactor,size*y2 * offsetFactor,size*z2 * offsetFactor);
			sphere(settings.networkNodesSize,7)
			pop()
		}
	}
}

function mouseDragged(){
	orbitControl();
}
