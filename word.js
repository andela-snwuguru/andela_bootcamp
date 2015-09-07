/*
 eliminate stupid mental effort
 */
var app = {
    symbol:[' **** ','**    **','******','  ****  ','********','**      ','**  *  **'],
    alphabetConfig:{
        a:[3,1,1,4,1,1,1],
        b:[2,1,1,2,1,1,2],
        c:[4,4,5,5,5,4,4],
        d:[2,1,6,6,1,2]
    },
    word:'',
    init:function(letters){
        if(letters === undefined){
            console.log('no letters defined');
            return false;
        }

        for(var i = 0; i < letters.length; i++){
            this.word += this.getLetter(letters[i]);
        }
    },
    getLetter:function(letter){
       var design = '';
       for(var i = 0; i < this.alphabetConfig[letter].length; i++){
         design += this.symbol[this.alphabetConfig[letter][i]]+'\n';
           if(i == (this.alphabetConfig[letter].length - 1))
                design += '\n\n';
       }
       return design;
    },
    showWord:function(){
        console.log(this.word);
    }
}

app.init(['a','b','c','d']);
app.showWord();
