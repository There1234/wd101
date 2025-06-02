let userForm = document.getElementById("user-form");
const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = []
    }
    return entries;
}
let userEntries = retrieveEntries();
const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTermsandConditions}</td>`;
        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");

    const table = `<div class="bg-white shadow-md rounded border border-gray-300 px-8 pt-6 pb-8 mb-4 max-w-4xl mx-auto">
  <p class="text-2xl font-bold mb-4 text-center">Entries</p>
  <table class="table-auto w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        <th class="border px-4 py-2">Name</th>
        <th class="border px-4 py-2">Email</th>
        <th class="border px-4 py-2">Password</th>
        <th class="border px-4 py-2">Dob</th>
        <th class="border px-4 py-2">Accepted terms?</th>
      </tr>
    </thead>
    <tbody>
      ${tableEntries}
    </tbody>
  </table>
</div>`;
    let details = document.getElementById("user-entries");
    details.innerHTML = table;
}


const saveUserForm = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let acceptTermsandConditions = document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptTermsandConditions
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();

}
userForm.addEventListener("submit", saveUserForm)
displayEntries();

