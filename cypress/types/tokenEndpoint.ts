export type EndpointPayload = {
  username?: string;
  password?: string;
  grant_type?: string;
};

export type EndpointHeaders = {
  Authorization?: string;
  'Content-Type'?: string;
  Accept?: string;
  'User-Agent'?: string;
  'x-app-version'?: string;
};

export type EndpointToken = {
  Authorization?: string;
  'Content-Type'?: string;
  Accept?: string;
  'User-Agent'?: string;
  'x-app-version'?: string;
};
