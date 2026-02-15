declare global {
  namespace React {
    type FC<P = {}> = (props: P & { children?: any }) => any;
    type ReactNode = any;
    interface HTMLAttributes<T = any> {
      [key: string]: any;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module "react" {
  const React: any;
  export = React;
}

export {};
