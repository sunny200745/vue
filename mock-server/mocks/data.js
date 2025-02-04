
const products = require('./json_data/products.json');
const cardList = require('./json_data/card-list.json');

const BAD_REQUEST_RESPONSE = {
  message: 'Bad Request',
  key: 'GENERAL_ERROR',
  errors: [
    {
      message: 'Message Can be set.',
      key: 'common.api.shoesize',
      context: {
        max: '50',
        min: '1',
      },
    },
  ],
};

const FORBIDDEN_REQUEST_RESPONSE = {
  message: 'Access to requested resource denied.',
  key: 'GENERAL_ERROR',
  errors: [
    {
      message: 'Message Can be set.',
      key: 'common.api.quota',
      context: {
        quota: 'someQuota',
      },
    },
  ],
};

const INTERNAL_SERVER_REQUEST_RESPONSE = {
  message: 'Description of error',
  key: 'GENERAL_ERROR',
  errors: [
    {
      message: 'Message Can be set.',
      key: 'common.api.quota',
      context: {
        quota: 'someQuota',
      },
    },
  ],
};

module.exports = {
  request: {
    url: '',
  },
  responses: {
    success: {
      default: true,
      status: 200,
      data: {
        internalServerErrorResponse: INTERNAL_SERVER_REQUEST_RESPONSE,
        forbiddenErrorResponse: FORBIDDEN_REQUEST_RESPONSE,
        badRequestErrorResponse: BAD_REQUEST_RESPONSE,
        products,
        cardList,
      },
    },
  },
};
