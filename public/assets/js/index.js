class Semanas{
    getWeekNumOfMonthOfDate(d){
        const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
        return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
    }
    pegarDataAtual(){
        const today = new Date();
        let yy = today.getFullYear();
        let mm = today.getMonth();
        let dd = today.getDate();
        this.weekNumOfDate = getWeekNumOfMonthOfDate(new Date(yy, mm, dd))
        console.log(weekNumOfDate);
        return this.weekNumOfDate;
    }
    verificaSeaSemanaEimpar(){
        if(this.weekNumOfDate % 2 == 0){
           return this.semana ="pares";
           
        }else{
           return this.semana = "ímpares";
         
        }


    }    
}    
module.exports = Semanas;