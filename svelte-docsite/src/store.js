import { writable } from 'svelte/store'

export const transition = location.hash !== ''
    ? writable(location.hash.slice(1))
    : writable('in:custom:circle-swoop')

export const duration = writable(3)
export const easing = writable('cubic-bezier(.25, 1, .30, 1)')