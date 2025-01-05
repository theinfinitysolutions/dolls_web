export const getZohoToken = () => {
  if (typeof window === 'undefined') return null;
  return {
    accessToken: localStorage.getItem('zoho_access_token'),
    expiry: localStorage.getItem('zoho_token_expiry'),
  };
};

export const setZohoToken = (accessToken, expiresIn) => {
  const expiryTime = new Date() + expiresIn;
  if (accessToken && expiresIn) {
    localStorage.setItem('zoho_access_token', 'Zoho-oauthtoken' + accessToken);
    localStorage.setItem('zoho_token_expiry', expiryTime.toString());
  }
};

export const isZohoTokenExpired = () => {
  const expiry = localStorage.getItem('zoho_token_expiry');
  if (!expiry) return true;
  return new Date().getTime() > parseInt(expiry);
};

export const clearZohoToken = () => {
  localStorage.removeItem('zoho_access_token');
  localStorage.removeItem('zoho_token_expiry');
};
