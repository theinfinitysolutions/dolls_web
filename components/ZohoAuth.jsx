'use client';
import { useEffect } from 'react';
import { getZohoToken, isZohoTokenExpired, setZohoToken } from '@/utils/helper';
import axios from 'axios';

const ZohoAuth = ({ children }) => {
  const refreshZohoToken = async () => {
    try {
      // Don't remove trailing slash, but ensure consistent URL format
      const zohoUrl = 'https://accounts.zoho.in/oauth/v2/token';

      const response = await fetch(
        `${zohoUrl}?refresh_token=${process.env.NEXT_PUBLIC_ZOHO_REFRESH_TOKEN}&client_id=${process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      const { access_token, expires_in } = data;
      setZohoToken(access_token, expires_in);
    } catch (error) {
      console.error('Error refreshing Zoho token:', error);
    }
  };

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      const token = getZohoToken();

      if (!token?.accessToken || isZohoTokenExpired()) {
        await refreshZohoToken();
      }
    };

    checkAndRefreshToken();
  });

  return <>{children}</>;
};

export default ZohoAuth;
