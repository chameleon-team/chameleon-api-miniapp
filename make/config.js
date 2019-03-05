export default methods = [
  {
    method: 'showToast', wxParam: [{
      name: 'title',
      type: 'String'
    },{
      name: 'icon',
      type: 'String'
    },{
      name: 'duration',
      type: 'Number'
    }], alipayAliasMap: {
      title: 'content',
      icon: 'type',
    }
  },
  { method: 'redirectTo', wxParam: [], alipayAliasMap: {} },
  { method: 'navigateTo', wxParam: [], alipayAliasMap: {} },
  { method: 'navigateBack', wxParam: [], alipayAliasMap: {} },
  { method: 'setNavigationBarTitle', wxParam: [], alipayAliasMap: {} },
  { method: 'getLocation', wxParam: [], alipayAliasMap: {} },
  { method: 'reLaunch', wxParam: [], alipayAliasMap: {} },
  { method: 'hideLoading', wxParam: [], alipayAliasMap: {} },
  { method: 'showLoading', wxParam: [], alipayAliasMap: {} },
  { method: 'showModal', wxParam: [], alipayAliasMap: {} },
  { method: 'getSystemInfoSync', wxParam: [], alipayAliasMap: {} },
  { method: 'getSystemInfo', wxParam: [], alipayAliasMap: {} },
  { method: 'createAnimation', wxParam: [], alipayAliasMap: {} },
  { method: 'request', wxParam: [], alipayAliasMap: {} },
  { method: 'uploadFile', wxParam: [], alipayAliasMap: {} },
  { method: 'createMapContext', wxParam: [], alipayAliasMap: {} },
  { method: 'MapContext', wxParam: [], alipayAliasMap: {} },
  { method: 'navigateToMiniProgram(支付宝暂时可以不支持)', wxParam: [], alipayAliasMap: {} },
  { method: 'getUserInfo', wxParam: [], alipayAliasMap: {} },
  { method: 'requestPayment', wxParam: [], alipayAliasMap: {} },
  { method: 'readBLECharacteristicValue', wxParam: [], alipayAliasMap: {} },
  { method: 'onBLEConnectionStateChange', wxParam: [], alipayAliasMap: {} },
  { method: 'onBLECharacteristicValueChange', wxParam: [], alipayAliasMap: {} },
  { method: 'notifyBLECharacteristicValueChange', wxParam: [], alipayAliasMap: {} },
  { method: 'getBLEDeviceServices', wxParam: [], alipayAliasMap: {} },
  { method: 'getBLEDeviceCharacteristics', wxParam: [], alipayAliasMap: {} },
  { method: 'createBLEConnection', wxParam: [], alipayAliasMap: {} },
  { method: 'closeBLEConnection', wxParam: [], alipayAliasMap: {} },
  { method: 'writeBLECharacteristicValue', wxParam: [], alipayAliasMap: {} },
  { method: 'stopBluetoothDevicesDiscovery', wxParam: [], alipayAliasMap: {} },
  { method: 'startBluetoothDevicesDiscovery', wxParam: [], alipayAliasMap: {} },
  { method: 'openBluetoothAdapter', wxParam: [], alipayAliasMap: {} },
  { method: 'onBluetoothDeviceFound', wxParam: [], alipayAliasMap: {} },
  { method: 'onBluetoothAdapterStateChange', wxParam: [], alipayAliasMap: {} },
  { method: 'getConnectedBluetoothDevices', wxParam: [], alipayAliasMap: {} },
  { method: 'getBluetoothDevices', wxParam: [], alipayAliasMap: {} },
  { method: 'getBluetoothAdapterState', wxParam: [], alipayAliasMap: {} },
  { method: 'closeBluetoothAdapter', wxParam: [], alipayAliasMap: {} },
];