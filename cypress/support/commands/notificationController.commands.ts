import { EndpointToken } from '../../types/tokenEndpoint';
import {
  NotificationControllerPayload,
  ReadNotificationPayload,
} from '../../types/notificationController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/* notification-controller - /attorney/notification Get streamed notification. */

/***************** Positive Testing - Attorney Notification Controller ******************/

const getStreamedNotification = (
  getStreamedNotificationResponse: NotificationControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getStreamedNotificationResponse: NotificationControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getStreamedNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('notificationId', response.body[0].id);
      cy.log(Cypress.env('notificationId'));
    });
};

const getNotificationCount = (
  geNotificationCountResponse: NotificationControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    geNotificationCountResponse: NotificationControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification/count`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: geNotificationCountResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postReadNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/read/${notificationId}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const deleteNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/${notificationId}`;
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/***************** Negative Testing - Attorney Notification Controller ******************/

/**** Streamed Notification -  Unathorized Request ******/
const unathorizedRequestStreamedNotification = (): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
  }>
> => {
  const endPointValue = `/attorney/notification`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/**** Streamed Notification -  Invalid Request Method  ******/
const invalidRequestStreamedNotification = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/**** Streamed Notification -  Invalid Endpoint Request  ******/
const invalidEndpointStreamedNotification = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification1`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/**** Notification Count -  Unathorized Request ******/
const unautorizedNotificationCount = (
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
  }>
> => {
  const endPointValue = `/attorney/notification/count`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/**** Notification Count -  Invalid Request Method ******/
const invalidRequestNotificationCount = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification/count`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/**** Notification Count -  Invalid Endpoint Request  ******/
const invalidEndpointNotificationCount = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification1/count`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/**** Read Notification -  Unathorized Request ******/
const unathorizedRequestReadNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/read/${notificationId}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/**** Read Notification -  Invalid Request Method ******/
const invalidRequestReadNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/read/${notificationId}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/**** Read Notification -  No Notification Id ******/
const noNotificationIdReadNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/notification/read/notificationId0000`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/**** Read Notification -  Invalid Endpoint Request ******/
const invalidEndpointReadNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/read1/${notificationId}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/**** Delete Notification -  Unathorized Request ******/
const unautorizedRequestDeleteNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/${notificationId}`;
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/**** Delete Notification -  Invalid Request Method ******/
const invalidRequestDeleteNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification/${notificationId}`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/**** Delete Notification -   No Notification Id ******/
const noNotificationIdDeleteNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/notification/notificationId0000';
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/**** Delete Notification -  Invalid Endpoint Request ******/
const invalidEndpointDeleteNotification = (
  getReadNotificationResponse: ReadNotificationPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getReadNotificationResponse: ReadNotificationPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const notificationId = Cypress.env('notificationId');
  const endPointValue = `/attorney/notification1/${notificationId}`;
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getReadNotificationResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

Cypress.Commands.add('getStreamedNotification', getStreamedNotification);
Cypress.Commands.add('getNotificationCount', getNotificationCount);
Cypress.Commands.add('postReadNotification', postReadNotification);
Cypress.Commands.add('deleteNotification', deleteNotification);
Cypress.Commands.add(
  'unathorizedRequestStreamedNotification',
  unathorizedRequestStreamedNotification,
);
Cypress.Commands.add('invalidRequestStreamedNotification', invalidRequestStreamedNotification);
Cypress.Commands.add('invalidEndpointStreamedNotification', invalidEndpointStreamedNotification);
Cypress.Commands.add('unautorizedNotificationCount', unautorizedNotificationCount);
Cypress.Commands.add('invalidRequestNotificationCount', invalidRequestNotificationCount);
Cypress.Commands.add('invalidEndpointNotificationCount', invalidEndpointNotificationCount);
Cypress.Commands.add('unathorizedRequestReadNotification', unathorizedRequestReadNotification);
Cypress.Commands.add('invalidRequestReadNotification', invalidRequestReadNotification);
Cypress.Commands.add('noNotificationIdReadNotification', noNotificationIdReadNotification);
Cypress.Commands.add('invalidEndpointReadNotification', invalidEndpointReadNotification);
Cypress.Commands.add('unautorizedRequestDeleteNotification', unautorizedRequestDeleteNotification);
Cypress.Commands.add('invalidRequestDeleteNotification', invalidRequestDeleteNotification);
Cypress.Commands.add('noNotificationIdDeleteNotification', noNotificationIdDeleteNotification);
Cypress.Commands.add('invalidEndpointDeleteNotification', invalidEndpointDeleteNotification);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Get Attorney Account Profile in the API.
       * @param {NotificationControllerPayload} getStreamedNotificationResponse - The getStreamedNotificationResponse information to get streamed notification.
       * @param {NotificationControllerPayload} getNotificationCountResponse - The getNotificationCountResponse information to get the notification count.
       * @param {ReadNotificationPayload} postReadNotification - The postReadNotification information to post Read the notification
       * @param {ReadNotificationPayload} deleteNotification - The postReadNotification information to Delete the notification.
       * @param {unathorizedRequestStreamedNotification} unathorizedRequestStreamedNotification - The unathorizedRequestStreamedNotification no autorization login allowed negative test schema validation
       * @param {invalidRequestStreamedNotification} invalidRequestStreamedNotification - The invalidRequestStreamedNotification method not allowed negative test schema validation
       * @param {invalidEndpointStreamedNotification} invalidEndpointStreamedNotification - The invalidEndpointStreamedNotification invalid endpoint URL negative test schema validation
       * @param {unautorizedNotificationCount} unautorizedNotificationCount - The unautorizedNotificationCount no autorization login allowed negative test schema validation
       * @param {invalidRequestNotificationCount} invalidRequestNotificationCount - The invalidRequestNotificationCount method not allowed negative test schema validation
       * @param {invalidEndpointNotificationCount} invalidEndpointNotificationCount  - The invalidEndpointNotificationCount invalid endpoint URL negative test schema validation
       * @param {unathorizedRequestReadNotification} unathorizedRequestReadNotification - The unathorizedRequestReadNotification no autorization login allowed negative test schema validation
       * @param {invalidRequestReadNotification} invalidRequestReadNotification - The invalidRequestReadNotification method not allowed negative test schema validation
       * @param {noNotificationIdReadNotification} noNotificationIdReadNotification - The noNotificationIdReadNotification no notification Id request negative test schema validation
       * @param {invalidEndpointReadNotification} invalidEndpointReadNotification - The invalidEndpointReadNotification invalid endpoint URL negative test schema validation
       * @param {unautorizedRequestDeleteNotification} unautorizedRequestDeleteNotification - The unautorizedRequestDeleteNotification no autorization login allowed negative test schema validation
       * @param {invalidRequestDeleteNotification} invalidRequestDeleteNotification - The invalidRequestDeleteNotification method not allowed negative test schema validation
       * @param {noNotificationIdDeleteNotification} noNotificationIdDeleteNotification - The noNotificationIdDeleteNotification no notification Id request negative test schema validation
       * @param {invalidEndpointDeleteNotification} invalidEndpointDeleteNotification - The invalidEndpointDeleteNotification invalid endpoint URL negative test schema validation
       *
       *
       */
      getStreamedNotification: typeof getStreamedNotification;
      getNotificationCount: typeof getNotificationCount;
      postReadNotification: typeof postReadNotification;
      deleteNotification: typeof deleteNotification;

      unathorizedRequestStreamedNotification: typeof unathorizedRequestStreamedNotification;
      invalidRequestStreamedNotification: typeof invalidRequestStreamedNotification;
      invalidEndpointStreamedNotification: typeof invalidEndpointStreamedNotification;

      unautorizedNotificationCount: typeof unautorizedNotificationCount;
      invalidRequestNotificationCount: typeof invalidRequestNotificationCount;
      invalidEndpointNotificationCount: typeof invalidEndpointNotificationCount;

      unathorizedRequestReadNotification: typeof unathorizedRequestReadNotification;
      invalidRequestReadNotification: typeof invalidRequestReadNotification;
      noNotificationIdReadNotification: typeof noNotificationIdReadNotification;
      invalidEndpointReadNotification: typeof invalidEndpointReadNotification;

      unautorizedRequestDeleteNotification: typeof unautorizedRequestDeleteNotification;
      invalidRequestDeleteNotification: typeof invalidRequestDeleteNotification;
      noNotificationIdDeleteNotification: typeof noNotificationIdDeleteNotification;
      invalidEndpointDeleteNotification: typeof invalidEndpointDeleteNotification;
    }
  }
}

export {};
