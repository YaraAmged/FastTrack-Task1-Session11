$(document).ready(function () {
  const localStorageItems = localStorage.getItem("items");

  const arr = localStorageItems ? JSON.parse(localStorageItems) : [];
  const form = document.getElementById("myForm");
  function formDataToObject(formData) {
    const normalizeValues = (values) =>
      values.length > 1 ? values : values[0];
    const object = {};

    for (const ele of formData.entries()) {
      const key = ele[0];
      object[key] = normalizeValues(formData.getAll(key));
    }

    return object;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const jsonObject = formDataToObject(formData);
    arr.push(jsonObject);
    localStorage.setItem("items", JSON.stringify(arr));
    window.location.href = "/dashboard.html";
  });
});
