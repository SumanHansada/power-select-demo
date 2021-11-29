import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.map((item) => {
      return { id: item.id, type: 'users', attributes: { ...item } };
    });
    let newPayload = { data: JSON.parse(JSON.stringify(payload)) };
    payload = newPayload;
    arguments[2] = payload;
    return super.normalizeResponse(...arguments);
  }
}
