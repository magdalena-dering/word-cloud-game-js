import React from 'react';
import { mount } from '@cypress/react';
import LogIn from '../../src/screens/login/login';
import { ProvidersWrapper } from '../../src/testUtils/renderContext';

describe('render LogIn component', () => {
  it('render heading', () => {
    mount(
      <ProvidersWrapper>
        <LogIn />
      </ProvidersWrapper>,
    );
    cy.contains('Word Cloud Game').should('be.visible');
  });

  it('disable button and display error when input is empty on button click', () => {
    mount(
      <ProvidersWrapper>
        <LogIn />
      </ProvidersWrapper>,
    );
    cy.get('button').contains('Log in').click();
    cy.get('p')
      .contains('* This field is required')
      .should('be.visible');
    cy.get('button').should('be.disabled');
  });

  it('type user name and check if button redirects to "game" page', () => {
    mount(
      <ProvidersWrapper>
        <LogIn />
      </ProvidersWrapper>,
    );
    cy.get('input').type('John Doe');
    cy.get('button').contains('Log in').click();
    cy.url({ timeout: 3000 }).should('includes', '/game');
  });
});
