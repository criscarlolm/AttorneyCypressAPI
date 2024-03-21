import {
  NotificationControllerPayload,
  ReadNotificationPayload,
} from '../../types/notificationController';

export const generateNotificationControllerPayload = (): NotificationControllerPayload => {
  return {};
};

export const generateReadNotificationPayload = (): ReadNotificationPayload => {
  const notificationId = Cypress.env('notificationId');
  return {
    notificationId: `${notificationId}`,
  };
};
