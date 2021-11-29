import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class DropdownComponent extends Component {
  @service store;
  // @task(function* (term) {
  //   yield timeout(1500);
  //   let url = `https://jsonplaceholder.typicode.com/users?username=${term}`;
  //   return fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       return json.map((item) => ({ username: item.username }));
  //     });
  // })
  // searchTask;
  // @action
  // async searchTask(term) {
  //   let url = `https://jsonplaceholder.typicode.com/users?username=${term}`;
  //   return fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       return json.map((item) => ({ username: item.username }));
  //     });
  // }
  //
  // Using Store
  //
  // @action
  // async searchTask(query) {
  //   let users = this.store.query('user', {
  //     username: query,
  //   });
  //   console.log(users);
  //   return users;
  // }

  @task(function* (query) {
    yield timeout(1500);
    let users = this.store.query('user', {
      username: query,
    });
    console.log(users);
    return users;
  })
  searchTask;
}
