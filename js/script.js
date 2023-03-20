function hitungBMI() {
    let berat = document.getElementById("berat").value;             //mengambil nilai 'berat' dari html
    let tinggi = document.getElementById("tinggi").value / 100;     //mengambil nilai 'tinggi' dari html
    let bmi = berat / (tinggi * tinggi);                            //memproses dan melakukan perhitungan
    let kategori = "";                   //deklarasi variable kategori
    let keterangan = "";                 //deklarasi variable keterangan
    
    if (bmi < 18.5) {       //pengambilan kondisi saat BMI dibawah 18,5
        kategori = "Berat badan kurang";
        keterangan = "Berat badan anda kurang dari 18,5<br>Cara menambah berat badan paling baik adalah dengan mengatasi penyakit atau kondisi yang menjadi penyebab berkurangnya berat badan. Bila kondisi tersebut bisa diatasi, berat badan pun akan bertambah."
    } else if (bmi < 25) {  //pengambilan kondisi saat BMI diantara 18,5 - 24,9
        kategori = "Berat badan normal";
        keterangan = "Berat badan anda normal diantara 18,5 - 24,9<br>Memiliki berat badan yang ideal tidak harus dengan diet ekstrem yang menyiksa. Ada beberapa cara menjaga berat badan ideal dengan aman yang bisa Anda lakukan.<br>Diantaranya yaitu menyusun meal plan, bergerak aktif atau olahraga, dan jangan lewatkan sarapan"
    } else if (bmi < 30) {  //pengambilan kondisi saat BMI diantara 25,0 - 29,9
        kategori = "Berat badan berlebih";
        keterangan = "Berat badan anda lebih dari 25,0 - 29,9<br>Cara terbaik menurunkan berat badan adalah dengan berolahraga, menjaga pola makan tetap teratur."
    } else if (bmi > 30) {
        kategori = "Obesitas";  //pengambilan kondisi saat BMI diatas 30
        keterangan = "Berat badan anda lebih dari 30<br>Anda dikategorikan kedalam Overweight dimana hal ini adalah sebuah penyakit yang kompleks. Overweight dapat dipengaruhi oleh pola makan yang tidak teratur, pola tidur yang tidak sehat, dan kurangnya olahraga."
    } else {
        kategori = "Tidak diketahui"
    }

    //melempar hasil perhitungan kembali ke halaman HTML
    let hasil = "BMI Anda adalah <br>" + bmi.toFixed(1) + "<br> (" + kategori + ")";
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("keterangan").innerHTML = keterangan;

    
}

function resetForm() {  //fungsi tombol reset untuk mereset form kembali kosong
    document.getElementsByName("radio").innerHTML = "";
    document.getElementById("umur").value = "";
    document.getElementById("berat").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("keterangan").innerHTML = "";
}
