function setup() {
    createCanvas(1700, 1000);
    noLoop();
  }

    function draw() {
    background(0);

    fill(144,144,144);
    noStroke();
    quad(230,390,150,455,1550,455,1630,390);
    quad(230,910,150,975,1550,975,1630,910);  

    fill(114,114,114);
    noStroke();
    ellipse(400, 412.5, 50, 25);
    ellipse(790, 412.5, 55, 25);
    ellipse(1170, 415, 55, 20);
    ellipse(1460, 415, 55, 20);

    ellipse(390, 932.5, 50, 25);
    ellipse(790, 932.5, 55, 25);
    ellipse(1170, 935, 55, 20);
    ellipse(1540, 935, 55, 20);


    fill(255);
    stroke(255);
    strokeWeight(2);
    line(150,455,1550,455);
    circle(485,455,15);
    circle(870,455,15);
    circle(1255,455,15);

    line(150,975,1550,975);
    circle(485,975,15);
    circle(870,975,15);
    circle(1255,975,15);
  
    // Colors for 3D effect
    let asiaBase = color(245,80,100);
    let asiaDark = color(172,57,71);
    let africaBase = color(96,210,230);
    let africaDark = color(61,132,144);
    let europeBase = color(251,232,77);
    let europeDark = color(185,171,59);
    let theamericasBase = color(154,232,71);
    let theamericasDark = color(107,152,58);
  
    // Square properties
    let x = 225; // X position
    let y = 380; // Y position
    let x2 = 575;
    let x3 = 955;
    let x4 = 1335;
    let y2 = 900;
    let size = 50; // Size of square
    let cornerRadius = 20; // Rounded corners
  
    //오른쪽으로 쌓기 x + size - 10; 
    //위로 쌓기 y - size + 10;

    //2017
    //level1 first layer
    drawBlock(x, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10 + size - 10, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10 + size - 10 + size - 10, y, size, cornerRadius, africaBase, africaDark);
  
    //level1 second layer
    drawBlock(x, y - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x + size - 10, y - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x + size - 10 + size - 10, y - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x + size - 10 + size - 10 + size - 10, y - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 first layer
    drawBlock(x2, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y, size, cornerRadius, europeBase, europeDark);

    //level2 second layer
    drawBlock(x2, y - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10, y - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10, size, cornerRadius, africaBase, africaDark);

    //level2 third layer
    drawBlock(x2, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 forth layer
    drawBlock(x2, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 fifth layer
    drawBlock(x2, y - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 sixth layer
    drawBlock(x2, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 seventh layer
    drawBlock(x2, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 eighth layer
    drawBlock(x2, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 first layer
    drawBlock(x3, y, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);

    //level3 second layer
    drawBlock(x3, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x3 + size - 10, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x3 + size - 10 + size - 10, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 third layer
    drawBlock(x3, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 forth layer
    drawBlock(x3, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level4 first layer
    drawBlock(x4, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10 + size - 10, y, size, cornerRadius, theamericasBase, theamericasDark);

    //level4 second layer
    drawBlock(x4, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size - 10, y - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size -10 + size - 10, y - size + 10, size, cornerRadius, europeBase, europeDark);

    //level4 third layer
    drawBlock(x4, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10, y - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //2040
    //level1 first layer
    drawBlock(x, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10 + size - 10, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, africaBase, africaDark);

    //level1 second layer
    drawBlock(x, y2 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 first layer
    drawBlock(x2, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10, y2, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);

    //level2 second layer
    drawBlock(x2, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);

    //level2 third layer
    drawBlock(x2, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, africaBase, africaDark);

    //level2 forth layer
    drawBlock(x2, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 fifth layer
    drawBlock(x2, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x2 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level2 sixth layer
    drawBlock(x2, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 first layer
    drawBlock(x3, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, europeBase, europeDark);

    //level3 first layer
    drawBlock(x3, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, europeBase, europeDark);

    //level3 second layer
    drawBlock(x3, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);

    //level3 third layer
    drawBlock(x3, y2 - size + 10 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, africaBase, africaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 forth layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    
    //level3 fifth layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 sixth layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 seventh layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 eighth layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level3 nineth layer
    drawBlock(x3, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x3 + size - 10, y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level4 first layer
    drawBlock(x4, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);
    drawBlock(x4 + size - 10 + size - 10 + size - 10 + size - 10, y2, size, cornerRadius, theamericasBase, theamericasDark);

    //level4 second layer
    drawBlock(x4, y2 - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size -10 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size -10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);
    drawBlock(x4 + size -10 + size - 10 + size - 10 + size - 10, y2 - size + 10, size, cornerRadius, europeBase, europeDark);

    //level4 third layer
    drawBlock(x4, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10 + size - 10 + size - 10 + size - 10, y2 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

    //level4 forth layer
    drawBlock(x4, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);
    drawBlock(x4 + size - 10, y2 - size + 10 - size + 10 - size + 10, size, cornerRadius, asiaBase, asiaDark);

  }
  
    // Function to draw a single block
    function drawBlock(x, y, size, cornerRadius, baseColor, darkColor) {
    // Draw shadow for 3D effect
    noStroke();
    fill(darkColor);
    rect(x + 5, y - 5, size, size, cornerRadius);
  
    // Draw main square with a black stroke
    stroke(0); // Set stroke color to black
    strokeWeight(2); // Set stroke thickness
    fill(baseColor);
    rect(x, y, size, size, cornerRadius);

 }