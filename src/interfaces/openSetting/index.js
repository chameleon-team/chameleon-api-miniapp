import index from './index.interface';

export default function openSetting(opt={}) {
    const noop = (res) => {};

    let {
        withSubscriptions = false,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    return index.openSetting({
        withSubscriptions,
        success,
        fail,
        complete,
    })
}