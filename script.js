const dateButton = document.querySelector('#date-button');
const currentDateContainer = document.querySelector('#current-date');

dateButton.addEventListener('click', () => {
  const currentDate = new Date();
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  };
  const formattedDate = currentDate.toLocaleDateString('pl-PL', options);
  currentDateContainer.innerHTML = `Aktualna data: ${formattedDate}`;
});