// Add typing so Typescript knows how to handle !val-loader!, since it is a webpack functionality
declare module "!val-loader!*" {
  const contents: any;
  export = contents;
}