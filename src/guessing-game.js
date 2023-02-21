class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNumb = min;
        this.maxNumb = max;
    }

    guess() {
        console.log('guess', this.number = Math.round((this.maxNumb + this.minNumb) / 2));
        return this.number = Math.round((this.maxNumb + this.minNumb) / 2);
    }

    lower() {
        console.log('lower', this.maxNumb = this.number);
        return this.maxNumb = this.number;
    }

    greater() {
        console.log('greater', this.minNumb = this.number);
        return this.minNumb = this.number;
    }
}

module.exports = GuessingGame;
