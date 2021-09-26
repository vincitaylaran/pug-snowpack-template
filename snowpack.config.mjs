/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: false },
    src: { url: '/dist' },
  },
  plugins: ['@marlonmarcello/snowpack-plugin-pug'],
  devOptions: {
    openUrl: 'index.html',
  },
};
