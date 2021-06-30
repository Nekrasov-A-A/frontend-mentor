import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestSquare,
  faFacebookSquare,
  faPinterest,
  faInstagramSquare,
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
  faAngleLeft
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
