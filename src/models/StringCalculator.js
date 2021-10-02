module.exports =  class StringCalculator{

    constructor(string_numbers){
        this.string_numbers = string_numbers;
    }

   add(){
       let sum = 0;
        if(this.string_numbers == ""){
            return 0
        } else {
            let numbers = this.string_numbers.split(',');
            for(const num of numbers){
                sum += parseInt(num);
            }
        }
        
        return sum;
    }
}

