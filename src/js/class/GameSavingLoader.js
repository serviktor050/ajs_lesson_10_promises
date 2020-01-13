import read from '../reader.js';
import json from '../parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => {
        const value = json(response);
        return value;
      }).then((value) => {
        resolve(value);
      });
    });
  }
}
