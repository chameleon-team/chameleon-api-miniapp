import index from './index.interface';

export default function getSystemInfoSync(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.getSystemInfoSync({
        // 2.这里把参数传进去
        
        success,
        fail,
        complete
    })
}
