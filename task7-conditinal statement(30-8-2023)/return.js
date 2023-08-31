function day(time){

    switch(time){
        case 1:
            return "time is 1 clock";
        case 3:
            return "time is 3 clock";  
        case 5:
            return "time is 5 clock";    
        case 7:
            return "time is 7 clock";
        case 9:
            return "time is 9 clock";
        case 11:
            return "time is 11 clock";
        case 12:
            return "time is 12 clock";
        default:
            return "there is no value";               
    }
    }

    let time = day(12);
    console.log(time);