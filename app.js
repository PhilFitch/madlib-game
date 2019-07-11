const animal1Input = document.getElementById('animal1');
const verb1Input = document.getElementById('verb1');
const verb2Input = document.getElementById('verb2');
const animal2Input = document.getElementById('animal2');
const adjective1Input = document.getElementById('adjective1');
const verb3Input = document.getElementById('verb3');
const verb4Input = document.getElementById('verb4');
const verbPastInput = document.getElementById('verbPast');

const animal1Span = document.getElementById('animal1Span');
const verb1Span = document.getElementById('verb1Span');
const verb2Span = document.getElementById('verb2Span');
const animal2Span = document.getElementById('animal2Span');
const adjective1Span = document.getElementById('adjective1Span');
const verb3Span = document.getElementById('verb3Span');
const verb4Span = document.getElementById('verb4Span');
const verbPastSpan = document.getElementById('verbPastSpan');

const poemSection = document.getElementById('poem');

function reveal() {

    animal1Span.textContent = animal1Input.value;
    verb1Span.textContent = verb1Input.value;
    verb2Span.textContent = verb2Input.value;
    animal2Span.textContent = animal2Input.value;
    adjective1Span.textContent = adjective1Input.value;
    verb3Span.textContent = verb3Input.value;
    verb4Span.textContent = verb4Input.value;
    verbPastSpan.textContent = verbPastInput.value;

    poemSection.classList.remove('hidden');

}