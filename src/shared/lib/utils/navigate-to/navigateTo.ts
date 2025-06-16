import { NavigateFunction, NavigateOptions } from 'react-router-dom';

let navigateRef: NavigateFunction | null = null;

export function setNavigate(navigate: NavigateFunction) {
  navigateRef = navigate;
}

export function navigateTo(path: string, options?: NavigateOptions) {
  if (navigateRef) {
    navigateRef(path, options);
  }
}