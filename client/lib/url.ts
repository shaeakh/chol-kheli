const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

const ENDPOINTS = {
  v1: {
    auth: {
      login: `${BACKEND_URL}/api/v1/auth/login`,
      register: `${BACKEND_URL}/api/v1/auth/register`,
      logout: `${BACKEND_URL}/api/v1/auth/logout`,
    },
  },
};

export { ENDPOINTS };
