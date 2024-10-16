document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const resultText = document.getElementById('resultText');
    const replaceVowelsBtn = document.getElementById('replaceVowelsBtn');
    const wordCountDisplay = document.getElementById('wordCount');

    // Function to count words
    function countWords(text) {
        return text.trim().split(/\s+/).length;
    }

    // Update word count on input change
    inputText.addEventListener('input', function () {
        const wordCount = countWords(inputText.value);
        wordCountDisplay.textContent = `Words: ${wordCount}`;
    });

    // On button click, replace vowels in the input text and show result
    replaceVowelsBtn.addEventListener('click', function () {
        const replaceVowels = (text) => {
            return text.replace(/[aeiou]/gi, '*');
        };
        const text = inputText.value;
        const replacedText = replaceVowels(text);
        resultText.value = replacedText;
    });
});
