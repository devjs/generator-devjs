import { resolve } from 'path';
import assign from 'deep-assign';

global.devjs = global.devjs || {};

export default function init(name) {
  this.sourceRoot(resolve(__dirname, '..', '_template'));
  devjs[name] = true;

  assign(devjs, this.options);

  const done = this.async();
  if (typeof devjs.boilerplate === 'undefined') {
    this.prompt({
      name: 'boilerplate',
      message: 'Create boilerplate files?',
      type: 'confirm',
      default: true,
    }, ({ boilerplate }) => {
      devjs.boilerplate = boilerplate;
      if (boilerplate) {
        this.composeWith('devjs:boilerplate');
      }
      done();
    });
  } else done();
};
