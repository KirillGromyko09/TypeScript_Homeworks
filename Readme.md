Завдання виконувати мовою JavaScript

Крок 1: Базовий клас User
Створи клас User, який має:

Властивості:
id (унікальний ідентифікатор, автоматично генерується для кожного екземпляра);
name (ім’я);
email (електронна пошта);
приватну властивість password.
Методи:
changePassword(newPassword) — змінює пароль.
Гетер info — повертає рядок: "ID: [id], Name: [name], Email: [email]".
Додатково:

Використовуй статичну властивість для автоматичного створення id.
Крок 2: Успадкування
Створи класи Student та Teacher, які успадковують клас User.

Клас Student:
Нові властивості:
courses (масив, за замовчуванням порожній).
Нові методи:
enroll(course) — додає курс до списку студента.
Клас Teacher:
Нові властивості:
subjects (масив предметів, які викладає).
Нові методи:
addSubject(subject) — додає предмет до списку викладача.
Крок 3: Клас Course
Створи клас Course, який містить:

Властивості:
id (унікальний ідентифікатор, генерується автоматично).
name (назва курсу).
teacher (об’єкт класу Teacher, який викладає курс).
приватну властивість students (масив студентів, записаних на курс).
Методи:
addStudent(student) — додає студента до курсу.
removeStudent(studentId) — видаляє студента з курсу за його id.
listStudents() — повертає список студентів на курсі.
Крок 4: Менеджер системи
Створи клас CourseManager, який керує всією системою:

Властивості:
Масиви: users, courses.
Методи:
addUser(user) — додає користувача (викладача або студента) до системи.
addCourse(course) — додає курс до системи.
assignTeacherToCourse(courseId, teacherId) — призначає викладача до курсу.
enrollStudentToCourse(courseId, studentId) — записує студента на курс.
Крок 5: Використання статичних методів
Додай статичний метод до класу CourseManager:
generateReport() — повертає звіт про всі курси, викладачів і студентів у системі.
Крок 6: Валідація через сетери
У класах User та Course додай сетери для перевірки даних:
Для email у класі User — перевіряй, що це валідний емейл.
Для students у класі Course — перевіряй, чи це екземпляри класу Student.
Крок 7: Абстрактний клас
Додай абстрактний клас BaseModel, який містить:

Абстрактний метод validate() — має реалізовуватись у всіх дочірніх класах (User, Course).
Властивість createdAt — дата створення екземпляра (за замовчуванням поточна).

Тестування
Створи кілька користувачів (студентів і викладачів).
Створи кілька курсів.
Запиши студентів на курси, признач викладачів.
Виклич метод generateReport() для виведення повного звіту про систему.
