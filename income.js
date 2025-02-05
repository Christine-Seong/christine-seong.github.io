let blocks = []; // Array to store block positions
let index = -1; // Counter for spacebar presses
    
// Function to add a layer of blocks to the array
function addLayer(layerBlocks) {
    blocks.push(layerBlocks); // Add the layer of blocks to the array
}
    

function setup() {
    createCanvas(1700, 1000);
    noLoop();

    let x = 225; // X position
    let y = 380; // Y position
    let x2 = 575;
    let x3 = 955;
    let x4 = 1335;
    let y2 = 900;
    let size = 50; // Size of square
    let cornerRadius = 20; // Rounded corners
    let padding = 0;

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

  
    //오른쪽으로 쌓기 x + size - 10; 
    //위로 쌓기 y - size + 10;

    //2017
    //level1 first layer
    let layer1 = [
    {x: x, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark}
    ];
    addLayer(layer1);
  
    //level1 second layer

    let layer2 = [
    {x: x, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x + size - 10 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer2);

    //level2 first layer
    let layer3 = [
    {x: x2, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark}
    ];
    addLayer(layer3);

    //level2 second layer
    let layer4 = [
    {x: x2, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark}
    ];
    addLayer(layer4);

    //level2 third layer
    let layer5 = [
    {x: x2, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer5);

    //level2 forth layer
    let layer6 = [
    {x: x2, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer6);

    //level2 fifth layer
    let layer7 = [
    {x: x2, y: y - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer7);

    //level2 sixth layer
    let layer8 = [
    {x: x2, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer8);

    //level2 seventh layer
    let layer9 = [
    {x: x2, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer9);

    //level2 eighth layer
    let layer10 = [
    {x: x2, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer10);

    //level3 first layer
    let layer11 = [
    {x: x3, y: y, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark}
    ];
    addLayer(layer11);

    //level3 second layer
    let layer12 = [
    {x: x3, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x3 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x3 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer12);

    //level3 third layer
    let layer13 = [
    {x: x3, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer13);

    //level3 forth layer
    let layer14 = [
    {x: x3, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer14);

    //level4 first layer
    let layer15 = [
    {x: x4, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10 + size - 10, y: y, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark}
    ];
    addLayer(layer15);

    //level4 second layer
    let layer16 = [
    {x: x4, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10 + size - 10, y: y - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark}
    ];
    addLayer(layer16);

    //level4 third layer
    let layer17 = [
    {x: x4, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10, y: y - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer17);

    //2040
    //level1 first layer
    let layer18 = [
    {x: x, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark}
    ];
    addLayer(layer18);

    //level1 second layer
    let layer19 = [
    {x: x, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer19);

    //level2 first layer
    let layer20 = [
    {x: x2, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark}
    ];
    addLayer(layer20);

    //level2 second layer
    let layer21 = [
    {x: x2, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark}
    ];
    addLayer(layer21);

    //level2 third layer
    let layer22 = [
    {x: x2, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark}
    ];
    addLayer(layer22);

    //level2 forth layer
    let layer23 = [
    {x: x2, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer23);

    //level2 fifth layer
    let layer24 = [
    {x: x2, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x2 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer24);

    //level2 sixth layer
    let layer25 = [
    {x: x2, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer25);

    //level3 first layer
    let layer26 = [
    {x: x3, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark}
    ];
    addLayer(layer26);

    //level3 second layer
    let layer27 = [
    {x: x3, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark}
    ];
    addLayer(layer27);

    //level3 third layer
    let layer28 = [
    {x: x3, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: africaBase, darkColor: africaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer28);

    //level3 forth layer
    let layer29 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer29);
    
    //level3 fifth layer
    let layer30 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer30);

    //level3 sixth layer
    let layer31 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer31);

    //level3 seventh layer
    let layer32 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer32);

    //level3 eighth layer
    let layer33 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer33);

    //level3 nineth layer
    let layer34 = [
    {x: x3, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x3 + size - 10, y: y2 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    ];
    addLayer(layer34);

    //level4 first layer
    let layer35 = [
    {x: x4, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark},
    {x: x4 + size - 10 + size - 10 + size - 10 + size - 10, y: y2, size: size, cornerRadius: cornerRadius, baseColor: theamericasBase, darkColor: theamericasDark}
    ];
    addLayer(layer35);

    //level4 second layer
    let layer36 = [
    {x: x4, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark},
    {x: x4 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: europeBase, darkColor: europeDark}
    ];
    addLayer(layer36);

    //level4 third layer
    let layer37 = [
    {x: x4, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10 + size - 10 + size - 10 + size - 10, y: y2 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer37);

    //level4 forth layer
    let layer38 = [
    {x: x4, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark},
    {x: x4 + size - 10, y: y2 - size + 10 - size + 10 - size + 10, size: size, cornerRadius: cornerRadius, baseColor: asiaBase, darkColor: asiaDark}
    ];
    addLayer(layer38);

    console.log("Layers added: ", blocks); // Check the layers

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
    // Check if index is being updated correctly
    console.log("Index: ", index); 

    // Draw blocks in the array up to the current index (full layers)
    for (let i = 0; i <= index; i++) {
        if (i < blocks.length) {
            let layer = blocks[i];
            // Draw all blocks in the current layer
            for (let b of layer) {
                drawBlock(b.x, b.y, b.size, b.cornerRadius, b.baseColor, b.darkColor);
            }
        }
    }
}

// Function to draw a single block
function drawBlock(x, y, size, cornerRadius, baseColor, darkColor) {
    // Log the color values to see if they are correct
    console.log("Base Color:", baseColor);
    console.log("Dark Color:", darkColor);

    // Ensure baseColor and darkColor are valid color objects
    if (!(baseColor instanceof p5.Color) || !(darkColor instanceof p5.Color)) {
        console.error("Invalid color input. Ensure colors are created with the p5.js color() function.");
        return;
    }

    // Draw shadow for 3D effect
    noStroke();
    fill(darkColor);
    rect(x + 5, y - 5, size, size, cornerRadius);

    // Draw main square with a black stroke
    stroke(0);
    strokeWeight(2);
    fill(baseColor);
    rect(x, y, size, size, cornerRadius);
}

// Detect spacebar press
function keyPressed() {
    if (keyCode === 32) { // Spacebar key code
        console.log("Spacebar pressed!"); // Confirm spacebar press
        if (index < blocks.length - 1) {
            index++; // Show the next set of blocks
            redraw(); // Update canvas
        }
    }
}