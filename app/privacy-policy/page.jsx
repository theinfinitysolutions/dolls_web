export default function PrivacyPolicyPage() {
  return (
    <main className='max-w-4xl mx-auto p-8'>
      <div className='h-[10vh]' />
      <h1 className='text-4xl font-bold mb-6'>Privacy Policy</h1>

      <p className='mb-6'>
        {`At Doles Music, we respect your privacy and are committed to protecting the personal information you share with
        us. This Privacy Policy outlines how we collect, use, store, and disclose your data when you access or use our
        website and services.`}
      </p>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`1. Information We Collect`}</h2>
        <p className='mb-2'>{`We collect various types of information to provide and improve our services:`}</p>
        <h3 className='text-xl font-medium mb-1'>{`1.1 Information You Provide`}</h3>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`Personal Information: Name, email address, phone number, postal address`}</li>
          <li>{`Account Information: Username, password, profile details`}</li>
          <li>{`Payment Information: Credit card details, billing address (processed securely through our payment processors)`}</li>
          <li>{`Communications: Information provided in emails, feedback forms, or customer support interactions`}</li>
        </ul>

        <h3 className='text-xl font-medium mb-1'>{`1.2 Information Collected Automatically`}</h3>
        <ul className='list-disc pl-6'>
          <li>{`Usage Data: Pages visited, features used, time spent on site, clicks, content interactions`}</li>
          <li>{`Device Information: IP address, browser type and version, operating system, device type and identifiers`}</li>
          <li>{`Location Data: General location based on IP address (not precise geolocation unless consented to)`}</li>
          <li>{`Log Data: Server logs, error reports, and performance data`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`2. How We Use Your Information`}</h2>
        <p className='mb-2'>{`We use your information for the following purposes:`}</p>
        <h3 className='text-xl font-medium mb-1'>{`2.1 Service Provision and Improvement`}</h3>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`Provide, maintain, and improve our services and user experience`}</li>
          <li>{`Process transactions and fulfill orders`}</li>
          <li>{`Customize content and recommendations based on your preferences`}</li>
          <li>{`Develop new features and functionality`}</li>
        </ul>

        <h3 className='text-xl font-medium mb-1'>{`2.2 Communication`}</h3>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`Send important notices and updates about our services`}</li>
          <li>{`Respond to your inquiries and support requests`}</li>
          <li>{`Send newsletters, promotional materials, and other information that may interest you (with consent)`}</li>
          <li>{`Conduct surveys and collect feedback`}</li>
        </ul>

        <h3 className='text-xl font-medium mb-1'>{`2.3 Legal and Security Purposes`}</h3>
        <ul className='list-disc pl-6'>
          <li>{`Protect the security and integrity of our services`}</li>
          <li>{`Detect, prevent, and address fraud, unauthorized access, and other illegal activities`}</li>
          <li>{`Comply with legal obligations and enforce our terms and policies`}</li>
          <li>{`Establish, exercise, or defend legal claims`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`3. Cookies and Tracking Technologies`}</h2>
        <h3 className='text-xl font-medium mb-1'>{`3.1 Types of Cookies We Use`}</h3>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`Essential Cookies: Required for the website to function properly`}</li>
          <li>{`Preference Cookies: Remember your settings and preferences`}</li>
          <li>{`Analytics Cookies: Help us understand how visitors interact with our website`}</li>
          <li>{`Marketing Cookies: Used to deliver relevant advertisements and track campaign performance`}</li>
        </ul>

        <h3 className='text-xl font-medium mb-1'>{`3.2 Your Cookie Choices`}</h3>
        <p>
          {`You can manage cookie preferences through your browser settings or our cookie consent tool. Disabling certain
          cookies may limit your ability to use some features of our site. For more information on how we use cookies,
          please see our Cookie Policy.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`4. Information Sharing and Disclosure`}</h2>
        <p className='mb-2'>
          {`We do not sell or rent your personal data. We may share information in the following circumstances:`}
        </p>
        <ul className='list-disc pl-6'>
          <li>
            {`Service Providers: Third-party vendors who help us operate our website, process payments, analyze data,
            provide customer service, and deliver marketing communications. These providers are bound by contractual
            obligations to keep personal information confidential.`}
          </li>
          <li>
            {`Business Transfers: If Doles Music is involved in a merger, acquisition, or sale of assets, your information
            may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our
            website of any change in ownership or uses of your personal information.`}
          </li>
          <li>
            {`Legal Requirements: When required by law, court order, or governmental regulation, or when we believe
            disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate
            fraud, or respond to a government request.`}
          </li>
          <li>
            {`With Your Consent: We may share information with third parties when you have given us your consent to do so.`}
          </li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`5. Data Storage and Security`}</h2>
        <h3 className='text-xl font-medium mb-1'>{`5.1 Data Retention`}</h3>
        <p className='mb-3'>
          {`We retain your data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer
          retention period is required or permitted by law. When determining how long to retain data, we consider:`}
        </p>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`The amount, nature, and sensitivity of the personal data`}</li>
          <li>{`The potential risk of harm from unauthorized use or disclosure`}</li>
          <li>{`Whether we can achieve the purposes of processing through other means`}</li>
          <li>{`Applicable legal, regulatory, tax, accounting, or other requirements`}</li>
        </ul>

        <h3 className='text-xl font-medium mb-1'>{`5.2 Data Security`}</h3>
        <p>
          {`We implement appropriate technical and organizational measures to protect your personal information from
          unauthorized access, use, disclosure, alteration, or destruction. These measures include encryption,
          access controls, regular security assessments, and staff training. However, no method of transmission over
          the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`6. International Data Transfers`}</h2>
        <p>
          {`We may transfer, store, and process your information in countries other than your own. These countries may
          have data protection laws that differ from your country of residence. When we transfer personal data
          internationally, we take measures to ensure adequate protection for your information, such as implementing
          Standard Contractual Clauses approved by relevant data protection authorities, obtaining your consent for the
          transfer, or transferring to entities covered by approved certification mechanisms.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`7. Your Rights and Choices`}</h2>
        <p className='mb-2'>{`Depending on your location, you may have the following rights regarding your personal data:`}</p>
        <ul className='list-disc pl-6 mb-3'>
          <li>{`Access: Request a copy of the personal data we hold about you`}</li>
          <li>{`Correction: Request that we update or correct inaccurate data`}</li>
          <li>{`Deletion: Request that we delete your personal data in certain circumstances`}</li>
          <li>{`Restriction: Request that we temporarily or permanently stop processing your data`}</li>
          <li>{`Data Portability: Request a copy of your data in a structured, machine-readable format`}</li>
          <li>{`Objection: Object to our processing of your data in certain circumstances`}</li>
          <li>{`Withdraw Consent: Withdraw previously given consent for data processing`}</li>
        </ul>
        <p>
          {`To exercise these rights, please contact us using the details provided in the "Contact Us" section. We will
          respond to your request within the timeframe required by applicable law. In certain circumstances, we may ask
          for identification to verify your identity before fulfilling your request.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`8. Children's Privacy`}</h2>
        <p>
          {`Doles Music does not knowingly collect or solicit personal information from children under the age of 13
          (or the relevant age in your jurisdiction). If we learn that we have collected information from a child
          without parental consent, we will delete it immediately. If you believe we might have information from or
          about a child, please contact us immediately using the details provided in the "Contact Us" section.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`9. Third-Party Links and Services`}</h2>
        <p>
          {`Our website may contain links to third-party websites, plugins, and applications. Clicking on those links or
          enabling those connections may allow third parties to collect or share data about you. We do not control
          these third-party websites and are not responsible for their privacy statements. When you leave our website,
          we encourage you to read the privacy policy of every website you visit.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`10. Changes to This Privacy Policy`}</h2>
        <p>
          {`We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
          legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last updated" date.
          For significant changes, we will notify you by email or through a notice on our website before the changes
          take effect. We encourage you to review this Privacy Policy periodically to stay informed about how we protect
          your personal information.`}
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`11. Legal Basis for Processing (for EEA Users)`}</h2>
        <p className='mb-2'>
          {`For users in the European Economic Area (EEA), we process personal data on the following legal bases:`}
        </p>
        <ul className='list-disc pl-6'>
          <li>{`Consent: When you have given explicit consent for specific purposes`}</li>
          <li>{`Contract: When processing is necessary to fulfill a contract with you`}</li>
          <li>{`Legal Obligation: When processing is necessary to comply with legal requirements`}</li>
          <li>{`Legitimate Interests: When processing is in our legitimate interests and not overridden by your rights`}</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`12. Contact Us`} </h2>
        <p className='mb-2'>
          {`If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:`}
        </p>
        <p className='mb-2'>
          <strong>Email: </strong>
          <a href='mailto:support@dolesmusic.com' className='text-blue-600 underline'>
            support@dolesmusic.com
          </a>
        </p>
        <p className='mb-2'>
          <strong>Postal Address: </strong>
          {`Doles Music, 123 Music Avenue, Suite 456, San Francisco, CA 94107, USA`}
        </p>
        <p>
          <strong>Data Protection Officer: </strong>
          <a href='mailto:privacy@dolesmusic.com' className='text-blue-600 underline'>
            privacy@dolesmusic.com
          </a>
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>{`13. Complaints`}</h2>
        <p>
          {`If you are not satisfied with our response to your privacy concern, you have the right to complain to your
          local data protection authority. For EEA residents, you can find your data protection authority contact
          information at `}
          <a
            href='https://edpb.europa.eu/about-edpb/board/members_en'
            className='text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://edpb.europa.eu/about-edpb/board/members_en
          </a>
          {`.`}
        </p>
      </section>

      <p className='text-sm text-gray-500 mt-8'>{`Last updated: May 3, 2025`}</p>
    </main>
  );
}
