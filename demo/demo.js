class DemoCtrl {
  constructor() {
    this.demos = [{
      seed: '123456789012345'
    }, {
      seed: 'kjashlk jsdflkj'
    }, {
      seed: '123khdsjhf012345'
    }];
    this.options = {
      size: 64,
      format: 'svg'
    };
  }
}

const Demo = {
  template: '<identicon ng-repeat="demo in $ctrl.demos" seed="{{demo.seed}}" options="$ctrl.options"></identicon>',
  controller: DemoCtrl
};

export default Demo;
