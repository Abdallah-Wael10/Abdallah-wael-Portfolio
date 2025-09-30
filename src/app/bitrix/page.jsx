"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function BitrixPage() {
  const [mounted, setMounted] = useState(false);
  const [bitrixData, setBitrixData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    
    // استقبال البيانات من Bitrix إذا كانت موجودة
    const domain = searchParams.get('DOMAIN');
    const appSid = searchParams.get('APP_SID');
    const authId = searchParams.get('AUTH_ID');
    
    if (domain || appSid || authId) {
      setBitrixData({ domain, appSid, authId });
      console.log('Bitrix Data:', { domain, appSid, authId });
    }
  }, [searchParams]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      {/* Bitrix Status Bar */}
      {bitrixData && (
        <div className="absolute top-0 left-0 right-0 bg-green-600 text-white p-2 text-center text-sm z-10">
          ✅ Connected to Bitrix: {bitrixData.domain}
        </div>
      )}
      
      <iframe
        src="/"
        style={{ 
          width: "100%", 
          height: bitrixData ? "calc(100vh - 40px)" : "100vh", 
          border: "none",
          display: "block",
          marginTop: bitrixData ? "40px" : "0"
        }}
        title="Abdallah Wael Portfolio"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
}
