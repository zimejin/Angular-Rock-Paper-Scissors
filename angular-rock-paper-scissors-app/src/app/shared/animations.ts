import {
  trigger,
  transition,
  useAnimation,
  state,
  style,
  animate,
  animation,
} from '@angular/animations';

const reusable = animation(
  [
    style({
      opacity: '{{opacity}}',
      transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})',
    }),
    animate(
      '{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)',
      style('*')
    ),
  ],
  {
    params: {
      duration: '200ms',
      delay: '0ms',
      opacity: '0',
      scale: '1',
      x: '0',
      y: '0',
      z: '0',
    },
  }
);

export const SharedAnimations = [
  trigger('animate', [transition('void => *', [useAnimation(reusable)])]),

  trigger('fadeInOut', [
    state(
      '0',
      style({
        opacity: 0,
        display: 'none',
      })
    ),
    state(
      '1',
      style({
        opacity: 1,
        display: 'block',
      })
    ),
    transition('0 => 1', animate('1s')),
    transition('1 => 0', animate('1s')),
  ]),

  trigger('fadeInOutTranslate', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('100ms ease-in-out', style({ opacity: 1 })),
    ]),

    transition(':leave', [
      style({ transform: 'translate(0)' }),
      animate('100ms ease-in-out', style({ opacity: 0 })),
    ]),
  ]),
];
