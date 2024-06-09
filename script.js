document.addEventListener('DOMContentLoaded', function() {
    // Login form logic
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const user = storedUsers.find(user => user.username === username && user.password === password);

            if (user) {
                if (user.role === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                alert('Nama pengguna atau kata sandi salah. Silakan coba lagi.');
            }
        });
    }

    // Register form logic
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;

            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = storedUsers.some(user => user.username === newUsername);

            if (userExists) {
                alert('Nama pengguna sudah ada. Silakan pilih nama pengguna lain.');
            } else {
                storedUsers.push({ username: newUsername, password: newPassword, role: 'user' });
                localStorage.setItem('users', JSON.stringify(storedUsers));
                alert('Akun berhasil dibuat. Anda sekarang dapat masuk.');
                registerForm.reset();
                document.getElementById('login-form').style.display = 'block';
                registerForm.style.display = 'none';
            }
        });
    }

    const showRegister = document.getElementById('show-register');
    if (showRegister) {
        showRegister.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('login-form').style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    const showLogin = document.getElementById('show-login');
    if (showLogin) {
        showLogin.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('login-form').style.display = 'block';
            registerForm.style.display = 'none';
        });
    }

    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (confirm('Apakah Anda ingin keluar?')) {
                window.location.href = 'login.html';
            }
        });
    }

    // Set username dan password default untuk admin
    const adminUser = { username: 'admin', password: 'admin', role: 'admin' };
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isAdminExists = storedUsers.some(user => user.role === 'admin');

    if (!isAdminExists) {
        storedUsers.push(adminUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
    }

    // Riwayat form logic
    const riwayatForm = document.getElementById('riwayat-form');
    if (riwayatForm) {
        riwayatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const noRm = document.getElementById('no-rm').value;
            const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
            const riwayat = registrations.find(reg => reg.noRm == noRm);

            if (riwayat) {
                const tbody = document.getElementById('riwayat-table').getElementsByTagName('tbody')[0];
                tbody.innerHTML = '';

                const row = tbody.insertRow();
                row.insertCell(0).textContent = riwayat.noRm;
                row.insertCell(1).textContent = riwayat.name;
                row.insertCell(2).textContent = riwayat.dob;
                row.insertCell(3).textContent = riwayat.address;
                row.insertCell(4).textContent = riwayat.phone;

                document.getElementById('riwayat-table').style.display = 'table';
            } else {
                alert('Riwayat tidak ditemukan. Silakan periksa kembali No RM Anda.');
            }
        });
    }

    // Pendaftaran pasien baru
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const dob = document.getElementById('dob').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const ktp = document.getElementById('ktp').value;

            console.log('Name:', name);
            console.log('DOB:', dob);
            console.log('Address:', address);
            console.log('Phone:', phone);
            console.log('KTP:', ktp);

            const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
            const noRm = registrations.length + 1;

            registrations.push({ noRm, ktp, name, dob, address, phone });
            localStorage.setItem('registrations', JSON.stringify(registrations));

            alert('Pendaftaran berhasil! No RM Anda adalah: ' + noRm);
            window.location.href = 'riwayat.html'; // Redirect ke halaman riwayat setelah pendaftaran
        });
    }

    //jadwal
    function loadSchedules() {
        const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
        const scheduleBody = document.getElementById('scheduleBody');
        if (scheduleBody) {
            scheduleBody.innerHTML = '';

            schedules.forEach((schedule) => {
                const row = scheduleBody.insertRow();
                row.innerHTML = `
                    <td>${schedule.doctorName}</td>
                    <td>${schedule.specialization}</td>
                    <td>${schedule.day}</td>
                    <td>${schedule.time}</td>
                `;
            });
        }
    }

    //rm
    // Function to load records from localStorage and display them in the table
    function loadRecords() {
        const records = JSON.parse(localStorage.getItem('records')) || [];
        const recordBody = document.getElementById('recordBody');
        if (recordBody) {
            recordBody.innerHTML = '';

            records.forEach((record) => {
                const row = recordBody.insertRow();
                row.innerHTML = `
                    <td>${record.recordNumber}</td>
                    <td>${record.patientName}</td>
                    <td>${record.age}</td>
                    <td>${record.diagnosis}</td>
                    <td>${record.doctor}</td>
                    <td>${record.date}</td>
                `;
            });
        }
    }

    // Load schedules and records
    loadSchedules();
    loadRecords();
});
