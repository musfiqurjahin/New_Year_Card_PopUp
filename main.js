//Created_by_JaHIN

function createPopup() {
    const popup = document.createElement('div');
    popup.id = 'happyNewYearPopup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.zIndex = '9999';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.5s ease';
    popup.style.animation = 'fadeIn 1s forwards';
  
    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = '#2f3640';
    popupContent.style.padding = '5%'; 
    popupContent.style.borderRadius = '15px';
    popupContent.style.textAlign = 'center';
    popupContent.style.position = 'relative';
    popupContent.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    popupContent.style.transform = 'scale(1)';
    popupContent.style.animation = 'scaleUp 0.6s forwards';
    popupContent.style.border = '2px solid rgb(34, 255, 0)';
    popupContent.style.background = 'url("Img/BG-1.gif")';
    popupContent.style.backgroundSize = 'cover';
    popupContent.style.maxWidth = '90vw';
    popupContent.style.maxHeight = '80vh'; 
    popupContent.style.width = 'fit-content'; 
  
    // Countdown section (on top)
    const countdown = document.createElement('p');
    countdown.id = 'countdown';
    countdown.style.animation = 'bounceIn 0.5s ease-out';
    countdown.style.fontSize = '1.5rem';
    countdown.style.textShadow = '2px 2px 4px rgb(0, 0, 0), -2px -2px 4px rgb(0, 0, 0)';
    countdown.style.fontWeight = '600';
    countdown.style.color = 'rgb(246, 255, 0)';
    countdown.style.marginBottom = '20px';
    popupContent.appendChild(countdown);
  
    // Happy New Year message (middle)
    const message = document.createElement('h2');
    message.textContent = 'Happy New Year in Advance :D';
    message.style.fontSize = '2rem';
    message.style.textShadow = '2px 2px 4px rgb(0, 0, 0), -2px -2px 4px rgb(0, 0, 0)';
    message.style.fontWeight = 'bold';
    message.style.color = 'rgb(255, 221, 0)';
    message.style.animation = 'bounceIn 1s ease-out';
    message.style.marginBottom = '20px';
    popupContent.appendChild(message);
  
    // Personalized signature (bottom)
    const signature = document.createElement('p');
    signature.textContent = '-JAHIN';
    signature.style.fontSize = '2.5rem';
    signature.style.textShadow = '2px 2px 4px rgb(0, 0, 0), -2px -2px 4px rgb(0, 0, 0)';
    signature.style.fontWeight = '600';
    signature.style.color = 'rgb(255, 255, 255)';
    signature.style.marginTop = '10px';
    signature.style.display = 'inline-block';
    signature.style.animation = 'bounceIn 1.5s ease-out';
    popupContent.appendChild(signature);
  
    // Close button
    const closeButton = document.createElement('span');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '2rem';
    closeButton.style.color = 'rgb(0, 255, 26)';
    closeButton.style.transition = 'color 0.3s ease';
    closeButton.onclick = () => {
      popup.style.display = 'none';
    };
  
    closeButton.onmouseover = () => {
      closeButton.style.transform = 'scale(1.2)';
      closeButton.style.color = 'rgb(255, 0, 0)';
    };
    closeButton.onmouseout = () => {
      closeButton.style.transform = 'scale(1)';
      closeButton.style.color = 'rgb(0, 255, 26)';
    };
  
    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleUp {
        from { transform: scale(0); }
        to { transform: scale(1); }
      }
      @keyframes bounceIn {
        0% { transform: translateY(-200px); opacity: 0; }
        60% { transform: translateY(30px); opacity: 1; }
        80% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      @media (max-width: 768px) {
        #happyNewYearPopup div {
          padding: 4%;
          max-width: 95vw; /* Adjust for smaller devices */
        }
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Countdown logic
    const endDate = new Date('January 1, 2025 00:00:00').getTime();
    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = endDate - now;
  
      if (timeRemaining <= 0) {
        message.textContent = 'Happy New Year 2025!';
        countdown.style.display = 'none';
        const greeting = document.createElement('p');
        greeting.textContent = 'Wishing you all the best in the new year!';
        greeting.style.fontSize = '1rem';
        greeting.style.color = '#ffcd02';
        popupContent.appendChild(greeting);
        clearInterval(countdownInterval);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdown.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  
    const shareButton = document.createElement('button');
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
    shareButton.style.position = 'fixed';  
    shareButton.style.right = '10px'; 
    shareButton.style.bottom = '10px';  
    shareButton.style.cursor = 'pointer';
    shareButton.style.backgroundColor = 'transparent';  
    shareButton.style.color = 'rgb(255, 0, 0)';  
    shareButton.style.border = '3px solid rgb(9, 85, 25)'; 
    shareButton.style.borderRadius='20px';
    shareButton.style.padding = '10px';
    shareButton.style.fontSize = '20px';
    shareButton.style.transition = 'transform 0.3s';
    
    shareButton.onmouseover = () => {
      shareButton.style.transform = 'scale(1)';
      shareButton.style.color = 'rgb(0, 0, 0)';
      shareButton.style.backgroundColor = 'rgb(0, 255, 26)';
    };
    
    shareButton.onmouseout = () => {
      shareButton.style.transform = 'scale(1)';
      shareButton.style.color = 'rgb(255, 0, 0)'; 
      shareButton.style.backgroundColor = 'transparent';
    };
    
    shareButton.onclick = () => {
      navigator.share({
        title: 'Happy New Year!',
        text: 'Wishing you a Happy New Year!',
        url: window.location.href,
      });
    };
    
    popupContent.appendChild(shareButton);
  }
  
  createPopup();
  