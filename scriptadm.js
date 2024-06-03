//jadwal
document.addEventListener('DOMContentLoaded', () => {
    loadSchedules();
});

function showForm() {
    document.getElementById('scheduleForm').style.display = 'block';
    document.getElementById('formTitle').innerText = 'Tambah Jadwal';
    document.getElementById('doctorName').value = '';
    document.getElementById('specialization').value = '';
    document.getElementById('day').value = '';
    document.getElementById('time').value = '';
    document.getElementById('editIndex').value = '';
}

function hideForm() {
    document.getElementById('scheduleForm').style.display = 'none';
}

function saveSchedule(event) {
    event.preventDefault();
    const doctorName = document.getElementById('doctorName').value;
    const specialization = document.getElementById('specialization').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const editIndex = document.getElementById('editIndex').value;

    let schedules = JSON.parse(localStorage.getItem('schedules')) || [];

    if (editIndex === '') {
        const newSchedule = { doctorName, specialization, day, time };
        schedules.push(newSchedule);
    } else {
        schedules[editIndex] = { doctorName, specialization, day, time };
    }

    localStorage.setItem('schedules', JSON.stringify(schedules));
    loadSchedules();
    hideForm();
}

function editSchedule(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];

    document.getElementById('editIndex').value = index;
    document.getElementById('doctorName').value = schedules[index].doctorName;
    document.getElementById('specialization').value = schedules[index].specialization;
    document.getElementById('day').value = schedules[index].day;
    document.getElementById('time').value = schedules[index].time;
    document.getElementById('formTitle').innerText = 'Edit Jadwal';
    showForm();
}

function deleteSchedule(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    let schedules = JSON.parse(localStorage.getItem('schedules')) || [];

    schedules.splice(index, 1);
    localStorage.setItem('schedules', JSON.stringify(schedules));
    loadSchedules();
}

function loadSchedules() {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const scheduleBody = document.getElementById('scheduleBody');
    scheduleBody.innerHTML = '';

    schedules.forEach((schedule, index) => {
        const row = scheduleBody.insertRow();
        row.innerHTML = `
            <td>${schedule.doctorName}</td>
            <td>${schedule.specialization}</td>
            <td>${schedule.day}</td>
            <td>${schedule.time}</td>
            <td>
                <button onclick="editSchedule(this)">Edit</button>
                <button onclick="deleteSchedule(this)">Hapus</button>
            </td>
        `;
    });
}

//rm
// Function to show the form for adding/editing a record
function showForm() {
    document.getElementById('recordForm').style.display = 'block';
    document.getElementById('formTitle').innerText = 'Tambah Rekam Medis';
    document.getElementById('recordNumber').value = '';
    document.getElementById('patientName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('diagnosis').value = '';
    document.getElementById('doctor').value = '';
    document.getElementById('date').value = '';
    document.getElementById('editIndex').value = '';
}

function hideForm() {
    document.getElementById('recordForm').style.display = 'none';
}

// Function to save a new or edited record
function saveRecord(event) {
    event.preventDefault();
    const recordNumber = document.getElementById('recordNumber').value;
    const patientName = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const diagnosis = document.getElementById('diagnosis').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const editIndex = document.getElementById('editIndex').value;

    let records = JSON.parse(localStorage.getItem('records')) || [];

    if (editIndex === '') {
        const newRecord = { recordNumber, patientName, age, diagnosis, doctor, date };
        records.push(newRecord);
    } else {
        records[editIndex] = { recordNumber, patientName, age, diagnosis, doctor, date };
    }

    localStorage.setItem('records', JSON.stringify(records));
    loadRecords();
    hideForm();
}

// Function to edit an existing record
function editRecord(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    const records = JSON.parse(localStorage.getItem('records')) || [];

    document.getElementById('editIndex').value = index;
    document.getElementById('recordNumber').value = records[index].recordNumber;
    document.getElementById('patientName').value = records[index].patientName;
    document.getElementById('age').value = records[index].age;
    document.getElementById('diagnosis').value = records[index].diagnosis;
    document.getElementById('doctor').value = records[index].doctor;
    document.getElementById('date').value = records[index].date;
    document.getElementById('formTitle').innerText = 'Edit Rekam Medis';
    showForm();
}

// Function to delete an existing record
function deleteRecord(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    let records = JSON.parse(localStorage.getItem('records')) || [];

    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    loadRecords();
}

// Function to load records from localStorage and display them in the table
function loadRecords() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const recordBody = document.getElementById('recordBody');
    recordBody.innerHTML = '';

    records.forEach((record, index) => {
        const row = recordBody.insertRow();
        row.innerHTML = `
            <td>${record.recordNumber}</td>
            <td>${record.patientName}</td>
            <td>${record.age}</td>
            <td>${record.diagnosis}</td>
            <td>${record.doctor}</td>
            <td>${record.date}</td>
            <td>
                <button onclick="editRecord(this)">Edit</button>
                <button onclick="deleteRecord(this)">Hapus</button>
            </td>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadRecords();
});
