import React from 'react';
import '../styles/main.css'
import DefaultLayout from '../layout/DefaultLayout';
import StudiesByConditionForm from '../components/StudiesByConditionForm';

export default function index() {
 
  return (
    <DefaultLayout>
     <StudiesByConditionForm />
    </DefaultLayout>

  )
}
