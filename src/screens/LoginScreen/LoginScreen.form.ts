import * as Yup from 'yup';

export interface FormValues {
  username: string;
  password: string;
}

export const formInitialValues: FormValues = {
  username: 'jese',
  password: '12345678',
};

export const formSchema = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});
