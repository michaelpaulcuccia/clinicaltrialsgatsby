import React from 'react';
import '../styles/main.css'
import DefaultLayout from '../layout/DefaultLayout';
import StudiesByConditionForm from '../components/StudiesByConditionForm';
import Hero from '../components/Hero';

export default function index() {
 
  return (
    <>
      <DefaultLayout>
        <Hero />
        <StudiesByConditionForm />
      </DefaultLayout>
    </>
  )
}
