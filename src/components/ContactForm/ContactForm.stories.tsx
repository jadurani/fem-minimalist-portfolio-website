import React from 'react';
import { Meta } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  component: ContactForm,
  title: 'Components/ContactForm',
} as Meta;

export const Default = () => (
  <ContactForm />
);
