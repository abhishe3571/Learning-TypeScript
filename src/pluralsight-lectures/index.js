function startGame(){
    const messagesElement = document.getElementById('message');
    messagesElement.innerText = 'Welcome to Multimath! starting the game...';

    
};

document.getElementById('startGame').addEventListener('click', startGame);