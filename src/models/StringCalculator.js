const StringCalculator = {
    stringNumbers: null,

    init(stringNumbers) {
        this.stringNumbers = stringNumbers;
    },
    add() { 
        let sum = 0;
        if(this.stringNumbers === ""){
            return 0
        } else {
            const regex = /-?[0-9]\d*(\.\d+)?/g;

            let negativeNums = [];
            let m;

            while ((m = regex.exec(this.stringNumbers)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                m.forEach((match, groupIndex) => {
                    let num = parseInt(match);
                    if (groupIndex === 0){
                        if (num < 0){
                            negativeNums.push(num);
                        } else if (num < 1000) {
                            sum += num;
                        }
                    }
                });
            }
            if (negativeNums.length > 0) {
                throw `Negatives not allowed: ${negativeNums}`;
            }
        }   
        return sum;
    }

}

module.exports = StringCalculator;
