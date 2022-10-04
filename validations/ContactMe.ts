import * as yup from 'yup';

export enum ContactMeField  {
    NAME = 'name',
    EMAIL = 'email',
    MESSAGE= 'message',
    RECAPTCHA = 'recaptcha'
};

export const contactMeSchema = yup.object().shape({
    [ContactMeField.EMAIL]: yup.string().trim().required('Email is required'),
    [ContactMeField.MESSAGE]: yup.string().trim().required('Message is required'),
    [ContactMeField.RECAPTCHA]: yup.string().required()
  });