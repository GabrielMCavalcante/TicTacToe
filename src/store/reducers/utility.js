export function updateState(oldState, newValues) {
    return { ...oldState, ...newValues }
}