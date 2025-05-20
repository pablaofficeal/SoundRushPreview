        const targetDate = new Date('2025-07-11T00:00:00');
        const timer = document.getElementById('timer');
    
        function updateTimer() {
          const now = new Date();
          const timeLeft = targetDate - now;
    
          if (timeLeft <= 0) {
            timer.textContent = "Мы уже запустились!";
            clearInterval(interval);
            return;
          }
    
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          const seconds = Math.floor((timeLeft / 1000) % 60);
    
          timer.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
        }
    
        updateTimer();
        const interval = setInterval(updateTimer, 1000);