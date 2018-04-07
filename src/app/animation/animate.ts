import {transition,trigger,animate,state,style} from '@angular/animations';
const fadeIn='.3s ease-in';
const fadeOut='.3s ease-out';

export const SlideEnter=trigger('SlideEnter',[
    transition('void=>active',[
      style({opacity:0}),
      animate(fadeOut)
    ]),
    transition('active=>void',[
      animate(fadeOut,style({opacity:0}))
    ]),
    transition('void=>right',[
      style({transform:'translateX(-100%)',opacity:.5}),
      animate(fadeOut)
    ]),
    transition('void=>left',[
      style({transform:'translateX(100%)',opacity:.5}),
      animate(fadeOut)
    ]),
    transition('left=>void',[
      animate(fadeOut,style({opacity:0}))
    ]),
    transition('right=>void',[
      animate(fadeOut,style({opacity:0}))
    ])

  ]);

export const RouterToggle=trigger('RouterToggle',[
    transition('void=>*',[style({transform:'translateX(100%)'}),animate(fadeOut)]),
    transition(':leave',[animate(fadeOut,style({transform:'translateX(100%)'}))])
  ]);

export const SlideDown=trigger('SlideDown',[
    state('close',style({display:'none'})),
    transition('open=>close',[animate(fadeOut,style({height:0}))]),
    transition('close=>open',[style({height:0,background:'white'}),animate(fadeIn)])
  ]);

export const Carousel=trigger('Carousel',[
    state('leftMid',style({display:'block'})),
    state('rightMid',style({display:'block'})),
    state('mid',style({display:'block'})),
    state('midLeft',style({display:'none'})),
    state('midRight',style({display:'none'})),
    transition('*=>midLeft',[animate(fadeOut,style({transform:'translateX(-100%)'}))]),
    transition('*=>midRight',[animate(fadeOut,style({transform:'translateX(100%)'}))]),
    transition('*=>leftMid',[style({transform:'translateX(-100%)'}),animate(fadeOut)]),
    transition('*=>rightMid',[style({transform:'translateX(100%)'}),animate(fadeOut)])
  ]);
