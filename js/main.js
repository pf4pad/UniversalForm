$(document).ready(function () {
      /* Стилизация селекта */
      $('.select').select2({
        placeholder: "Выбирите возраст",
        allowClear: true
      });

      /* Валидация формы */
      $('#form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
          },

        },
        messages: {
          name: {
            required: "Поле 'Имя' обязательно к заполнению",
            minlength: "Введите не менее 2-х символов в поле 'Имя'"

          },
          email: {
            required: "Поле 'Email' обязательно к заполнению",
            email: "Необходим формат адреса email"
          },
          phone: {
            required: "Поле 'Телефон' обязательно к заполнению",
          },
          submitHandler: function (form) {
            form.submit(function () { //Change
              var th = $(this);
              $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
              }).done(function () {
                alert("Thank you!");
                setTimeout(function () {
                  // Done Functions
                  th.trigger("reset");
                }, 1000);
              });
              return false;
            });

          },
        }
      });

      $('.phone').mask('+38 (999) 999-99-99');
      $('#form').disableAutoFill();



    });



