function createNewUser(){
    const enterFirstName = prompt("Введіть ім'я");
    const enterLastName = prompt("Введіть прізвище");
    const enterAge = prompt("Введіть вашу дату народження")
    const [day,month,year] = enterAge.split(".")


    const newUser = {
        firstName: `${enterFirstName }`,
        lastName: `${enterLastName }`,
        birthday: `${day}.${month}.${year} `,
        getLogin: function(){
            const firstLower = this.firstName.charAt(0).toLowerCase();
            const login = firstLower + this.lastName.toLowerCase();
            return login;
        },
        getAge: function(){
            const userBirthday = new Date(year, month - 1,day);
            const thisTime = new Date();
            const userAge = thisTime - userBirthday;
            const ageDate = new Date(userAge);
            const age = ageDate.getUTCFullYear()-1970;
            return age;
        },
        getPassword: function(){
            const firstToUppper = this.firstName.charAt(0).toUpperCase();
            const lastNameToLower = this.lastName.toLowerCase();
            const userYearsBirthday = new Date(year, month - 1,day);
            const returnPassword = firstToUppper + lastNameToLower + userYearsBirthday.getFullYear();
            return returnPassword;
        }
    }
    return newUser;
}


const user = createNewUser();
const login = user.getLogin();
const age = user.getAge();
const password = user.getPassword();
console.log("Логін користувача:", login);
console.log("Вік користувача:", age);
console.log("Пароль користувача:", password);
