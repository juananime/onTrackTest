function config(api) {
  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [];
  const babelEnv = api.env();
  let dotenvOptions = {};

  if (api.env(['test'])) {
    dotenvOptions = {
      moduleName: '@env',
      path: '.env.test',
      blacklist: null,
      whitelist: null,
      safe: true,
      allowUndefined: true,
    };
  }

  plugins.push(['module:react-native-dotenv', dotenvOptions]);
  plugins.push([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ]);

  /**
   * Remove console in non dev builds
   * Ref: https://reactnative.dev/docs/performance#using-consolelog-statements
   */
  if (babelEnv !== 'development' && babelEnv !== 'test') {
    plugins.push(['transform-remove-console']);
  }

  return {
    presets,
    plugins,
  };
}

module.exports = config;
