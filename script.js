'use strict';


const priSpusteni = () => {
	const spusteni = document.querySelector('.spusteni')

	spusteni.addEventListener('click', () => {
		const pocetSekund = prompt('Napiš za jak dlouho má minutka zazvonit (počet sekund)');
		const pocetMilisekund = parseInt(pocetSekund * 1000);
		setTimeout(minutka, pocetMilisekund);
	})

	const alarm = document.querySelector('.alarm');
	alarm.addEventListener('animationend', () => {
		alarm.classList.remove('alarm--ring');
	})
}

const minutka = () => {
	const alarm = document.querySelector('.alarm');
	alarm.classList.add('alarm--ring');
	const audio = document.querySelector('#audio')
	audio.play();
}

priSpusteni();

