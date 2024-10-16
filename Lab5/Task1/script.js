document.getElementById("info").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.getElementById("result").textContent = "";
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("error", "valid"));
  
    // зберігання fields і regex
    const fields = {
        group: {
            value: document.getElementById("group").value,
            regex: /^[А-ЯІЇЄҐа-яієїґ'’\-]+-\d{2}$/
          },
          phone: {
            value: document.getElementById("phone").value,
            regex: /^\d{3}-\d{3}-\d{2}-\d{2}$/
          },
        pib: {
            value: document.getElementById("pib").value,
            regex: /^[А-ЯЇІЄҐ][а-яїієґ']{1,20} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/
        },
        idCard: {
            value: document.getElementById("idCard").value,
            regex: /^[А-ЯІЇЄҐ]{2} №\d{6}$/,
        },
        faculty: {
            value: document.getElementById("faculty").value,
            regex: /^[А-ЯІЇЄҐ]{2,4}$/,
        },

    };
  
    let isValid = true;
  
    // перевірка fields
    for (let key in fields) {
      let field = fields[key];
      let inputElement = document.getElementById(key);
  
      if (!field.regex.test(field.value)) {
        inputElement.classList.add("error");
        isValid = false;
      } else {
        inputElement.classList.add("valid");
      }
    }
  
    // res
    if (isValid) {
        document.getElementById("result").style.display = "block"; // Показуємо результат, якщо дані вірні
        document.getElementById("result").textContent = `ПІБ: ${fields.pib.value}\nГрупа: ${fields.group.value}\nТелефон: ${fields.phone.value}\nID-картка: ${fields.idCard.value}\nФакультет: ${fields.faculty.value}`;
    } else {
        document.getElementById("result").style.display = "block"; // Показуємо повідомлення про помилки
        document.getElementById("result").textContent = "Є помилки в введених даних!";
    }
  });