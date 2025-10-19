import { deleteData, getData, patchData, postData, putData } from "../methods";

export const LandingPageApiEndPoints = {
  trackParcels: async (trackingNumber) =>
    await getData(`track/${trackingNumber}`),

  getStaticpages: async () => await getData("pages"),
};
