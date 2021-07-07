import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestSquare,
  faFacebookSquare,
  faPinterest,
  faInstagramSquare,
  faYoutube,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faLongArrowAltDown,
  faAngleDown,
  faTimes,
  faBookmark,
  faCheck,
  faCaretLeft,
  faCaretRight,
  faFile,
  faFolder,
  faCloudUploadAlt,
  faAngleRight,
  faAngleLeft,
  faSortUp,
  faSortDown,
  faCircle,
  faSquareFull,
  faBolt,
  faDollarSign,
  faUser,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faBars,
  faLongArrowAltDown,
  faPinterestSquare,
  faPinterest,
  faFacebookSquare,
  faAngleDown,
  faTimes,
  faBookmark,
  faCheck,
  faCaretLeft,
  faCaretRight,
  faInstagramSquare,
  faFile,
  faFolder,
  faCloudUploadAlt,
  faAngleRight,
  faAngleLeft,
  faSortUp,
  faSortDown,
  faCircle,
  faSquareFull,
  faYoutube,
  faBolt,
  faDollarSign,
  faUser,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faAngleRight,
  faQuoteLeft,
  faTwitterSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
