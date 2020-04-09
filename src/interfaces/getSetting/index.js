import index from './index.interface';

export default function getSetting(successFunc,failFunc,completeFunc,wxWithSubscriptions=false) {
    return index.getSetting(successFunc,failFunc,completeFunc,wxWithSubscriptions)
}