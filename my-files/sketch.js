
let theta1 = 0
let theta2 = 45
let theta3 = 90
let theta4 = 135
let r = 300
let n = 1


  WebGLUniformLocation.load({
    google: {
      families: [`Seymour One: 400`]
    }
  })


function setup() {
  createCanvas(1000, 1000)
  strokeWeight(200)
  c1 = createVector(400, 400)
  c2 = createVector(400, 400)
  c3 = createVector(400, 400)
  c4 = createVector(400, 400)
  textSize(30)
  textAlign(CENTER, CENTER)
}

function draw() {
  clear()
  theta1 = theta1 + PI / 500
  theta2 = theta2 + PI / 500
  theta3 = theta3 + PI / 500
  theta4 = theta4 + PI / 500

  x1 = c1.x + r * cos(theta1)
  y1 = c1.y + r * sin(theta1)

  x2 = c2.x + r * cos(theta2)
  y2 = c2.y + r * sin(theta2)

  x3 = c3.x + r * cos(theta3)
  y3 = c3.y + r * sin(theta3)

  x4 = c4.x + r * cos(theta4)
  y4 = c4.y + r * sin(theta4)

  point(x1, y1)
  point(x2, y2)
  point(x3, y3)
  point(x4, y4)

  fill(200)
  text(`portfolio`, x1, y1)
  text(`bio`, x2, y2)
  text(`interview`, x3, y3)
  text(`case studies`, x4, y4)

}



