import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routerAnimation =
  trigger('routeAnimations', [
      transition('companyInfo => *', slide('left', 'dataRowAnimation')),
      transition('* => companyInfo', slide('right')),
      transition('launches => rockets', slide('left')),
      transition('rockets => launches', slide('right')),
      transition('* => feedback', slide('left')),
      transition('feedback => *', slide('right')),
  ])

  function slide(direction: string, animationName: string = '') {
    if (animationName){
        return [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    [direction]: '110%',
                })
            ], {optional: true}),
            group([
              query(':enter', [
                  animate(500, 
                    style({
                        [direction]: 0,
                    })),
              ]),
              
              query(':leave', [
                animate(500, 
                style({
                    [direction]: '-110%',
                }))
            ],{ optional: true }),
            query(`@${animationName}`, animateChild()),
            ])
            
        ]
    }
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                [direction]: '110%',
            })
        ], {optional: true}),
        group([
          query(':enter', [
              animate(500, 
                style({
                    [direction]: 0,
                })),
          ]),
          query(':leave', [
            animate(500, 
            style({
                [direction]: '-110%',
            }))
        ],{ optional: true })
        ])
        
    ]
  }