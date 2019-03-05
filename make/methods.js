module.exports = [
  {
    method: 'showToast',
    wxParam: [{
      name: 'title',
      type: 'String',
      default: ''
    },{
      name: 'icon',
      type: 'String',
      default: 'none'
    },{
      name: 'duration',
      type: 'Number',
      default: 1500
    }],
    aliasMap: {
      alipay: {
        title: 'content',
        icon: 'type',
      }
    }
  },
  // { method: 'redirectTo', wxParam: [], aliasMap: {} },
  // { method: 'navigateTo', wxParam: [], aliasMap: {} },
  // { method: 'navigateBack', wxParam: [], aliasMap: {} },
  // { method: 'setNavigationBarTitle', wxParam: [], aliasMap: {} },
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
  // { method: 'navigateToMiniProgram(支付宝暂时可以不支持)', wxParam: [], aliasMap: {} },
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