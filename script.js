const circles = document.querySelectorAll('.circle');
const messageDiv = document.createElement('div'); 
document.body.appendChild(messageDiv); 
let currentActive = -1; 
const nextButton = document.getElementById('next'); 
const prevButton = document.getElementById('prev'); 

nextButton.addEventListener('click', () => {  
if (currentActive < circles.length - 1) {
  currentActive++; 
   updateCircles('next'); 
 }
});

prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive--; 
        updateCircles('prev'); 
    }
});

function updateCircles(action) {
    circles.forEach((circle, index) => {
        circle.classList.remove('next-active', 'prev-active');
        if (index < currentActive + 1) {
            circle.classList.add('active'); 
        } else {
            circle.classList.remove('active'); 
        }

        if (index === currentActive) {
            if (action === 'next') {
                circle.classList.add('next-active'); 
                if (currentActive === circles.length - 1) {
                    messageDiv.textContent = '😊'; 
                } else {
                    messageDiv.textContent = ''; 
                }
            } else if (action === 'prev') {
                circle.classList.add('prev-active'); 
                if (currentActive === 0) {
                    messageDiv.textContent = '😢'; 
                } else {
                    messageDiv.textContent = ''; 
                }
            }
        }
     });
}
