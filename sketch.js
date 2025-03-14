function setup() {
    // Define as dimensões mínimas
    const minWidth = 800;
    const minHeight = 600;

    // Calcula a largura e altura do canvas, garantindo que não sejam menores que as dimensões mínimas
    const canvasWidth = max(windowWidth - 4, minWidth);
    const canvasHeight = max(windowHeight - 4, minHeight);

    createCanvas(canvasWidth, canvasHeight)
    angleMode(DEGREES);
}

function windowResized() {
    // Define as dimensões mínimas
    const minWidth = 800;
    const minHeight = 600;

    // Calcula a largura e altura do canvas, garantindo que não sejam menores que as dimensões mínimas
    const canvasWidth = max(windowWidth - 4, minWidth);
    const canvasHeight = max(windowHeight - 4, minHeight);

    resizeCanvas(canvasWidth, canvasHeight)
}

let pHori
let pVert

function draw() {
    clear()
  
//Cabeça  
 fill(255)
  noStroke()
  rect((width/2)-225, (height/2)-175, 450, 300)

//Orelha
  
  rect((width/2)-225, (height/2)-190, 40, 15)
  rect((width/2)+185, (height/2)-190, 40, 15)
  
  stroke(5)
  arc((width/2) - 205, (height/2) - 190, 40, 40, 180, 0, OPEN)
    arc((width/2) + 205, (height/2) - 190, 40, 40, 180, 0, OPEN)
  
//Rosto
  fill(255, 191, 141)
 ellipse((width/2), (height/2) - 25, 350, 220)
  
  noFill()
  arc((width/2), (height/2) + 10, 150, 50, 20, 160, OPEN)

//olho
  let eBaseX = width / 2 - 80
  let dBaseX = width / 2 + 70

  pHori = map(mouseX, 0, width, -8.5, 17)
  pVert = map(mouseY, 0, height, -9.5, 13.5)
  
  fill(0)
  circle(eBaseX + pHori, pVert + 240, 20)
  circle(dBaseX + pHori, pVert + 240, 20)
  
  
//Contorno
  line((width/2)-225, (height/2)-190, (width/2) - 225, (height/2) + 125)
  line((width/2)+225, (height/2)-190, (width/2) + 225, (height/2) + 125)
  line((width/2) - 185, (height/2) - 190, (width/2) - 185, (height/2) - 175)
  line((width/2)+185, (height/2) - 190, (width/2) + 185, (height/2) - 175)
  line((width/2) + 185, (height/2) - 175, (width/2) - 185, (height/2) - 175)
  line((width/2) - 225, (height/2) + 125, (width/2) + 225, (height/2) + 125)
    line((width/2)-225, (height/2)-190, (width/2) - 225, (height/2) + 125)
  line((width/2)+225, (height/2)-190, (width/2) + 225, (height/2) + 125)
  line((width/2) - 185, (height/2) - 190, (width/2) - 185, (height/2) - 175)
  line((width/2)+185, (height/2) - 190, (width/2) + 185, (height/2) - 175)
  line((width/2) + 185, (height/2) - 175, (width/2) - 185, (height/2) - 175)
  line((width/2) - 225, (height/2) + 125, (width/2) + 225, (height/2) + 125) 
}