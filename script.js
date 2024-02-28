document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const ageInput = document.getElementById("age");
        const nameInput = document.getElementById("name");

        const age = parseInt(ageInput.value);
        const name = nameInput.value;

        // Validate input
        if (!age || !name) {
            alert("Please enter both age and name.");
            return;
        }

        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // 4 seconds delay
        });

        // Display result
        alert(result);
    });
});
