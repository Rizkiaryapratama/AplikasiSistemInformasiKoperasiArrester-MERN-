import axios from "axios";

export const event = axios.create({
  baseURL: "https://scary-tiara-wasp.cyclic.app/api/events",
});