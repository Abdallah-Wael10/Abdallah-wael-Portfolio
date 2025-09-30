import { NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Bitrix handler alive' });
}

export async function POST(request) {
  try {
    const form = await request.formData();
    const domain = form.get('DOMAIN') || '';
    const appSid = form.get('APP_SID') || '';
    const authId = form.get('AUTH_ID') || '';

    const origin = request.nextUrl.origin;
    const uiUrl = new URL('/bitrix', origin);
    if (domain) uiUrl.searchParams.set('DOMAIN', domain);
    if (appSid) uiUrl.searchParams.set('APP_SID', appSid);
    if (authId) uiUrl.searchParams.set('AUTH_ID', authId);

    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Redirecting…</title></head><body>
<script>location.replace(${JSON.stringify(uiUrl.toString())});</script>
<noscript><a href="${uiUrl.toString()}">Continue</a></noscript></body></html>`;

    return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e?.message || 'Unknown error' }, { status: 500 });
  }
}