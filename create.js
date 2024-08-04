let api = "https://669a52209ba098ed61ff31bc.mockapi.io/pets";

function isValidation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('.error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error');
        parent.append(errorLabel);
    }

    let result = true;
    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {

        removeError(input)

        if (input.value == "") {
            createError(input, 'ошибка')
            result = false;
        }
    };

    // if (/^[a-z0-9_-]{3,16}$/.test(input) === false) {
    //      alert('lskls')
    // } TODO

    return result;
}

window.createForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    await createNewPets();
})

const createNewPets = async () => {
    if (isValidation === false) {
        return;
    }

    const result = await fetchNewPets(window.nameInput.value, window.photoInput.value);
    if ((result) === false) {
        alert("error");
        return;
    };

    window.createForm.reset();
}

const fetchNewPets = async (name, photo) => {
    const data = JSON.stringify({
        name: name,
        photoUrl: photo,
    });

    const resp = await fetch(api, {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return resp.status === 201;
}