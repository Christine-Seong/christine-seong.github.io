let cols, rows;
let angle = 0;
let mesh = [];
let r = 150; 
let potDepth = 50; 
let time = 0; 

function setup() {
  createCanvas(900, 700, WEBGL);
  cols = 50;
  rows = 50;

  // 메쉬 포인트 생성
  for (let i = 0; i < cols; i++) {
    mesh[i] = [];
    for (let j = 0; j < rows; j++) {
      let x = (i - cols / 2) * 15;
      let y = (j - rows / 2) * 15;
      mesh[i][j] = createVector(x, y, 0);
    }
  }
}

function draw() {
  background(0);
  rotateX(PI / 4);
  rotateZ(angle * 0.02);

  // 구멍을 비틀고 울렁이는 효과 추가
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      let p1 = mesh[i][j];
      let p2 = mesh[i + 1][j];
      let p3 = mesh[i][j + 1];
      let p4 = mesh[i + 1][j + 1];

      // 구멍의 중심에서 비틀림을 만들기 위한 거리 계산
      let distFromCenter = dist(p1.x, p1.y, 0, 0);
      let twist = map(distFromCenter, 0, r, 0, TWO_PI);

      // 울렁임 효과를 위해 시간 값을 기반으로 Z축에 변화 주기
      let timeOffset = sin(time + distFromCenter * 0.05) * 10; 

      // 비틀림과 울렁임을 합성하여 Z축에 깊이를 추가
      p1.z = sin(twist) * potDepth + timeOffset;
      p2.z = sin(twist) * potDepth + timeOffset;
    p3.z = sin(twist) * potDepth + timeOffset;
      p4.z = sin(twist) * potDepth + timeOffset;

      // 라인으로 메쉬 포인트 연결
      stroke(255);
      line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);  
      line(p1.x, p1.y, p1.z, p3.x, p3.y, p3.z);  
      line(p2.x, p2.y, p2.z, p4.x, p4.y, p4.z);  
      line(p3.x, p3.y, p3.z, p4.x, p4.y, p4.z);  
    }
  }

  angle += 0.01; // 전체적인 회전
  time += 0.05; // 울렁임 애니메이션을 위한 시간 증가
}