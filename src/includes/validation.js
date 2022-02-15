import { Form as VeeForm, Field as VeeField } from 'vee-validate';

export default {
  install(app) {
    app.use('VeeForm', VeeForm);
    app.use('VeeField', VeeField);
  },
};
