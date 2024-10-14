document.getElementById('invertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    const reversedText = textInput.split('').reverse().join('');
    document.getElementById('reversedText').textContent = reversedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const reversedText = document.getElementById('reversedText').textContent;
    navigator.clipboard.writeText(reversedText).then(function() {
        alert("Text copied to clipboard!");
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
});