$("#contact-form").validate({
  rules: {
    fname: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    lname: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },

    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      digits: true,
      minlength: 9,
      maxlength: 10,
    },
  },
});

$("#contact-form2").validate({
  rules: {
    fname: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    lname: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },

    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      digits: true,
      minlength: 9,
      maxlength: 10,
    },
  },
});
