module.exports =  class StringCalculator{

    constructor(string_numbers){
        this.string_numbers = string_numbers;
    }

   add(){
       let sum = 0;
        if(this.string_numbers == ""){
            return 0
        } else {
            const regex = /-?[0-9]\d*(\.\d+)?/g;

            var negative_nums = [];
            let m;

            while ((m = regex.exec(this.string_numbers)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                m.forEach((match, groupIndex) => {
                    let num = parseInt(match);
                    if (groupIndex == 0){
                        if (num < 0){
                            negative_nums.push(num);
                        } else if (num < 1000) {
                            sum += num;
                        }
                    }
                });
            }
            if( negative_nums.length > 0){
                throw `Negatives not allowed: ${negative_nums}`;
            }
        }   
        return sum;
    }
}

