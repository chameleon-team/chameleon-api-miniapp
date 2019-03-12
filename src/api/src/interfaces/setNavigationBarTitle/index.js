import index from './index.interface';

export default function setNavigationBarTitle(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        title = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.setNavigationBarTitle({
        // 2.这里把参数传进去
        title,
        success,
        fail,
        complete
    })
}
