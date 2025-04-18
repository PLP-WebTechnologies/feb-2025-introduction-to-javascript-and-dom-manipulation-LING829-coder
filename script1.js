// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicContent = document.getElementById('dynamic-content');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicContent.innerHTML = `
            <p>The text has been changed dynamically!</p>
            <p>Current time: ${new Date().toLocaleTimeString()}</p>
        `;
    });

    // Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    
    changeStyleBtn.addEventListener('click', function() {
        dynamicContent.style.backgroundColor = '#e6f7ff';
        dynamicContent.style.border = '2px solid #007acc';
        dynamicContent.style.color = '#003366';
        dynamicContent.style.padding = '20px';
        dynamicContent.style.transition = 'all 0.3s ease';
    });

    // Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleElement = document.getElementById('toggle-element');
    let isVisible = true;
    
    toggleElementBtn.addEventListener('click', function() {
        if (isVisible) {
            toggleElement.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        } else {
            toggleElement.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        }
        isVisible = !isVisible;
    });
});