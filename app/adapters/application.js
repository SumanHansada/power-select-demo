import JSONAPIAdapter from '@ember-data/adapter/json-api';
import fetch from 'fetch';

export default class UserAdapter extends JSONAPIAdapter {
  host = 'https://jsonplaceholder.typicode.com';
}
