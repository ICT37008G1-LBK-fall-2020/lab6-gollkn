const askStudentName = () => {
    const studentName = prompt(`ჩაწერეთ სტუდენტის სახელი`);
    if (studentName) {
        const studentElement = createStudentElement(studentName);
        console.log(studentElement);
        insertInDiv(studentElement);
        setTimeout(() => {
            askStudentName();
        }, 200);
    }
};

const insertInDiv = (element) => {
    const refElement = document.getElementById('student-list');
    console.log(refElement);
    refElement.appendChild(element);
};

const createStudentElement = (name) => {
    const el = document.createElement('li');
    el.innerHTML = name;
    return el;
};

askStudentName();
