class HelloTypescriptController {

  constructor() {

  }
}

const componentOptions:ng.IComponentOptions = {
  template: require('./hello-typescript.template.html'),
  controller: HelloTypescriptController
};

const selector:string = 'helloTypescript';

export { componentOptions, selector };
