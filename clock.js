const isim = document.querySelector('#myName');
isim.innerHTML = prompt('Adınızı Giriniz:');

function getNameOfTheDay() {
  const currentDate = new Date();
  let nameOfTheDay;
  switch (currentDate.getDay()) {
    case 0:
      nameOfTheDay = 'Pazar';
      break;
    case 1:
      nameOfTheDay = 'Pazartesi';
      break;
    case 2:
      nameOfTheDay = 'Salı';
      break;
    case 3:
      nameOfTheDay = 'Çarşamba';
      break;
    case 4:
      nameOfTheDay = 'Perşembe';
      break;
    case 5:
      nameOfTheDay = 'Cuma';
      break;
    case 6:
      nameOfTheDay = 'Cumartesi';
      break;
    default:
      nameOfTheDay = 'Gun bilgisi alinamadi !';
      break;
  }
  return { tarih: currentDate.toLocaleTimeString(), nameOfTheDay };
}

const updateSecond = setInterval(function () {
  const { tarih, nameOfTheDay } = getNameOfTheDay();
  document.querySelector('#myClock').innerHTML = ` ${tarih} ${nameOfTheDay}`;
}, 1000);
