export default function PrivacyPolicyPage() {
  return (
    <main className='max-w-4xl mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-6'>Privacy Policy</h1>

      <p className='mb-6'>
        {`At Doles Music, we respect your privacy and are committed to protecting the personal information you share with
        us. This Privacy Policy outlines how we collect, use, store, and disclose your data when you access or use our
            website and services.`}
      </p>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`1. Information We Collect`}</h2>
        <ul className='list-disc pl-6'>
          <li>{`Personal Information (e.g., name, email address, phone number)`}</li>
          <li>{`Usage Data (e.g., pages visited, time spent on site, clicks)`}</li>
          <li>{`Payment Information (if you make a purchase or donation)`}</li>
          <li>{`Device and Browser Data (e.g., IP address, device type, OS)`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`2. How We Use Your Information`}</h2>
        <p>{`The information we collect may be used to:`}</p>
        <ul className='list-disc pl-6'>
          <li>{`Provide and personalize our services`}</li>
          <li>{`Improve website functionality and user experience`}</li>
          <li>{`Send you service updates, newsletters, and promotions (with consent)`}</li>
          <li>{`Respond to your inquiries and support requests`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`3. Cookies and Tracking`}</h2>
        <p>
          {`We use cookies and similar tracking technologies to enhance your browsing experience. You can choose to
          disable cookies through your browser settings, though some features of the site may not function properly.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`4. Sharing Your Information`}</h2>
        <p>
          {`We do not sell or rent your personal data. We may share information with third-party vendors and service
          providers who help us operate our website or fulfill services (e.g., payment processors, analytics providers),
          and only under strict confidentiality agreements.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`5. Data Retention`}</h2>
        <p>
          {`We retain your data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer
          retention period is required or permitted by law.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`6. Your Rights`}</h2>
        <p>{`Depending on your location, you may have the right to:`}</p>
        <ul className='list-disc pl-6'>
          <li>{`Access the personal data we hold about you`}</li>
          <li>{`Request correction or deletion of your data`}</li>
          <li>{`Withdraw consent for data processing`}</li>
          <li>{`Complain to a data protection authority`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`7. Children’s Privacy`}</h2>
        <p>
          {`Doles Music does not knowingly collect or solicit personal information from children under the age of 13. If
          we learn that we have collected information from a child without parental consent, we will delete it
          immediately.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`8. Contact Us`} </h2>
        <p>
          {`If you have questions or concerns regarding this Privacy Policy, please contact us at:`} <br />
          <a href='mailto:support@dolesmusic.com' className='text-blue-600 underline'>
            support@dolesmusic.com
          </a>
        </p>
      </section>

      <p className='text-sm text-gray-500 mt-8'>{`Last updated: May 3, 2025`}</p>
    </main>
  );
}
