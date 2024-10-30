document.getElementById("DataPegawai").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("namaError").textContent = "";
    document.getElementById("posisiError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    let isValid = true;

    const nama = document.getElementById("nama").value.trim();
    if (nama === "") {
        document.getElementById("namaError").textContent = "Name is required.";
        isValid = false;
    }

    const posisi = document.getElementById("posisi").value.trim();
    if (posisi === "") {
        document.getElementById("posisiError").textContent = "Position is required.";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone is required.";
        isValid = false;
    }

    if (isValid) {
        alert("Anjay Sukses!");
        document.getElementById("DataPegawai").reset();
    }
});