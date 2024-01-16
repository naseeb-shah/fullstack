export const generateNumber = (digit: number): number => {
    try {
        if (digit < 1) {
            throw new Error("Number of digits must be at least 1.");
        }

        const min = Math.pow(10, digit - 1);
        const max = Math.pow(10, digit) - 1;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    } catch (e) {
        // Handle the error, log, or throw it again
        console.error(e);
        throw e;
    }
};


