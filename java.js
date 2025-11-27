document.getElementById('surpriseButton').addEventListener('click', function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Surprise! You clicked the button!';
    greetingElement.style.color = 'blue';
});

