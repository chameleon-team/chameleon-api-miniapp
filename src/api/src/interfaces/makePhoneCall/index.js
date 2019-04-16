import index from './index.interface';

export default function makePhoneCall(opt = {}) {
  const noop = (res) => {};

  let {
    // 1.这里处理默认参数
    phoneNumber,
    success = noop,
    fail = noop,
    complete = noop
  } = opt;

  index.makePhoneCall({
    // 2.这里把参数传进去
    phoneNumber,
    success,
    fail,
    complete
  })
}
