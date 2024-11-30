function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    const selectedDate = new Date(birthdayInput.value);

    
    if (!birthdayInput.value) {
      error.style.display = 'block';
      result.innerText = '';
      return;
    } else {
      error.style.display = 'none';
    }

    
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    
    selectedDate.setFullYear(today.getFullYear());

    if (selectedDate < today) {
      selectedDate.setFullYear(today.getFullYear() + 1);
    }

   
    const diffInMs = selectedDate - today;
    const daysRemaining = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    
    function getDayWord(days) {
      if (days % 10 === 1 && days % 100 !== 11) {
        return 'день';
      } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
        return 'дня';
      } else {
        return 'дней';
      }
    }

    
    result.innerText = `До вашего дня рождения осталось ${daysRemaining} ${getDayWord(daysRemaining)}`;
  }

  
  document.getElementById('birthday').addEventListener('input', () => {
    document.getElementById('error').style.display = 'none';
  });

