import { Dimensions, PixelRatio } from 'react-native';

const CREATIVE_WIDTH = 375;
const CREATIVE_HEIGHT = 667;

const screen = Dimensions.get('screen');
const window = Dimensions.get('window');

function getWidth(value: number) {
  const ratio = window.width / CREATIVE_WIDTH;
  return value * ratio;
}

function getWidthInPixels(value: number) {
  const widthValue = getWidth(value);
  return Math.floor(PixelRatio.getPixelSizeForLayoutSize(widthValue) / PixelRatio.get());
}

function getHeight(value: number) {
  const ratio = window.height / CREATIVE_HEIGHT;
  return value * ratio;
}

function getHeightInPixels(value: number) {
  const heightValue = getHeight(value);
  return Math.floor(PixelRatio.getPixelSizeForLayoutSize(heightValue) / PixelRatio.get());
}

function getValueInPixels(value: number) {
  return Math.floor(PixelRatio.getPixelSizeForLayoutSize(value) / PixelRatio.get());
}

const hitSlopValue = getWidth(15);

export enum Fonts {
  ArvoRegular = 'Arvo',
  ArvoBold = 'Arvo-Bold',
  ArvoItalic = 'Arvo-Italic',
  ArvoBoldItalic = 'Arvo-BoldItalic',
}

export const Theme = {
  window,
  screen,
  getWidth,
  getWidthInPixels,
  getHeight,
  getHeightInPixels,
  getValueInPixels,
  pixelRatio: PixelRatio,
  margin: getWidth(18),
  mapHeight: getHeight(364),
  downloadBarHeight: getWidth(49),
  colors: {
    primary: '#CFA000',
    secondary: '#2F2F2F',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#232323',
    textLight: '#FFFFFF',
    textDark: '#1D1D26',
    textPrimary: '#FFC500',
    error: '#FF5757',
    warning: '#FEC000',
    success: '#00A440',
    info: '#0383FF',
  },
  fonts: Fonts,
  hitSlop: {
    top: hitSlopValue,
    left: hitSlopValue,
    right: hitSlopValue,
    bottom: hitSlopValue,
  },
};
