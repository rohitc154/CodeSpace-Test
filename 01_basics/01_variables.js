const accountId = 4152
let accountEmail = "rohit@outlook.com"
var accountPwd = "12345"
accountCity = "Patna"
let accountState;

// accountId = 2;

accountEmail = "rohit@gmail.com"
accountPwd = "94152"
accountCity = "Rajgrih"

console.log(accountEmail)
console.table([accountId,accountEmail, accountPwd, accountCity, accountState])

/*
Prefer not to use 'var' because of issue in block scope and functional scope

undeclared variable value is undefined.
*/