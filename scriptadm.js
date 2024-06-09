document.addEventListener('DOMContentLoaded', () => {
    loadSchedules();
});

function showScheduleForm() {
    document.getElementById('scheduleForm').style.display = 'block';
    document.getElementById('formTitle').innerText = 'Tambah Jadwal';
    document.getElementById('doctorName').value = '';
    document.getElementById('specialization').value = '';
    document.getElementById('day').value = '';
    document.getElementById('time').value = '';
    document.getElementById('editIndex').value = '';
}

function hideScheduleForm() {
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
    hideScheduleForm();
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
    showScheduleForm();
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

// Rekam Medis
function showRecordForm() {
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

function hideRecordForm() {
    document.getElementById('recordForm').style.display = 'none';
}

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
    hideRecordForm();
}

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
    showRecordForm();
}

function deleteRecord(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    let records = JSON.parse(localStorage.getItem('records')) || [];

    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    loadRecords();
}

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

document.addEventListener('DOMContentLoaded', function() {
    // Function to load registrations from localStorage and display them in the table
    function loadRegistrations() {
        const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
        const tbody = document.getElementById('riwayat-table').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        registrations.forEach((registration) => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${registration.noRm}</td>
                <td>${registration.name}</td>
                <td>${registration.dob}</td>
                <td>${registration.address}</td>
                <td>${registration.phone}</td>
            `;
        });
    }

    // Load registrations
    loadRegistrations();
});

document.addEventListener('DOMContentLoaded', () => {
    loadRecords();
});

// Riwayatadm
document.addEventListener('DOMContentLoaded', () => {
    loadRegistrations();
});

function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('formTitle').innerText = 'Tambah Pendaftaran';
    document.getElementById('noRm').value = '';
    document.getElementById('name').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('editIndex').value = '';
}

function hideRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'none';
}

function saveRegistration(event) {
    event.preventDefault();
    const noRm = document.getElementById('noRm').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const editIndex = document.getElementById('editIndex').value;

    let registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    if (editIndex === '') {
        const newRegistration = { noRm, name, dob, address, phone };
        registrations.push(newRegistration);
    } else {
        registrations[editIndex] = { noRm, name, dob, address, phone };
    }

    localStorage.setItem('registrations', JSON.stringify(registrations));
    loadRegistrations();
    hideRegistrationForm();
}

function editRegistration(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    document.getElementById('editIndex').value = index;
    document.getElementById('noRm').value = registrations[index].noRm;
    document.getElementById('name').value = registrations[index].name;
    document.getElementById('dob').value = registrations[index].dob;
    document.getElementById('address').value = registrations[index].address;
    document.getElementById('phone').value = registrations[index].phone;
    document.getElementById('formTitle').innerText = 'Edit Pendaftaran';
    showRegistrationForm();
}

function deleteRegistration(button) {
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1;
    let registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    registrations.splice(index, 1);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    loadRegistrations();
}

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    const tbody = document.getElementById('riwayat-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    registrations.forEach((registration, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${registration.noRm}</td>
            <td>${registration.name}</td>
            <td>${registration.dob}</td>
            <td>${registration.address}</td>
            <td>${registration.phone}</td>
            <td>
                <button onclick="editRegistration(this)">Edit</button>
                <button onclick="deleteRegistration(this)">Hapus</button>
            </td>
        `;
    });
}
function logout() {
    const confirmLogout = confirm("Apakah Anda ingin keluar?");
    if (confirmLogout) {
        window.location.href = "login.html";
    }
}
