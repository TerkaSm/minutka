'use strict';

/*
Naprogramuj kuchyňskou minutku.

Využij funkci setTimeout ke splnění následujících úkolů:

1) Zařiď, aby minutka začala zvonit za pět vteřin po otevření stránky.

2) "Zvonění" zařídíš tak, že k elementu budíku přídáš CSS třídu alarm--ring.

3) Máš li-hotovo 1) a 2), můžeš program upravit, že uživatel na začátku
	 programu skrze prompt zadá kolik vteřin má uplynout, než minutka začne zvonit.

4) Můžeš zařídit i spuštění zvuku. Stačí ve stránce vybrat audio element
	 a zavolat na něm metodu play().

	 Abys zvuk slyšel(a), musíš po zadání času na stránku kliknout.
	 Prohlíč Chrome totiž brání stránkam přehrávat audio či video, dokud uživatel
	 se stránkou nějak neinteragoval. Zabraňuje to stránkám, aby ti začaly na
	 počítači svévolně přehrávat zvuky, když si třeba stránku otevřeš do nové záložky,
	 ale ještě ji nečteš.
*/



const priSpusteni = () => {
	const spusteni = document.querySelector('.spusteni')

	spusteni.addEventListener('click', () => {
		const pocetSekund = prompt('Napiš za jak dlouho má minutka zazvonit (počet sekund)');
		const pocetMilisekund = parseInt(pocetSekund * 1000);
		setTimeout(minutka, pocetMilisekund);
	})
}


const minutka = () => {
	const alarm = document.querySelector('.alarm');
	alarm.classList.add('alarm--ring');
	const audio = document.querySelector('#audio')
	audio.play();
}

priSpusteni();

