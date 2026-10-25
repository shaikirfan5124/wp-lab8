
const form = document.getElementById("userForm");

// Form page
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const genderInput = document.querySelector(
            'input[name="gender"]:checked'
        );

        const user = {
            "Name": document.getElementById("name").value.trim(),
            "Gender": genderInput.value,
            "Mobile Number": document.getElementById("mobile").value.trim(),
            "Email ID": document.getElementById("email").value.trim(),
            "City": document.getElementById("city").value.trim(),
            "State": document.getElementById("state").value.trim(),
            "Country": document.getElementById("country").value.trim()
        };

        sessionStorage.setItem("userDetails", JSON.stringify(user));

        window.location.href = "display.html";
    });
}

// Display page
const result = document.getElementById("result");

if (result) {
    const savedData = sessionStorage.getItem("userDetails");

    if (savedData) {
        const user = JSON.parse(savedData);

        for (const key in user) {
            const row = document.createElement("div");
            row.className = "detail";

            const label = document.createElement("strong");
            label.textContent = key + ": ";

            const value = document.createElement("span");
            value.textContent = user[key];

            row.appendChild(label);
            row.appendChild(value);
            result.appendChild(row);
        }
    } else {
        result.textContent = "No details found. Please fill in the form first.";
    }
}
