const student = "Воронин Никита Валерьевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

//Функция подсчета возраста
function calculate_age(birthday) {
    now = new Date();

    birthday = new Date (birthday);
    birthday.setMonth(birthday.getMonth()-1);

    birthday_this_year = new Date (birthday);
    birthday_this_year.setFullYear(now.getFullYear());

    age_diff = new Date (now  - birthday);
    age = Math.abs(age_diff.getFullYear() -1970 );

    if ((now - birthday_this_year) < 0) {
        age = age - 1;
    } 
    return 
  }

//Я пытался сделать так как вы объяснили, но допустил какую-то ошибку. 
//По скольку мне всеже нужно сдать работу сегодня мне пришлось кое что "одолжить"
const guests = [
    {name:"Пономарев Андрей Алексеевич",sex:"мужчина",birth:'11.12.1980'},
    {name:"Рыбакова Алина Семёновна",sex:"женщина",birth:'16.04.1974'},
    {name:"Молчанов Даниил Ильич",sex:"мужчина",birth:'21.03.1984'},
    {name:"Смирнова София Львовна",sex:"женщина",birth:'02.01.1987'},
    {name:"Владимиров Артём Григорьевич",sex:"мужчина",birth:'07.12.1990'},
    {name:"Маслова Елизавета Егоровна",sex:"женщина",birth:'10.10.1997'},
    {name:"Назарова Вера Романовна",sex:"женщина",birth:'01.05.1983'},
    {name:"Иванов Иван Фёдорович",sex:"мужчина",birth:'05.05.1999'},
    {name:"Дмитриев Алексей Григорьевич",sex:"мужчина",birth:'12.11.1998'},
    {name:"Овчинников Платон Александрович",sex:"мужчина",birth:'26.05.1999'},
    {name:"Мартынова Софья Тимуровна",sex:"женщина",birth:'07.06.1995'},
    {name:"Соколов Михаил Адамович",sex:"мужчина",birth:'11.03.1979'}
]
  
// Всего гостей
const guests_amount = guests.length

// Гостей мужского пола
const male_guests = guests.filter(guest => guest.sex ==  "мужчина").length //Тут используется filter о котором вы упоминали т.к. я увидел его в другой работе и мне он понравился

// Гостей женского пола
const female_guests = guests.filter(guest => guest.sex == "женщина").length

//Выводит в консоль данные подсчета.
console.log(`Всего гостей: ${guests_amount}`)
console.log(`Мужчин: ${male_guests}`)
console.log(`Женщин: ${female_guests}`)
console.log('Список гостей:')

//Цикл перебирающий гостей
for (let guest_index in guests) {
    let guest = guests[guest_index]

    // Преобразование полного имени
    full_name = guest.name.split(' ');
    full_name = `${full_name[0]} ${full_name[1].substring(0, 1)}. ${full_name[2].substring(0, 1)}.`
    
    // Преобразования пола
    sex = guest.sex == "мужчина" ? "М" : "Ж";
    
    // Подсчет возраста
    birth = guest.birth.split('.')
    age = calculate_age(new Date(birth[2], birth[1], birth[0]))
    console.log(`${full_name}, ${sex}, ${age}`)

}
/*let men = [];
let women =[];
let date = new Date()

console.log(`Всего гостей: ${guests.length}`)
console.log(`Список гостей`);
for (let i = 0; i < guests.length; i++) {
    //console.log(guests[i]);
    //if (guests[i].sex);
    let sex = guests[i];
    if (sex == "мужчина") {
        men.push(sex);
        return 'М'
    } else if (sex == "женщина") {
        women.push(sex);
        return 'Ж'
    }

let guest = guests[i];

    let guest_surname = guest.name.split(''[0]);
    let guest_name = guest.name.split(' ')[1];
    let guest_lastname = guest.name.split(' ')[2];
    let guest_birthday = new Date(
        guest.date_of_birth.split('.')[2],
        guest.date_of_birth.split('.')[1] - 1,
        guest.date_of_birth.split('.')[0]
    )
let guest_age = (date - guest_birthday) / (1000*60*60*24*365);
    console.log(`${guest_surname} ${guest_name[0]}.${guest_lastname[0]}., ${sex(guest)}, Возраст:${guest_age}`);
    
}

console.log(`Мужчин: ${men.length}`);
console.log(`Женщин: ${women.length}`)*/
