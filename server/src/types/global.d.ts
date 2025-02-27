declare namespace Express {
    interface Request {
      user?: {
        id: string;
        username: string;
        email: string;
        name: string;
        password: string;
      };
    }
  }
  
  declare module 'react-dom/client' {
    import { ReactElement } from 'react';
  
    interface Root {
      render(children: ReactElement): void;
      unmount(): void;
    }
  
    function createRoot(container: Element | DocumentFragment): Root;
  
    export { createRoot };
  }
  