'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';

export default function RedditPixel() {
  const [shouldRender, setShouldRender] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the URL contains the campaign parameter with value "reddit" (case insensitive)
    const campaignParam = searchParams.get('campaign');
    if (campaignParam && campaignParam.toLowerCase() === 'reddit') {
      setShouldRender(true);
    }
  }, [searchParams]);

  if (!shouldRender) return null;

  return (
    <Script
      id='reddit-pixel'
      strategy='lazyOnload'
      dangerouslySetInnerHTML={{
        __html: `
        !function(w,d){
          if(!w.rdt){
            var p=w.rdt=function(){
              p.sendEvent ? p.sendEvent.apply(p,arguments) : p.callQueue.push(arguments)
            };
            p.callQueue=[];
            var t=d.createElement("script");
            t.src="https://www.redditstatic.com/ads/pixel.js";
            t.async=!0;
            var s=d.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(t,s);
          }
        }(window,document);
        rdt('init','a2_gyk6ih5ganfe');
        rdt('track', 'PageVisit');
        `,
      }}
    />
  );
}
