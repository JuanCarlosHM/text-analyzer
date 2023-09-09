import analyzer from './analyzer.js';

const userText = document.querySelector('[name=user-input]');
const wordCount = document.querySelector('[data-testid=word-count]');
const characterCount = document.querySelector('[data-testid=character-count]');
const characterNoSpacesCount = document.querySelector('[data-testid=character-no-spaces-count]');
const numberCount = document.querySelector('[data-testid=number-count]');
const numberSum = document.querySelector('[data-testid=number-sum]');
const wordLengthAverage = document.querySelector('[data-testid=word-length-average]');

const buttonClear = document.getElementById('reset-button');

userText.addEventListener('keyup', (e) => {
  wordCount.textContent = 'word count:' + analyzer.getWordCount(e.target.value);
  characterCount.textContent = 'character count:' + analyzer.getCharacterCount(e.target.value);
  characterNoSpacesCount.textContent = 'character no spaces count:' + analyzer.getCharacterCountExcludingSpaces(e.target.value);
  numberCount.textContent = 'number count:' + analyzer.getNumberCount(e.target.value);
  numberSum.textContent = 'number sum:' + analyzer.getNumberSum(e.target.value);
  wordLengthAverage.textContent = 'word length average:' + analyzer.getAverageWordLength(e.target.value);
})


buttonClear.addEventListener('click', () => {
  userText.value = '';

  wordCount.textContent = 'word count: 0';
  characterCount.textContent = 'character count: 0';
  characterNoSpacesCount.textContent = 'character no spaces count: 0';
  numberCount.textContent = 'number count: 0';
  numberSum.textContent = 'number sum: 0';
  wordLengthAverage.textContent = 'word length average: 0';
});

