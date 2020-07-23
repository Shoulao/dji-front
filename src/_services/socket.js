import io from "socket.io-client";
import { config } from "../_urls/config";

const socket = io(config.droneApiUrl);

export default socket;
