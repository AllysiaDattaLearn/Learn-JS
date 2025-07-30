const accountID = 100
let accountEmail = "test@gmail"
var accountPassword = "12345" //var is not used anymore due to issue with block scope and functional scope
accountCity = "Kolkata" //not a good practice but can be usedin situations
let accountState;

//accountID = 2 //node js wont allow to change value of const

accountEmail = "check@gmail"
accountPassword = "111111"
accountCity = "Mumbai"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
/* Output:
─────────┬───────────────┐
│ (index) │ Values        │
├─────────┼───────────────┤
│ 0       │ 100           │
│ 1       │ 'check@gmail' │
│ 2       │ '111111'      │
│ 3       │ 'Mumbai'      │
│ 4       │ undefined     │  */

