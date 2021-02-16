const tableDataKeys = [ 'FirstName', 'LastName', 'PersonalNumber' ];
const insertInDiv = (element) => {
    const refElement = document.getElementById('student-list');
    refElement.appendChild(element);
};

const createTable = (students) => {
    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');
    const tHead = document.createElement('thead');
    tableDataKeys.forEach((item) => {
        let th = document.createElement('th');
        th.innerHTML = item;
        tHead.appendChild(th);
    });
    const tBody = document.createElement('tbody');
    for (let i = 0; i < students.length; i++) {
        const studentItem = students[i];
        const tr = document.createElement('tr');
        tableDataKeys.forEach((item) => {
            let td = document.createElement('td');
            td.innerHTML = studentItem[item];
            tr.appendChild(td);
        });
        tBody.appendChild(tr);
    }
    table.appendChild(tHead);
    table.appendChild(tBody);
    console.log(table);
    return table;
};

const tableElement = createTable([
        {
            FirstName: 'gia',
            LastName: 'morata',
            PersonalNumber: 1234,
        },
        {
            FirstName: 'gela',
            LastName: 'amaglobeli',
            PersonalNumber: 1234,
        },
    ],
);

insertInDiv(tableElement);
