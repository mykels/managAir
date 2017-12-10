/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var AsyncIterator;

declare module '*.json';

// __env are representing environement variables (will be replace on the azure environement directly)
declare var __env;
