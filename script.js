document.getElementById('spinButton').addEventListener('click', function() {
    var wheel = document.getElementById('wheel');
    var resultText = document.getElementById('result');
    
    // Generate a random number for the result
    var randomDegree = Math.floor(Math.random() * 360) + 3600; // Adding extra spin for effect
    
    // Apply the rotation to the wheel
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = 'rotate(' + randomDegree + 'deg)';
    
    // Display the result after the wheel stops
    setTimeout(function() {
        var degrees = randomDegree % 360;
        
        var prize = '';
        
        if (degrees >= 0 && degrees < 51) {
            prize = 'Oppo F7';
        } else if (degrees >= 51 && degrees < 102) {
            prize = 'Vivo 1814';
        } else if (degrees >= 102 && degrees < 153) {
            prize = 'Airpods';
        } else if (degrees >= 153 && degrees < 204) {
            prize = 'Handfree';
        } else if (degrees >= 204 && degrees < 255) {
            prize = 'T-Shirt Red';
        } else if (degrees >= 255 && degrees < 306) {
            prize = 'Infinix Hot 11';
        } else {
            prize = 'Nothing';
        }
        
        resultText.innerHTML = 'Congratulations! You won: ' + prize;
    }, 3000); // Wait for 3 seconds (spin time) to show the result
});


