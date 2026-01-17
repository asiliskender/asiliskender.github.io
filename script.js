const scrambleText = () => {
    const element = document.querySelector('.scramble');
    if (!element) return;
    
    const originalText = 'ASILİSKENDER';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZİĞÜŞÖÇ';
    let iterations = 0;
    
    // Store original width to prevent layout shift
    const originalWidth = element.offsetWidth + 'px';
    element.style.width = originalWidth;
    element.style.display = 'inline-block';
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(interval);
            // Remove width constraint after animation
            setTimeout(() => {
                element.style.width = 'auto';
            }, 100);
        }
        
        iterations += 1 / 2;
    }, 50);
};

// Hover event
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.addEventListener('mouseenter', scrambleText);
    }
});