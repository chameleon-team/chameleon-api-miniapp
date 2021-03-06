import index from './index.interface';

export default function createBLEConnection(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        deviceId = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.createBLEConnection({
        // 2.这里把参数传进去
        deviceId,
        success,
        fail,
        complete
    })
}
