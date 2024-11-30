// Elemente aus dem HTML holen 
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment-button');
const resetButton = document.getElementById('reset-button');
const decrementButton = document.getElementById('decrement-button')
const themeSelector = document.getElementById('theme-selector');

// Funktion, um das Farbschema zu ändern
function changeTheme(theme) {
    document.body.className = theme; // Entferne vorherige Farbschemen
    localStorage.setItem('theme', theme); // Speichere das aktuelle Farbschema im Local Storage
  }

// Beim Laden der Seite das gespeicherte Farbschema anwenden
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme; // Farbschema setzen
  themeSelector.value = savedTheme;    // Dropdown auf den Wert setzen
}

// Zählerstand initialisieren
let counter = 0;

// Prüfen, ob ein gepsicherter Wert im Local Storage existiert
const savedCounter = localStorage.getItem('counter');
if (savedCounter !== null){
    counter = parseInt(savedCounter) // Gespeicherten Wert laden
    counterElement.textContent = counter; // Anzeige aktualisieren
}

// Funktion zum Erhöhen des Zählers
function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
    localStorage.setItem('counter', counter); // Zähler speichern
}

// Funktion zum zurücksetzen des Zählers
function resetCounter() {
    counter = 0;
    counterElement.textContent = counter;
    localStorage.setItem('counter', counter); // Zähler speichern
}

// Funktion zum Verringern des Zählers
function decrementConunter() {
    counter--;
    counterElement.textContent = counter;
    localStorage.setItem('counter', counter); // Zähler speichern
}

// Event Listener für das Dropdown
themeSelector.addEventListener('change', (event) => {
    changeTheme(event.target.value);
});

// Event Listener hinzufügen
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);
decrementButton.addEventListener('click', decrementConunter);