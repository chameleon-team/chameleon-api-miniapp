import index from './index.interface';

export default function scanCode(opt = {}) {
    const noop = (res) => {};
    let {
        onlyFromCamera = false,
            scanType = ['barCode', 'qrCode'],
            success = noop,
            fail = noop,
            complete = noop
    } = opt
    index.scanCode({
        onlyFromCamera,
        scanType,
        success,
        fail,
        complete
    })
}