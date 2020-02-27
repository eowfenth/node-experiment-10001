import path from '../../src/utils/path';

describe('utils.path_handler() testing', () => {
  it('should ignore duplicate querystring parameters', () => {
    expect(path('public?param=1&param=2')).toMatchObject({
      path: 'public',
      parameters: [{
        name: 'param',
        value: '1',
      }],
    });
  });

  it('should have no parameters in case of empty querystring', () => {
    expect(path('public?')).toMatchObject({
      path: 'public',
      parameters: [],
    });

    expect(path('public')).toMatchObject({
      path: 'public',
      parameters: [],
    });
  });

  it('should append different parameteres in case of multiple entities in querystring', () => {
    expect(path('public?param=1&param_2=2&param_3=3')).toMatchObject({
      path: 'public',
      parameters: [{
        name: 'param',
        value: '1',
      }, {
        name: 'param_2',
        value: '2',
      }, {
        name: 'param_3',
        value: '3',
      }],
    });
  });
});
