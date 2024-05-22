import { animate, style, transition, trigger } from "@angular/animations";

export const fromsbottoms = trigger('fromsbottoms', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }), animate(1000, style({
            transform: 'translateY(0)',
            opacity: 1
        }))
    ])
])
export const fromsstops = trigger('fromstops', [
    transition(':enter', [
        style({
            transform: 'translateY(100%)',
            opacity: 0,
        }), animate(1000, style({
            transform: 'translateY(0)',
            opacity: 1
        }))
    ])
])

export const fromsbottomsnotheros = trigger('fromsbottomsnotheros', [
    transition(':leave', [
        style({
            transform: 'translateY(0)'
        }), animate(500, style({
            transform: 'translateY(-100%)'
        }))
    ])
])
export const fromstopsnotheros = trigger('fromstopsnotheros', [
    transition(':leave', [
        style({
            transform: 'translateY(100%)'
        }), animate(500, style({
            transform: 'translateY(200%)'
        }))
    ])
])