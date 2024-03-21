import { EndpointToken } from '../../types/tokenEndpoint';
import {
  PostArchiveCasePayload,
  PostRestoreCasePayload,
  PostEngageCasePayload,
  PostCompleteCasePayload,
  GetAttorneyCaseDetailsPayload,
  GetAttorneyListCasesPayload,
  GetIntakeQuestionsPayload,
  PatchUpdatesCaseDetailsPayload,
  PatchUpdatesCaseDetailsIccPayload,
} from '../../types/legalCaseController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
import cypress from 'cypress';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/* Legal Case Controller */

const postArchiveCaseResponse = (
  caseResponse: PostArchiveCasePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PostArchiveCasePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/archive';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postRestoreCaseResponse = (
  caseResponse: PostRestoreCasePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PostRestoreCasePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/restore';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postEngageCaseResponse = (
  caseResponse: PostEngageCasePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PostEngageCasePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/engage';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postCompleteCaseResponse = (
  caseResponse: PostCompleteCasePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PostCompleteCasePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/complete';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getAttorneyCaseDetailsResponse = (
  caseResponse: GetAttorneyCaseDetailsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: GetAttorneyCaseDetailsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getAttorneyListCasesResponse = (
  caseResponse: GetAttorneyListCasesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: GetAttorneyListCasesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/';
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getIntakeQuestionsResponse = (
  caseResponse: GetIntakeQuestionsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: GetIntakeQuestionsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}/answered-questions`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const patchUpdatesCaseDetailsResponse = (
  caseResponse: PatchUpdatesCaseDetailsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=liked,opened`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const patchUpdatesCaseDetailsIccResponse = (
  caseResponse: PatchUpdatesCaseDetailsIccPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsIccPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=icc`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/************ Negative Testing - Schema Validation *************************/

/********* POST Archive Case *********/

/* Empty Body Payload Request */
const archiveEmptyPayloadRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/archive';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const archiveNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/archive';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [' '],
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Request Method */
const archiveInvalidRequestMethod = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/archive';
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* Invalid Endpoint Request */
const archiveInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/archive1';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/********* POST Restore Archive Case *********/

/* Empty Body Payload Request */
const restoreEmptyPayloadRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/restore';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const restoreNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/restore';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [''],
    })
    .then((response) => {
      expect(response.status).to.eq(500);
    });
};

/* Invalid Request Method */
const restoreInvalidRequestMethod = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/restore';
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* Invalid Endpoint Request */
const restoreInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/restore1';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/********* POST Engage Case *********/

/* Empty Body Payload Request */
const engageEmptyPayloadRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/engage';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const engageNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/engage';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [''],
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Request Method */
const engageInvalidRequestMethod = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/engage';
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* Invalid Endpoint Request */
const engageInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/engage1';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/********* POST Complete Case *********/

/* Empty Body Payload Request */
const completeEmptyPayloadRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/complete';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const completeNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/complete';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [''],
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Request Method */
const completeInvalidRequestMethod = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/complete';
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* Invalid Endpoint Request */
const completeInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = '/attorney/cases/complete1';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: [`${caseNumber}`],
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/********* GET Attorney Cases *********/

/* Invalid Request Method */
const attorneyCasesInvalidRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases/';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* Invalid Endpoint Request */
const attorneyCasesInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = '/attorney/cases1';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/********* GET Attorney Cases Details *********/

/* Invalid Request Method */
const attorneyCaseDetailsInvalidRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* No Case Number Request */
const attorneyCaseDetailsNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = `/attorney/cases/caseNumber0000`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Endpoint Request */
const attorneyCaseDetailsInvalidEndpointRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases1/${caseNumber}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/********* GET Intake Questions *********/

/* Invalid Request Method */

const intakeQuestionsInvalidRequest = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}/answered-questions`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* No Case Number Request */
const intakeQuestionsNoCaseNumber = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = `/attorney/cases/${''}/answered-questions`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Endpoint Request */
const intakeQuestionsInvalidEndpoint = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases1/${caseNumber}/answered-questions`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/********* PATCH Update Details: like,opened *********/

/* Empty Body Payload Request */
const updateDetailsLikeOpenedEmptyBodyPayload = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=liked,opened`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: '',
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const updateDetailsLikeOpenedNoCaseNumber = (
  caseResponse: PatchUpdatesCaseDetailsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = `/attorney/cases/caseNumber0000?fields=liked,opened`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};
/* Invalid Request Method */
const updateDetailsLikeOpenedInvalidRequest = (
  caseResponse: PatchUpdatesCaseDetailsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=liked,opened`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};
/* Invalid Endpoint Request */
const updateDetailsLikeOpenedInvalidEndpoint = (
  caseResponse: PatchUpdatesCaseDetailsPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases1/${caseNumber}?fields=liked,opened`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/********* PATCH Update Details: Icc *********/

/* Empty Body Payload Request */
const updateDetailsIccEmptyBodyPayload = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=icc`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: '',
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* No Case Number Request */
const updateDetailsIccNoCaseNumber = (
  caseResponse: PatchUpdatesCaseDetailsIccPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsIccPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPoint = `/attorney/cases/caseNumber0000?fields=icc`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* Invalid Request Method */
const updateDetailsIccInvalidRequest = (
  caseResponse: PatchUpdatesCaseDetailsIccPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsIccPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases/${caseNumber}?fields=icc`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* Invalid Endpoint Request */
const updateDetailsIccInvalidEndpoint = (
  caseResponse: PatchUpdatesCaseDetailsIccPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PatchUpdatesCaseDetailsIccPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPoint = `/attorney/cases1/${caseNumber}?fields=icc`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

Cypress.Commands.add('postArchiveCaseResponse', postArchiveCaseResponse);
Cypress.Commands.add('postRestoreCaseResponse', postRestoreCaseResponse);
Cypress.Commands.add('postEngageCaseResponse', postEngageCaseResponse);
Cypress.Commands.add('postCompleteCaseResponse', postCompleteCaseResponse);
Cypress.Commands.add('getAttorneyCaseDetailsResponse', getAttorneyCaseDetailsResponse);
Cypress.Commands.add('getAttorneyListCasesResponse', getAttorneyListCasesResponse);
Cypress.Commands.add('getIntakeQuestionsResponse', getIntakeQuestionsResponse);
Cypress.Commands.add('patchUpdatesCaseDetailsResponse', patchUpdatesCaseDetailsResponse);
Cypress.Commands.add('patchUpdatesCaseDetailsIccResponse', patchUpdatesCaseDetailsIccResponse);
Cypress.Commands.add('archiveEmptyPayloadRequest', archiveEmptyPayloadRequest);
Cypress.Commands.add('archiveNoCaseNumber', archiveNoCaseNumber);
Cypress.Commands.add('archiveInvalidRequestMethod', archiveInvalidRequestMethod);
Cypress.Commands.add('archiveInvalidEndpointRequest', archiveInvalidEndpointRequest);
Cypress.Commands.add('restoreEmptyPayloadRequest', restoreEmptyPayloadRequest);
Cypress.Commands.add('restoreNoCaseNumber', restoreNoCaseNumber);
Cypress.Commands.add('restoreInvalidRequestMethod', restoreInvalidRequestMethod);
Cypress.Commands.add('restoreInvalidEndpointRequest', restoreInvalidEndpointRequest);
Cypress.Commands.add('engageEmptyPayloadRequest', engageEmptyPayloadRequest);
Cypress.Commands.add('engageNoCaseNumber', engageNoCaseNumber);
Cypress.Commands.add('engageInvalidRequestMethod', engageInvalidRequestMethod);
Cypress.Commands.add('engageInvalidEndpointRequest', engageInvalidEndpointRequest);
Cypress.Commands.add('completeEmptyPayloadRequest', completeEmptyPayloadRequest);
Cypress.Commands.add('completeNoCaseNumber', completeNoCaseNumber);
Cypress.Commands.add('completeInvalidRequestMethod', completeInvalidRequestMethod);
Cypress.Commands.add('completeInvalidEndpointRequest', completeInvalidEndpointRequest);
Cypress.Commands.add('attorneyCasesInvalidRequest', attorneyCasesInvalidRequest);
Cypress.Commands.add('attorneyCasesInvalidEndpointRequest', attorneyCasesInvalidEndpointRequest);
Cypress.Commands.add('attorneyCaseDetailsInvalidRequest', attorneyCaseDetailsInvalidRequest);
Cypress.Commands.add('attorneyCaseDetailsNoCaseNumber', attorneyCaseDetailsNoCaseNumber);
Cypress.Commands.add(
  'attorneyCaseDetailsInvalidEndpointRequest',
  attorneyCaseDetailsInvalidEndpointRequest,
);
Cypress.Commands.add('intakeQuestionsInvalidRequest', intakeQuestionsInvalidRequest);
Cypress.Commands.add('intakeQuestionsNoCaseNumber', intakeQuestionsNoCaseNumber);
Cypress.Commands.add('intakeQuestionsInvalidEndpoint', intakeQuestionsInvalidEndpoint);
Cypress.Commands.add(
  'updateDetailsLikeOpenedEmptyBodyPayload',
  updateDetailsLikeOpenedEmptyBodyPayload,
);
Cypress.Commands.add('updateDetailsLikeOpenedNoCaseNumber', updateDetailsLikeOpenedNoCaseNumber);
Cypress.Commands.add(
  'updateDetailsLikeOpenedInvalidRequest',
  updateDetailsLikeOpenedInvalidRequest,
);
Cypress.Commands.add(
  'updateDetailsLikeOpenedInvalidEndpoint',
  updateDetailsLikeOpenedInvalidEndpoint,
);
Cypress.Commands.add('updateDetailsIccEmptyBodyPayload', updateDetailsIccEmptyBodyPayload);
Cypress.Commands.add('updateDetailsIccNoCaseNumber', updateDetailsIccNoCaseNumber);
Cypress.Commands.add('updateDetailsIccInvalidRequest', updateDetailsIccInvalidRequest);
Cypress.Commands.add('updateDetailsIccInvalidEndpoint', updateDetailsIccInvalidEndpoint);
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Create a new Legal Case in the API.
       * @param {PostArchiveCasePayload} postArchiveCaseResponse - The postArchiveCaseResponse information to case response
       * @param {PostRestoreCasePayload} postRestoreCaseResponse - The postRestoreCaseResponse information to case response
       * @param {postEngageCaseResponse} postEngageCaseResponse - The postEngageCaseResponse information to case response
       * @param {postCompleteCaseResponse} postCompleteCaseResponse - The postCompleteCaseResponse information to case response
       * @param {getAttorneyCaseDetailsResponse} getAttorneyCaseDetailsResponse - The getAttorneyCaseDetailsResponse information gets the case details by case number response
       * @param {getAttorneyListCasesResponse} getAttorneyListCasesResponse - The getAttorneyListCasesResponse information gets the attorney's list of cases response
       * @param {getIntakeQuestionsResponse} getIntakeQuestionsResponse - The getIntakeQuestionsResponse information get Intake Questions response
       * @param {patchUpdatesCaseDetailsResponse} patchUpdatesCaseDetailsResponse - The getIntakeQuestionsResponse information updates the case details by case number "opened", "liked" response
       * @param {patchUpdatesCaseDetailsIccResponse} patchUpdatesCaseDetailsIccResponse - The getIntakeQuestionsResponse information updates the case details by case number "icc" response
       * @param {archiveEmptyPayloadRequest} archiveEmptyPayloadRequest - The archiveEmptyPayloadRequest empty body payload request negative test schema validation
       * @param {archiveNoCaseNumber} archiveNoCaseNumber - The archiveNoCaseNumber no case number request negative test schema validation
       * @param {archiveInvalidRequestMethod} archiveInvalidRequestMethod - The archiveInvalidRequestMethod invalid request method negative test schema validation
       * @param {archiveInvalidEndpointRequest} archiveInvalidEndpointRequest - The archiveInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {restoreEmptyPayloadRequest} restoreEmptyPayloadRequest - The restoreEmptyPayloadRequest empty body payload request negative test schema validation
       * @param {restoreNoCaseNumber} restoreNoCaseNumber - The restoreNoCaseNumber no case number request negative test schema validation
       * @param {restoreInvalidRequestMethod} restoreInvalidRequestMethod - The restoreInvalidRequestMethod invalid request method negative test schema validation
       * @param {restoreInvalidEndpointRequest} restoreInvalidEndpointRequest - The restoreInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {engageEmptyPayloadRequest} engageEmptyPayloadRequest - The engageEmptyPayloadRequest empty body payload request negative test schema validation
       * @param {engageNoCaseNumber} engageNoCaseNumber - The engageNoCaseNumber no case number request negative test schema validation
       * @param {engageInvalidRequestMethod} engageInvalidRequestMethod - The engageInvalidRequestMethod invalid request method negative test schema validation
       * @param {engageInvalidEndpointRequest} engageInvalidEndpointRequest - The engageInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {completeEmptyPayloadRequest} completeEmptyPayloadRequest - The completeEmptyPayloadRequest empty body payload request negative test schema validation
       * @param {completeNoCaseNumber} completeNoCaseNumber - The completeNoCaseNumber no case number request negative test schema validation
       * @param {completeInvalidRequestMethod} completeInvalidRequestMethod - The completeInvalidRequestMethod invalid request method negative test schema validation
       * @param {completeInvalidEndpointRequest} completeInvalidEndpointRequest - The completeInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {attorneyCasesInvalidRequest} attorneyCasesInvalidRequest - The attorneyCasesInvalidRequest invalid request method negative test schema validation
       * @param {attorneyCasesInvalidEndpointRequest} attorneyCasesInvalidEndpointRequest - The attorneyCasesInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {attorneyCaseDetailsInvalidRequest} attorneyCaseDetailsInvalidRequest - The attorneyCaseDetailsInvalidRequest invalid request method negative test schema validation
       * @param {attorneyCaseDetailsNoCaseNumber} attorneyCaseDetailsNoCaseNumber - The attorneyCaseDetailsNoCaseNumber no case number request negative test schema validation
       * @param {attorneyCaseDetailsInvalidEndpointRequest} attorneyCaseDetailsInvalidEndpointRequest - The attorneyCaseDetailsInvalidEndpointRequest invalid endpoint URL negative test schema validation
       * @param {intakeQuestionsInvalidRequest} intakeQuestionsInvalidRequest - The intakeQuestionsInvalidRequest invalid request method negative test schema validation
       * @param {intakeQuestionsNoCaseNumber} intakeQuestionsNoCaseNumber - The intakeQuestionsNoCaseNumber no case number request negative test schema validation
       * @param {intakeQuestionsInvalidEndpoint} intakeQuestionsInvalidEndpoint  - The intakeQuestionsInvalidEndpoint invalid endpoint URL negative test schema validation
       * @param {updateDetailsLikeOpenedEmptyBodyPayload} updateDetailsLikeOpenedEmptyBodyPayload - The updateDetailsLikeOpenedEmptyBodyPayload empty body payload request negative test schema validation
       * @param {updateDetailsLikeOpenedNoCaseNumber} updateDetailsLikeOpenedNoCaseNumber - The updateDetailsLikeOpenedNoCaseNumber no case number request negative test schema validation
       * @param {updateDetailsLikeOpenedInvalidRequest}  updateDetailsLikeOpenedInvalidRequest - The updateDetailsLikeOpenedInvalidRequest invalid request method negative test schema validation
       * @param {updateDetailsLikeOpenedInvalidEndpoint} updateDetailsLikeOpenedInvalidEndpoint - The updateDetailsLikeOpenedInvalidEndpoint invalid endpoint URL negative test schema validation
       * @param {updateDetailsIccEmptyBodyPayload} updateDetailsIccEmptyBodyPayload - The updateDetailsIccEmptyBodyPayload empty body payload request negative test schema validation
       * @param {updateDetailsIccNoCaseNumber} updateDetailsIccNoCaseNumber - The updateDetailsIccNoCaseNumber no case number request negative test schema validation
       * @param {updateDetailsIccInvalidRequest} updateDetailsIccInvalidRequest - The updateDetailsIccInvalidRequest invalid request method negative test schema validation
       * @param {updateDetailsIccInvalidEndpoint} updateDetailsIccInvalidEndpoint - The updateDetailsIccInvalidEndpoint invalid endpoint URL negative test schema validation
       *
       */
      postArchiveCaseResponse: typeof postArchiveCaseResponse;
      postRestoreCaseResponse: typeof postRestoreCaseResponse;
      postEngageCaseResponse: typeof postEngageCaseResponse;
      postCompleteCaseResponse: typeof postCompleteCaseResponse;
      getAttorneyCaseDetailsResponse: typeof getAttorneyCaseDetailsResponse;
      getAttorneyListCasesResponse: typeof getAttorneyListCasesResponse;
      getIntakeQuestionsResponse: typeof getIntakeQuestionsResponse;
      patchUpdatesCaseDetailsResponse: typeof patchUpdatesCaseDetailsResponse;
      patchUpdatesCaseDetailsIccResponse: typeof patchUpdatesCaseDetailsIccResponse;
      archiveEmptyPayloadRequest: typeof archiveEmptyPayloadRequest;
      archiveNoCaseNumber: typeof archiveNoCaseNumber;
      archiveInvalidRequestMethod: typeof archiveInvalidRequestMethod;
      archiveInvalidEndpointRequest: typeof archiveInvalidEndpointRequest;
      restoreEmptyPayloadRequest: typeof restoreEmptyPayloadRequest;
      restoreNoCaseNumber: typeof restoreNoCaseNumber;
      restoreInvalidRequestMethod: typeof restoreInvalidRequestMethod;
      restoreInvalidEndpointRequest: typeof restoreInvalidEndpointRequest;
      engageEmptyPayloadRequest: typeof engageEmptyPayloadRequest;
      engageNoCaseNumber: typeof engageNoCaseNumber;
      engageInvalidRequestMethod: typeof engageInvalidRequestMethod;
      engageInvalidEndpointRequest: typeof engageInvalidEndpointRequest;
      completeEmptyPayloadRequest: typeof completeEmptyPayloadRequest;
      completeNoCaseNumber: typeof completeNoCaseNumber;
      completeInvalidRequestMethod: typeof completeInvalidRequestMethod;
      completeInvalidEndpointRequest: typeof completeInvalidEndpointRequest;
      attorneyCasesInvalidRequest: typeof attorneyCasesInvalidRequest;
      attorneyCasesInvalidEndpointRequest: typeof attorneyCasesInvalidEndpointRequest;
      attorneyCaseDetailsInvalidRequest: typeof attorneyCaseDetailsInvalidRequest;
      attorneyCaseDetailsNoCaseNumber: typeof attorneyCaseDetailsNoCaseNumber;
      attorneyCaseDetailsInvalidEndpointRequest: typeof attorneyCaseDetailsInvalidEndpointRequest;
      intakeQuestionsInvalidRequest: typeof intakeQuestionsInvalidRequest;
      intakeQuestionsNoCaseNumber: typeof intakeQuestionsNoCaseNumber;
      intakeQuestionsInvalidEndpoint: typeof intakeQuestionsInvalidEndpoint;
      updateDetailsLikeOpenedEmptyBodyPayload: typeof updateDetailsLikeOpenedEmptyBodyPayload;
      updateDetailsLikeOpenedNoCaseNumber: typeof updateDetailsLikeOpenedNoCaseNumber;
      updateDetailsLikeOpenedInvalidRequest: typeof updateDetailsLikeOpenedInvalidRequest;
      updateDetailsLikeOpenedInvalidEndpoint: typeof updateDetailsLikeOpenedInvalidEndpoint;
      updateDetailsIccEmptyBodyPayload: typeof updateDetailsIccEmptyBodyPayload;
      updateDetailsIccNoCaseNumber: typeof updateDetailsIccNoCaseNumber;
      updateDetailsIccInvalidRequest: typeof updateDetailsIccInvalidRequest;
      updateDetailsIccInvalidEndpoint: typeof updateDetailsIccInvalidEndpoint;
    }
  }
}

export {};
