import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'agroec.comprador.dev',
  appName: 'Agroec Comprador',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
