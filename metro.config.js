const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);
    defaultConfig.resolver.assetExts.push('ttf');
    return defaultConfig;
  })();
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */