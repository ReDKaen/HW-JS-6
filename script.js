function createNewUser(){
    const enterFirstName = prompt("Введіть ім'я");
    const enterLastName = prompt("Введіть прізвище");
    const enterAge = prompt("Введіть вашу дату народження")


    const newUser = {
        firstName: `${enterFirstName }`,
        lastName: `${enterLastName }`,
        birthday: `${enterAge}`,
        getLogin: function(){
            const firstLower = this.firstName.charAt(0).toLowerCase();
            const login = firstLower + this.lastName.toLowerCase();
            return login;
        },
        getAge: function(){
            const userBirthday = new Date(this.birthday);
            const thisTime = new Date();
            const userAge = thisTime - userBirthday;
            const ageDate = new Date(userAge);
            const age = ageDate.getUTCFullYear();
            return age;
        },
        getPassword: function(){
            const firstToUppper = this.firstName.charAt(0).toUpperCase();
            const lastNameToLower = this.lastName.toLowerCase();
            const userYearsBirthday = new Date(this.birthday);
            const returnPassword = firstToUppper + lastNameToLower + userYearsBirthday.getFullYear();
            return returnPassword;
        }
    }
    return newUser;
}


const user = createNewUser();
const login = user.getLogin();
const birthday = user.getAge();
const password = user.getPassword();
console.log("Логін користувача:", login);
console.log("Вік користувача:", birthday);
console.log("Пароль користувача:", password);
