import { getData, patchData } from "../methods";

export const AgentApiEndPoints = {
  allAssignedParcels: async () => await getData("/agent/my-tasks?type=pending"),

  acceptParcel: async (id, body) =>
    await patchData(`/agent/parcels/${id}/accept`, body),

  rejectParcel: async (id, body) =>
    await patchData(`/agent/parcels/${id}/reject`, body),

  allAcceptParcels: async (page = 1, limit = 10) =>
    await getData(`/agent/my-tasks?type=active&page=${page}&limit=${limit}`),

  alldeliveredParcels: async (page = 1, limit = 10) =>
    await getData(`/agent/my-tasks?type=completed&page=${page}&limit=${limit}`),

  allEarnings: async (page = 1, limit = 10) =>
    await getData(`/agent/my-tasks?type=completed&page=${page}&limit=${limit}`),

  changeParcelStatus: async (id, body) =>
    await patchData(`/agent/parcels/${id}/status`, body),

  countAgentCommision: async () => await getData("/agent/my-commission"),
};
