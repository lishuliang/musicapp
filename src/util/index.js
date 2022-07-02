import { reactive, toRefs } from 'vue';

export function changeValue(value) {
    return (value / 10000).toFixed(2) + '万';
}

//将响应式对象转换为普通对象 便于后续解构props
export function useFeatureX(obj) {
    const newObj = reactive(obj);
    return toRefs(newObj);
}
