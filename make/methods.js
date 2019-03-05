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
  // { method: 'getLocation', wxParam: [], aliasMap: {} },
  // { method: 'reLaunch', wxParam: [], aliasMap: {} },
  // { method: 'hideLoading', wxParam: [], aliasMap: {} },
  // { method: 'showLoading', wxParam: [], aliasMap: {} },
  // { method: 'showModal', wxParam: [], aliasMap: {} },
  // { method: 'getSystemInfoSync', wxParam: [], aliasMap: {} },
  // { method: 'getSystemInfo', wxParam: [], aliasMap: {} },
  // { method: 'createAnimation', wxParam: [], aliasMap: {} },
  // { method: 'request', wxParam: [], aliasMap: {} },
  // { method: 'uploadFile', wxParam: [], aliasMap: {} },
  // { method: 'createMapContext', wxParam: [], aliasMap: {} },
  // { method: 'MapContext', wxParam: [], aliasMap: {} },
  // { method: 'navigateToMiniProgram', wxParam: [], aliasMap: {} },
  // { method: 'getUserInfo', wxParam: [], aliasMap: {} },
  // { method: 'requestPayment', wxParam: [], aliasMap: {} },
  // { method: 'readBLECharacteristicValue', wxParam: [], aliasMap: {} },
  // { method: 'onBLEConnectionStateChange', wxParam: [], aliasMap: {} },
  // { method: 'onBLECharacteristicValueChange', wxParam: [], aliasMap: {} },
  // { method: 'notifyBLECharacteristicValueChange', wxParam: [], aliasMap: {} },
  // { method: 'getBLEDeviceServices', wxParam: [], aliasMap: {} },
  // { method: 'getBLEDeviceCharacteristics', wxParam: [], aliasMap: {} },
  // { method: 'createBLEConnection', wxParam: [], aliasMap: {} },
  // { method: 'closeBLEConnection', wxParam: [], aliasMap: {} },
  // { method: 'writeBLECharacteristicValue', wxParam: [], aliasMap: {} },
  // { method: 'stopBluetoothDevicesDiscovery', wxParam: [], aliasMap: {} },
  // { method: 'startBluetoothDevicesDiscovery', wxParam: [], aliasMap: {} },
  // { method: 'openBluetoothAdapter', wxParam: [], aliasMap: {} },
  // { method: 'onBluetoothDeviceFound', wxParam: [], aliasMap: {} },
  // { method: 'onBluetoothAdapterStateChange', wxParam: [], aliasMap: {} },
  // { method: 'getConnectedBluetoothDevices', wxParam: [], aliasMap: {} },
  // { method: 'getBluetoothDevices', wxParam: [], aliasMap: {} },
  // { method: 'getBluetoothAdapterState', wxParam: [], aliasMap: {} },
  // { method: 'closeBluetoothAdapter', wxParam: [], aliasMap: {} },
];