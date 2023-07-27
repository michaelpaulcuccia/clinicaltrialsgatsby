import React from 'react';
import '../styles/main.css'
import DefaultLayout from '../layout/DefaultLayout';
import Container from '../components/Container';
import StudiesByConditionForm from '../components/StudiesByConditionForm';
import Hero from '../components/Hero';
import IntroBanner from '../components/IntroBanner';

export default function index() {
 
  return (
    <>
      <DefaultLayout>
        <Container>
          <Hero />
        </Container>
        <IntroBanner />
        <StudiesByConditionForm />
      </DefaultLayout>
    </>
  )
}
