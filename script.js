
function addContact() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (!name || !email || !address || !phone) {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("contactList");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${escapeHTML(name)}</td>
        <td>${escapeHTML(email)}</td>
        <td>${escapeHTML(address)}</td>
        <td>${escapeHTML(phone)}</td>
        <td><button onclick="deleteContact(this)">Delete</button></td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

function searchContacts() {
    let search = document.getElementById("searchInput")
        .value.toLowerCase();

    let rows = document.getElementById("contactList")
        .getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let text = rows[i].innerText.toLowerCase();

        rows[i].style.display =
            text.includes(search) ? "" : "none";
    }
}

function deleteContact(button) {
    button.parentElement.parentElement.remove();
}
