import { readFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';
import { Config } from '../src/config';

const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), { encoding: 'utf8' }));

const platforms = ['ios', 'android'];

const variants = ['debug', 'release'];

platforms.forEach(platform => {
  variants.forEach(variant => {
    console.log(`Generating source maps for ${platform} ${variant} variant...`);

    execSync(`react-native bundle \
      --platform ${platform} \
      --dev ${variant === 'debug' ? 'true' : 'false'} \
      --entry-file index.js \
      --bundle-output ${platform}-${variant}.bundle \
      --sourcemap-output ${platform}-${variant}.bundle.map`);

    console.log(`Uploading ${platform} ${variant} sourcemaps to Bugsnag...`);

    execSync(`curl https://upload.bugsnag.com/react-native-source-map \
      -F apiKey=${Config.BUGSNAG_API_KEY} \
      -F appVersion=${pkg.version} \
      -F dev=${variant === 'debug' ? 'true' : 'false'} \
      -F platform=${platform} \
      -F sourceMap=@${platform}-${variant}.bundle.map \
      -F bundle=@${platform}-${variant}.bundle \
      -F projectRoot=\`pwd\``);
  });
});
