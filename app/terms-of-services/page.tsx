import React from "react";

const TermsOfServices = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <p className="mb-6">
        These Terms of Use, together with our Privacy Policy and any additional
        terms incorporated by reference (collectively, the “Terms”), govern your
        access to and use of our website <b>ringscaleai.com</b>, the
        Software-as-a-Service (SaaS) platform, and mobile applications
        (collectively, the “Platform”), as well as the services, data,
        notifications, and content provided through them (collectively, the
        “Services”).
      </p>

      <p className="mb-8">
        The Terms constitute a binding legal agreement between{" "}
        <b>You ("User")</b> and <b>Ringscale ai</b>
        ("Ringscale AI", "Company", "We", "Us", "Our").
      </p>

      {/* Definitions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Definitions</h2>

        <p className="mb-2">
          <b>Account:</b> Refers to the user account created to access the
          Platform and use the Services.
        </p>

        <p className="mb-2">
          <b>Content:</b> Information, data, products, services, and
          documentation made available through the Platform.
        </p>

        <p className="mb-2">
          <b>Credentials:</b> Username, password, authentication codes, or any
          other information used to access the Services.
        </p>

        <p className="mb-2">
          <b>Personal Information:</b> Information that identifies an
          individual, such as name, phone number, email address, nationality,
          organization, or designation.
        </p>

        <p>
          <b>Service Plan:</b> The plan under which Services are provided,
          determining available features and pricing.
        </p>
      </section>

      {/* Consent */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Consent</h2>

        <p className="mb-4">
          By accessing or using the Platform, you agree to be bound by these
          Terms. If you do not agree with any part of the Terms, you must not
          use the Platform or the Services.
        </p>

        <p>
          By using the Platform, you confirm that you are at least{" "}
          <b>18 years of age</b> and legally capable of entering into this
          agreement.
        </p>
      </section>

      {/* User Registration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">User Registration</h2>

        <p className="mb-4">
          To access certain Services, you may need to register an account. You
          are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>

        <p>
          Ringscale AI may suspend or terminate accounts that violate these
          Terms or misuse the Services.
        </p>
      </section>

      {/* License */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">License to Use Services</h2>

        <p className="mb-4">
          Subject to compliance with these Terms, Ringscale AI grants you a
          non-exclusive, non-transferable, revocable license to access and use
          the Platform solely for personal or internal business purposes.
        </p>

        <p>
          You may not reproduce, distribute, or commercially exploit any part
          of the Services without prior written consent from Ringscale AI.
        </p>
      </section>

      {/* Restrictions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">General Restrictions</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Impersonate any individual or entity.</li>
          <li>Reverse engineer or attempt to access source code.</li>
          <li>Scrape or copy platform data without permission.</li>
          <li>Upload malicious software or harmful content.</li>
          <li>Use the Platform for unlawful or fraudulent purposes.</li>
        </ul>
      </section>

      {/* Service Plans */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Access to Services & Service Plans
        </h2>

        <p className="mb-4">
          Access to certain features depends on the selected Service Plan. If a
          Service Plan expires or is cancelled, access to certain Services may
          be restricted until a new plan is purchased.
        </p>

        <p>
          Ringscale AI reserves the right to update pricing or service scope
          with prior notice.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>

        <p>
          All content, design, software, code, and features of the Platform are
          the exclusive property of Ringscale AI. Unauthorized
          use or reproduction of platform content is strictly prohibited.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>

        <p>
          The Platform and Services are provided on an “as is” and “as
          available” basis. Ringscale AI does not guarantee uninterrupted,
          secure, or error-free operation of the Platform.
        </p>
      </section>

      {/* Liability */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>

        <p>
          Ringscale AI shall not be liable for any indirect, incidental, or
          consequential damages arising from the use or inability to use the
          Platform or Services.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Governing Law & Jurisdiction
        </h2>

        <p>
          These Terms shall be governed by the laws of India. Any disputes
          arising from these Terms shall fall under the exclusive jurisdiction
          of the courts of Mumbai, India.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Contact</h2>

        <p>
          If you have any questions about these Terms, please contact us at:
        </p>

        <p className="mt-2 font-medium">support@ringscaleai.com</p>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: 1 August 2025
        </p>
      </section>
    </div>
  );
};

export default TermsOfServices;