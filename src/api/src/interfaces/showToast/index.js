import ui from './index.interface';

export default function showToast(opt) {
    const noop = (res) => {
    };

    let {
        title = '',
        icon = 'none',
        duration = 1500,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    ui.showToast({
        title,
        icon,
        duration,
        success,
        fail,
        complete
    })
}
