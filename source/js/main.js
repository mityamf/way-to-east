import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {mobileMenu} from './modules/mobile-menu';
import {setCssVariables} from './modules/css-variables';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
mobileMenu();
setCssVariables();
