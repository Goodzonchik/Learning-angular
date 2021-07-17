import { animate, style, transition, trigger } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
    transition(':enter', [
        style({ opacity: 0, backgroundColor: '#eaeaea' }),
          animate('500ms ease-out', style({ opacity: 1, backgroundColor: 'transparent' }))
    ]),
])