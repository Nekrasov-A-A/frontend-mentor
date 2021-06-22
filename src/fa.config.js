import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faLongArrowAltDown,
  faAngleDown,
  faTimes,
  faBookmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faBars,
  faLongArrowAltDown,
  faPinterestSquare,
  faFacebookSquare,
  faAngleDown,
  faTimes,
  faBookmark,
  faCheck,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
