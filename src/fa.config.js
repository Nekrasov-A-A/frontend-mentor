import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faUser, faBuilding } from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faUser,
  faBuilding,
  faUserCircle,
  faCheckCircle,
  faFacebookF,
  faTwitter,
  faInstagram
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
