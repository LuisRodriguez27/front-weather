// Definiciones de tipos adicionales para Astro
declare module '*.astro' {
  const Component: any;
  export default Component;
}

// Asegurar que los elementos HTML estén disponibles en JSX
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
