const analyzer = {

  getAverageWordLength: (text) => {
    const arrWords = text.split(' ');
    let average = 0;
    let charTotal = 0;

    if(arrWords && analyzer.getCharacterCountExcludingSpaces(text)) {
      for(let i = 0; i < arrWords.length; i++){
        charTotal += arrWords[i].length;
        average = charTotal/arrWords.length;
      }
    }
    return parseFloat(average.toFixed(2));
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const arrLetters = text.trim().split('');
    const alphabet = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const alphabetArr = alphabet.split('');
    let counter = 0;

    arrLetters.forEach((letter) => {
      if(alphabetArr.indexOf(letter) >= 0) {
        counter++;
      }
    })

    return counter;
  },

  getNumberCount: (text) => {
    const arrWords = text.split(' ');
    let counter = 0;

    arrWords.forEach((word) => {
      const parsed = parseFloat(+word);
      if(!isNaN(parsed) && word !== '') {
        counter++;
      }
    })
    return counter;
  },

  getNumberSum: (text) => {
    const arrWords = text.split(' ');
    let sum = 0;
    arrWords.forEach((word) => {
      const parsed = parseFloat(+word);
      if(!isNaN(parsed)) {
        sum += parsed;
      }
    })
    return sum;
  },

  getWordCount: (text) => {
    if(!analyzer.getCharacterCountExcludingSpaces(text)) {
      return 0;
    }

    const arrWords = text.trim().split(" ");
    return arrWords[0] ? arrWords.length : 0;
  },
};

export default analyzer;
