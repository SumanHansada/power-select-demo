import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr username;
  @attr email;
  @attr address;
  @attr phone;
  @attr website;
  @attr company;
}
