import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Alfredo Bollati",
  description:
    "Privacy policy detailing how personal data is collected, used, and protected on Alfredo Bollati's developer portfolio website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <PrivacyPolicyContent />
    </main>
  );
}
