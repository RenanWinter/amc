

export const LOADER_NAMES: LoaderType[] = [
  'music',
  'flipcoin',
  'hourglass',
  'ripple',
  'heart',
  'block3d',

]

export type LoaderType = 'music' | 'ripple' | 'hourglass' | 'flipcoin' | 'heart' | 'block3d';

export interface LoaderModalOptions {
  loader?: LoaderType;
  message?: string;
}
