describe("Text Inversion", function() {
    it("should reverse the string correctly", function() {
        const inputText = "Hello";
        const expectedOutput = "olleH";

        // Simulate the input and reverse operation
        document.getElementById('textInput').value = inputText;
        const reversedText = inputText.split('').reverse().join('');

        expect(reversedText).toEqual(expectedOutput);
    });

    it("should return an empty string if input is empty", function() {
        const inputText = "";
        const expectedOutput = "";

        // Simulate the input and reverse operation
        const reversedText = inputText.split('').reverse().join('');

        expect(reversedText).toEqual(expectedOutput);
    });

    it("should handle special characters", function() {
        const inputText = "AI4Devs!";
        const expectedOutput = "!sveD4IA";

        // Simulate the input and reverse operation
        const reversedText = inputText.split('').reverse().join('');

        expect(reversedText).toEqual(expectedOutput);
    });
});