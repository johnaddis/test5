var editor = grapesjs.init({
  noticeOnUnload: 0,
  container : '#gjs',
  height: '100%',
  fromElement: 1,
  storageManager: { autoload: 0 },
  plugins: ['grapesjs-plugin-export'],
  pluginsOpts: {
    'grapesjs-plugin-export': {
    }
  }
});
