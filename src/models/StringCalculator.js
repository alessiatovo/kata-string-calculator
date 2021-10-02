module.exports =  class StringCalculator{

    constructor(string_numbers){
        this.string_numbers = string_numbers;
    }

   add(){
       let sum = 0;
        if(this.string_numbers == ""){
            return 0
        } else {
            const regex = /\d+/g;

            let numbers = this.string_numbers.match(regex).map(Number);
            for(var num of numbers){
                sum += num;
            }
        }
        
        return sum;
    }
}

