class Bank{
    reset(){
        acno.value=""
        pwd.value=""
    }
    reset2(){
        nam.value=""
        acno.value=""
        bal.value=""
        pwd.value=""
    }
    register(){
        location.href="userRegistration.html"
    }
    createAccount(){
        let person_name=nam.value
        let account_number=acno.value
        let balance=bal.value
        let password=pwd.value
        let user={
            person_name,account_number,balance,password
        }
        localStorage.setItem(account_number,JSON.stringify(user))
        alert("Account has been created succefully")
        location.href="login.html"
    }
    validateAccountNumber(){

    }
    authenticate(){
        let account_number=acno.value
        let password=pwd.value
        if(account_number in localStorage)
        {
            let user=JSON.parse(localStorage.getItem(account_number))
            if(user.password==password)
            {
                alert("Login Success")
                sessionStorage.setItem(account_number,JSON.stringify(user))
                location.href="operations.html"
            }
            else
            {
                alert("Invalid Password")
            }
        }
        else
        {
            alert("Invalid Account Number")
        }
    }
    logOut(){
        sessionStorage.clear()
        location.href="login.html"
    }
    balanceEnquiry(){
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Available Balance ${user.balance}`)
    }
    fundTransfer() {
        let to_acno = toacno.value;
        let amount = amt.value;
        if (to_acno in localStorage) {
            let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            console.log(to_acno);
            console.log(amount);
            console.log(user.balance);
            if (user.balance >= amount) {
                let user1 = JSON.parse(localStorage.getItem(to_acno))
                let user2 = JSON.parse(localStorage.getItem(user.account_number))               
                user1.balance = Number(user1.balance)+Number(amount);
                user2.balance -= amount;
                user.balance -= amount;
                localStorage.setItem(user1.account_number, JSON.stringify(user1))
                localStorage.setItem(user2.account_number, JSON.stringify(user2))
                sessionStorage.setItem(user.account_number, JSON.stringify(user))
                alert(`Fund Transfered Successfully`)
            }
            else {
                alert(`Insuffient Balance.`)
            }
        }
        else {
            alert(`Invalid Account Number`)
        }
    }
  





}
var bank=new Bank()