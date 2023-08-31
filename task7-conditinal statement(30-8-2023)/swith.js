var role= "Manager";
switch(role){
    case "manager","Manager":
        console.log("your are manager,you can access everything")
        break;

    case "devloper","Devloper":
        console.log("your are developer");
        break;

    case "tester","Tester":
        console.log("your are tester");
        break;
    case "teamlead","tl","Teamlead,TL":
        console.log("your are teamLead");
        break;
    case "deployement","Deployement":
        console.log("your are deployement")
        break;
    default:
        console.log("your are new!! Welcome to our company")
}
