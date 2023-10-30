import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'agroec.rui.dev',
  appName: 'Agroec',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
