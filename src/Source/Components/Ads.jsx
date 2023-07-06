import React, {useEffect} from 'react';
import '../Styles/Ads.css'
function Ads(props) {
    useEffect(() => {
        // Load Google AdSense script
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        document.body.appendChild(script);

        // Initialize Google AdSense
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
    }, []);

    return (
        <div className="ad-container Ads">
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="YOUR_AD_CLIENT_ID"
                data-ad-slot="YOUR_AD_SLOT_ID"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}

export default Ads;