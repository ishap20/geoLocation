import * as NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'virtualearth',
  //httpAdapter: 'https',
  //appId: 'CDBzjOzh6p9csNXKCpOv',
  //appCode: 'hrn:here:authorization::org730994626:project/1651470408581',
  //apiKey: '	kXRsWycOtlwYGh2q8AG3sQ ', here.
  apiKey: 'AhdapbYB_ScPOonvXAsvfj8BXAhXhq2qcDtNvM3N8XhgzP2zqcUqWek871NQAivt',
  formatter: null,
};
export const geocoder = NodeGeocoder(options);
