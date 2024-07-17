//ini javascript

function updateResult() {
    // Mengambil nilai dari input pengguna
    let beratBadan = parseFloat(document.getElementById("input-berat-badan").value);
    let usia = parseInt(document.getElementById("input-usia").value);
    let tinggiBadan = parseFloat(document.getElementById("input-tinggi-badan").value);

    // Mengonversi tinggi badan dari cm ke meter
    let tinggiBadanM = tinggiBadan / 100;

    // Menghitung BMI
    let BMI = beratBadan / (tinggiBadanM ** 2);

    // Menentukan kategori berat badan
    let kategoriBeratBadan;
    if (BMI < 18.5) {
        kategoriBeratBadan = "Kurus";
    } else if (18.5 <= BMI && BMI < 24.9) {
        kategoriBeratBadan = "Normal";
    } else if (25 <= BMI && BMI < 29.9) {
        kategoriBeratBadan = "Kelebihan berat badan";
    } else {
        kategoriBeratBadan = "Obesitas";
    }

    // Menampilkan hasil
    document.getElementById("bmi-result").innerText = BMI.toFixed(2);
    document.getElementById("bmi-category").innerText = "Anda " + kategoriBeratBadan;
}

function resetForm() {
    // Mengatur ulang nilai form dan hasil
    document.getElementById("bmiForm").reset();
    document.getElementById("bmi-result").innerText = "";
    document.getElementById("bmi-category").innerText = "";
}
