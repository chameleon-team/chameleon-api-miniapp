module.exports = [
  {
    method: 'showToast',
    wxParam: [{
      name: 'title',
      type: 'String',
      default: ''
    }, {
      name: 'icon',
      type: 'String',
      default: 'none'
    }, {
      name: 'duration',
      type: 'Number',
      default: 1500
    }],
    aliasMap: {
      alipay: {
        param: {
          title: 'content',
          icon: 'type',
        }
      }
    }
  },
  {
    method: 'redirectTo', wxParam: [{
      name: 'url',
      type: 'String',
      default: ''
    }], aliasMap: {}
  },
  {
    method: 'navigateTo', wxParam: [{
      name: 'url',
      type: 'String',
      default: ''
    }], aliasMap: {}
  },
  {
    method: 'navigateBack', wxParam: [{
      name: 'delta',
      type: 'Number',
      default: 1
    }], aliasMap: {}
  },
  {
    method: 'setNavigationBarTitle', wxParam: [{
      name: 'title',
      type: 'String',
      default: ''
    }], aliasMap: {
      alipay: {
        method: 'setNavigationBar'
      }
    }
  },
  { method: 'getLocation', wxParam: [], aliasMap: {} },
  { method: 'reLaunch', wxParam: [], aliasMap: {} },
  { method: 'hideLoading', wxParam: [], aliasMap: {} },
  { method: 'showLoading', wxParam: [], aliasMap: {} },
  { method: 'showModal', wxParam: [], aliasMap: {} },
  { method: 'getSystemInfoSync', wxParam: [], aliasMap: {} },
  { method: 'getSystemInfo', wxParam: [], aliasMap: {} },
  { method: 'createAnimation', wxParam: [], aliasMap: {} },
  { method: 'request', wxParam: [], aliasMap: {} },
  { method: 'uploadFile', wxParam: [], aliasMap: {} },
  { method: 'createMapContext', wxParam: [], aliasMap: {} }, // 入参不是Object
  { method: 'MapContext', wxParam: [], aliasMap: {} }, // 入参不是Object
  { method: 'navigateToMiniProgram', wxParam: [
    {
      name: 'appId',
      type: 'string',
      default: ''
    },
    {
      name: 'path',
      type: 'string',
      default: ''
    },
    {
      name: 'extraData',
      type: 'CMLObject',
      default: ''
    },
    {
      name: 'envVersion',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  // { method: 'getUserInfo', wxParam: [], aliasMap: {} }, // 差异太大
  // { method: 'requestPayment', wxParam: [], aliasMap: {} }, // 差异太大
  { method: 'readBLECharacteristicValue', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'onBLEConnectionStateChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'onBLECharacteristicValueChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'notifyBLECharacteristicValueChange', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
    {
      name: 'state',
      type: 'Boolean',
      default: false
    },
  ], aliasMap: {} },
  { method: 'getBLEDeviceServices', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'getBLEDeviceCharacteristics', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'createBLEConnection', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {
    alipay: {
      method: 'connectBLEDevice'
    }
  } }, //支付宝叫 connectBLEDevice
  { method: 'closeBLEConnection', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {
    alipay: {
      method: 'disconnectBLEDevice'
    }
  } }, // 支付宝叫 disconnectBLEDevice
  { method: 'writeBLECharacteristicValue', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
    {
      name: 'value',
      type: 'CMLObject',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'stopBluetoothDevicesDiscovery', wxParam: [], aliasMap: {} },
  { method: 'startBluetoothDevicesDiscovery', wxParam: [
    {
      name: 'services',
      type: 'Array',
      default: []
    },
    {
      name: 'allowDuplicatesKey',
      type: 'Boolean',
      default: true
    },
    {
      name: 'interval',
      type: 'Number',
      default: ''
    },
  ], aliasMap: {} }, // 入参及回调有Array类型, 需要手动声明内部类型
  { method: 'openBluetoothAdapter', wxParam: [], aliasMap: {} },
  { method: 'onBluetoothDeviceFound', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'onBluetoothAdapterStateChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'getConnectedBluetoothDevices', wxParam: [], aliasMap: {} }, // 入参及回调有Array类型, 需要手动声明内部类型
  { method: 'getBluetoothDevices', wxParam: [], aliasMap: {} },
  { method: 'getBluetoothAdapterState', wxParam: [], aliasMap: {} },
  { method: 'closeBluetoothAdapter', wxParam: [], aliasMap: {} },
];