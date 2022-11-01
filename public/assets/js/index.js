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
        this.weekNumOfDate = this.getWeekNumOfMonthOfDate(new Date(yy, mm, dd))
        
         this.semana = this.verificaSeaSemanaEimpar(this.weekNumOfDate);
        return this.semana;
    }
    verificaSeaSemanaEimpar(data){
      
        if(data % 2 === 0){
           return this.semana ="pares";
           
        }else if(data % 2 === 1){ 
           return this.semana = "ímpares";
         
        }else{
            return console.log("[ERROR]")
        }


    }    
}    
const semanas = new Semanas().pegarDataAtual();

exports.semana = semanas;

