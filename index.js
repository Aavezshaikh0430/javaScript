var amount = 500;
var pin = 1234;
var option = 'Withdraw';
var OTP = 1122;



var bank_details = {
    account_no: 2653556277,
    balance: 2000,
    pin: 1234  ,
    email: "shaikhaavez123@gmail.com",
    Phone_no: 8208607732,
    OTP : 1122,
    name:"Aavez shaikh",

}


if("Withdraw"==="Withdraw"){
    if(amount<bank_details ["balance"]&& amount%500==0){
        bank_details['OTP']=1122;
        if(OTP===bank_details[OTP]){
            bank_details['balance']=bank_details['balance']-amount;

            console.log("name: ",bank_details ['name']);
            console.log('avaible balence: ',bank_details['balance']);
        }
        else{
            console.log('Amount should be less than balance or amount should be multiple of 500');
        }
        
    }
    else{
        console.log('Incorrect "OTP"');

    }
    

}
else{
    console.log("incorrect bank details");
}