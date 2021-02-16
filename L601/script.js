const studentId = prompt(`ჩაწერეთ სტუდენტის ID`);

if(studentId){
    const element= document.querySelector(`[data-student-id='${studentId}']`);
    if(element){
        element.style.backgroundColor='green';
    }

}
