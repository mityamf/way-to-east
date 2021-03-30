import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {mobileMenu} from './modules/mobile-menu';
import {hotelPreviewSlider} from './modules/hotel-preview-slider';
import {createComments} from './modules/main-comments';
import {readMore} from './modules/read-more';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
mobileMenu();
hotelPreviewSlider();
createComments();
readMore();
