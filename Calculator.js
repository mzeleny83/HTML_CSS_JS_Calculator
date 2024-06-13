const section = document.querySelector('.results');

// Načtení čísel od uživatele
const number1 = parseFloat(prompt('První číslo'));
const number2 = parseFloat(prompt('Druhé číslo'));

// Provedení matematických výpočtů
const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;

// Přidání výpočtů do stránky
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Součet: ' + addition;
section.append(newParagraph1);

const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Rozdíl: ' + subtraction;
section.append(newParagraph2);

const newParagraph3 = document.createElement('p');
newParagraph3.textContent = 'Součin: ' + multiplication;
section.append(newParagraph3);

const newParagraph4 = document.createElement('p');
newParagraph4.textContent = 'Podíl: ' + division;
section.append(newParagraph4);


    <section class="results">

    </section>

—-----------
 
// Vytvoření funkce
const paragraphToWebsite = () => {
   
}


—------------
const paragraphToWebsite = () => {
    const newParagraph1 = document.createElement('p');
    newParagraph1.textContent = 'Součet: ' + addition;
    section.append(newParagraph1);
}

—------
const paragraphToWebsite = (text, result, whereToAdd) => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text + result;
    whereToAdd.append(newParagraph);
}
—------------
paragraphToWebsite('Součet: ', addition, section);
—----------------
// Přidání výpočtů do stránky
paragraphToWebsite('Součet: ', addition, section);
paragraphToWebsite('Rozdíl: ', subtraction, section);
paragraphToWebsite('Součin: ', multiplication, section);
paragraphToWebsite('Podíl: ', division, section);
