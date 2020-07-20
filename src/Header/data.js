import { ReactComponent as Home } from "../_assets/icons/home.svg";
import { ReactComponent as About } from "../_assets/icons/info.svg";
import { ReactComponent as Mic } from "../_assets/icons/record.svg";
import { ReactComponent as Control } from "../_assets/icons/control.svg";
import { ReactComponent as Settings } from "../_assets/icons/settings.svg";

import { ReactComponent as Login } from "../_assets/icons/log-in.svg";
import { ReactComponent as Register } from "../_assets/icons/password.svg";

export const headerData = [
  { label: "home", path: "/", icon: Home },
  { label: "about", path: "/about", icon: About },
  { label: "manual", path: "/manual", icon: Control },
  { label: "voice control", path: "/voice-control", icon: Mic },
  { label: "settings", path: "/settings", icon: Settings },
];

export const notAuthData = [
  { label: "login", path: "/login", icon: Login },
  { label: "register", path: "/register", icon: Register },
];
