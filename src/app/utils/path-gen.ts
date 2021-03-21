import { capitalize } from './capitalize';

export type Breadcrumb = {
  caption: string;
  routerLink?: string;
};

export function pathGen(path: string, secontTitle?: string) {
  if (secontTitle) {
    return [difficultPath(path), simlpePath(secontTitle)];
  } else {
    return [simlpePath(path)];
  }
}

function simlpePath(path: string) {
  return {
    caption: capitalize(path),
  };
}

function difficultPath(path: string) {
  return {
    caption: capitalize(path),
    routerLink: `/${path}`,
  };
}
