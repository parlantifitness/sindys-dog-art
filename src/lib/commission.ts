/** Upload limits shared by the form (client) and the API route (server). */
export const MAX_PHOTOS = 4;
/** Combined size of all photos. Kept under 4.5 MB so the request fits typical serverless body limits. */
export const MAX_TOTAL_PHOTO_BYTES = 4 * 1024 * 1024;
/** Photos are scaled down in the browser before upload. */
export const MAX_PHOTO_EDGE_PX = 1800;

export const FIELD_LIMITS = {
  dogName: 80,
  occasion: 200,
  notes: 2000,
  name: 100,
  email: 200,
  phone: 30,
} as const;
