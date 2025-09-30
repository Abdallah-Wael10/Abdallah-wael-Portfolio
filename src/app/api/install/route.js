import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const domain = formData.get('DOMAIN');
    const appSid = formData.get('APP_SID');
    const authId = formData.get('AUTH_ID');
    
    console.log('Bitrix Installation Data:', {
      domain,
      appSid,
      authId
    });

    // هنا ممكن تحفظ البيانات في قاعدة بيانات أو ملف
    // أو تعمل أي عملية تانية محتاجها
    
    return NextResponse.json({
      success: true,
      message: 'Portfolio installed successfully in Bitrix',
      data: {
        domain,
        appSid,
        authId
      }
    });
  } catch (error) {
    console.error('Bitrix Installation Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Installation failed',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Bitrix Portfolio API is running',
    endpoints: {
      install: '/api/install (POST)',
      portfolio: '/bitrix'
    }
  });
}
