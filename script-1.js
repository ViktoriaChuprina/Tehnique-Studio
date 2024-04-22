class User{
    constructor(name, surname, email, password, date, phone, gender){
        this.name = 'name'
        this.surname = 'surname'
        this.email = 'email'
        this.password = 'password'
        this.date = 'date'
        this.phone = 'phone'
        this.gender = 'gender'
    }
}
let user = new UserActivation('Вікторія', 'Чуприна', 'viktoriachuprina07@gmail.com', 'Aasdfghjkl2007', '19.04.07', '+3800674233031', 'female')

$("#signup").click(function() {
    if ($(".form-class").hasClass("submit-btn")) {
      $(".form-class").removeClass("submit-btn");
    }
  }  );