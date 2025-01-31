const worldmapDiv = document.querySelector('.worldmap');

const message = document.createElement('div');
message.textContent = 'Click for more options';
message.style.position = 'fixed';
message.style.backgroundColor = 'black';
message.style.color = 'gray';
message.style.padding = '10px 20px';
message.style.borderRadius = '5px';
message.style.fontSize = '35px';
message.style.zIndex = '1000';
message.style.bottom = '20px';
message.style.right = '20px';
message.style.display = 'none';
document.body.appendChild(message);

worldmapDiv.addEventListener('mouseover', () => {
    message.style.display = 'block';
});

worldmapDiv.addEventListener('mouseout', () => {
    message.style.display = 'none';
});