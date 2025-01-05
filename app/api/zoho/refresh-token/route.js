import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('refresh token');
  try {
    // Keep trailing slash handling but use consistent format for Zoho URL
    const zohoUrl = 'https://accounts.zoho.in/oauth/v2/token/';

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
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({ error: 'Failed to refresh token' }, { status: 500 });
  }
}
