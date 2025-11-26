const form = document.getElementById("myForm");
const age = document.getElementById("age");
const nameInput = document.getElementById("name");

const checkAge = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age.value) > 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000)
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (age.value.trim().length === 0 || nameInput.value.trim().length === 0) {
    alert("Please enter valid details.");
    return;
  }

  checkAge()
    .then((data) => {
      alert(data);
      form.submit();
    })
    .catch((err) => {
      alert(err);
      form.submit();
    });
});
