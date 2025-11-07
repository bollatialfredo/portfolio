"use client";

import type { Metadata } from "next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

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
  const { language } = useLanguage();

  const isES = language === "es";

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            {isES ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
          <LanguageSwitcher />
        </div>

        <div className="prose prose-invert prose-headings:scroll-mt-24">
          <p className="text-gray-300">
            {isES
              ? "Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal cuando visitas o interactúas con este portafolio profesional."
              : "This Privacy Policy describes how personal information is collected, used, and protected when you visit or interact with this professional portfolio."}
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            {isES ? "Responsable" : "Controller"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "Responsable: Alfredo Bollati. Finalidad: Mostrar trabajos, proyectos y ofrecer vías de contacto profesional."
              : "Controller: Alfredo Bollati. Purpose: Showcase work, projects, and provide professional contact channels."}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Datos que se recopilan" : "Data Collected"}
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              {isES
                ? "Datos técnicos: dirección IP, tipo de navegador, páginas visitadas y tiempo de visita (a través de analíticas básicas, si están habilitadas)."
                : "Technical data: IP address, browser type, pages visited, and visit duration (via basic analytics, if enabled)."}
            </li>
            <li>
              {isES
                ? "Datos de contacto: si me escribes por correo o formulario, el contenido que envíes (nombre, email, mensaje)."
                : "Contact data: if you email or use a form, the content you submit (name, email, message)."}
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Uso de la información" : "Use of Information"}
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              {isES
                ? "Responder consultas profesionales y oportunidades laborales."
                : "Respond to professional inquiries and opportunities."}
            </li>
            <li>
              {isES
                ? "Mejorar el contenido y rendimiento del sitio."
                : "Improve site content and performance."}
            </li>
            <li>
              {isES
                ? "Mantener la seguridad del sitio."
                : "Maintain site security."}
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Base legal" : "Legal Basis"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "El tratamiento se basa en el interés legítimo para operar este sitio y en el consentimiento del usuario cuando corresponde (por ejemplo, envío de mensajes)."
              : "Processing is based on legitimate interest to operate this site and user consent where applicable (e.g., contact messages)."}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Conservación" : "Retention"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "Los datos de contacto se conservan el tiempo necesario para gestionar tu solicitud. Los datos técnicos se conservan por períodos limitados según las herramientas utilizadas."
              : "Contact data is retained as long as needed to manage your request. Technical data is retained for limited periods depending on the tools used."}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Destinatarios" : "Sharing"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "No se venden datos personales. Proveedores de infraestructura o analítica podrían procesar datos técnicos de forma agregada." 
              : "Personal data is not sold. Infrastructure or analytics providers may process technical data in aggregate."}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Cookies</h2>
          <p className="text-gray-300">
            {isES
              ? "Este sitio puede utilizar cookies esenciales para su funcionamiento y, opcionalmente, cookies de analítica. Puedes configurar tu navegador para bloquearlas."
              : "This site may use essential cookies for operation and, optionally, analytics cookies. You can configure your browser to block them."}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Derechos" : "Your Rights"}
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>{isES ? "Acceso" : "Access"}</li>
            <li>{isES ? "Rectificación" : "Rectification"}</li>
            <li>{isES ? "Supresión" : "Erasure"}</li>
            <li>{isES ? "Limitación" : "Restriction"}</li>
            <li>{isES ? "Oposición" : "Objection"}</li>
            <li>{isES ? "Portabilidad" : "Portability"}</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Contacto" : "Contact"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "Para ejercer tus derechos o realizar consultas sobre privacidad, puedes contactarme en: contacto@bollatialfredo.com"
              : "To exercise your rights or ask privacy questions, contact me at: contact@bollatialfredo.com"}
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            {isES ? "Cambios a esta política" : "Changes to This Policy"}
          </h2>
          <p className="text-gray-300">
            {isES
              ? "Esta política puede actualizarse para reflejar cambios legales o técnicos. La fecha de la última actualización se indicará abajo."
              : "This policy may be updated to reflect legal or technical changes. The date of the last update will be indicated below."}
          </p>

          <p className="mt-8 text-sm text-gray-400">
            {isES ? "Última actualización: " : "Last updated: "}
            {new Date().toLocaleDateString(isES ? "es-AR" : "en-US")}
          </p>
        </div>
      </div>
    </main>
  );
}
