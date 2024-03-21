import { faker } from '@faker-js/faker';
import {
  InsertCasePayload,
  InsertCaseHeadersPayload,
  MatchCasePayload,
  MatchCaseHeadersPayload,
} from 'cypress/types/casePostingModule';

export const generateInsertCasePayload = (): InsertCasePayload => {
  return {
    query: `mutation ($data: LegalCaseInput) {
     insertLegalCase(data: $data) {
     legalCase {
     caseNumber
        }
        authToken
      }
    }`,
    variables: {
      data: {
        categories: [3],
        matchingZip: '00001',
        state: 'XX',
        zip: '00001',
        county: 'NOWHERESVILLE',
        city: 'Nowheresville',
        client: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: 'cypressapitest@guerrillamail.com',
          zip: '00001',
        },
        shortDesc: 'Cypress API Test ' + faker.lorem.word(),
        longDesc: 'Cypress API Test ' + faker.lorem.words(),
      },
    },
  };
};

export const generateInsertCaseHeadersPayload = (): InsertCaseHeadersPayload => {
  return {
    'Content-Type': Cypress.env('Content-Type'),
    Origin: Cypress.env('Origin'),
    'x-api-key': Cypress.env('x-api-key'),
  };
};

export const generateMatchCaseHeadersPayload = (): MatchCaseHeadersPayload => {
  const token = Cypress.env('token');
  return {
    Authorization: `bearer ${token}`,
    Origin: Cypress.env('Origin'),
    'x-api-key': Cypress.env('x-api-key'),
  };
};

export const generateMatchCasePayload = (): MatchCasePayload => {
  const caseNumberValue = Cypress.env('caseNumber');
  const caseNumber = `${caseNumberValue}`;
  cy.log(caseNumber);
  return {
    query: `mutation {
        matchLegalCase(caseNumber: "${caseNumber}") {
        matched,
        matchedToStandardType,
        matchedToCaseLeadsType,
        matchedToSpecialDealsType,
        matchedToMatchedLeadsType,
        matchedToMembershipPlusType,
        matchedToDirectoryServiceType

      }

    }`,
  };
};
