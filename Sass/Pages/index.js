const form = document.querySelector("form");
const loadingButton = document.getElementById("submitButtonLoading");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  loadingButton.classList.add("spinner-border");
  loadingButton.classList.add("spinner-border-sm");
  const formData = new FormData(event.target);
  const response = await fetch(
    "https://formsubmit.co/ajax/murilobarbosa358@gmail.com",
    {
      method: "POST",
      body: formData,
    }
  );

  loadingButton.classList.remove("spinner-border");
  loadingButton.classList.remove("spinner-border-sm");

  const data = await response.json();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
  Swal.fire({
    icon: "success",
    color: "#fff",
    title: "Email enviado com sucesso",
    text: "Muito obrigado por entrar em contato",
    background: "#181818",
    showConfirmButton: false,
    timer: 2500,
  });
});
