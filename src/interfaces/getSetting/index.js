import index from './index.interface';

export default function getSetting(opt={}) {
    const noop = (res) => {};

    let {
        withSubscriptions = false,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    return index.getSetting({
        withSubscriptions,
        success,
        fail,
        complete,
    })
}