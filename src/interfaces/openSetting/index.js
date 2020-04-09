import index from './index.interface';

export default function openSetting(successFunc,failFunc,completeFunc,wxWithSubscriptions=false) {
    return index.openSetting(successFunc,failFunc,completeFunc,wxWithSubscriptions)
}