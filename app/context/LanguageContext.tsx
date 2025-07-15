'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.name': 'Alfredo Bollati',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'With over eight years of software development experience, I architect and deliver end-to-end, scalable solutions while leading high-performing development teams.',
    'hero.position': 'Senior Full Stack Developer',
    'hero.frontend': 'Frontend Development',
    'hero.frontend.item1': 'Modern React & VueJS Architectures',
    'hero.frontend.item2': 'Performance Optimization',
    'hero.frontend.item3': 'Responsive & Interactive UIs',
    'hero.backend': 'Backend Development',
    'hero.backend.item1': 'API Design & Development',
    'hero.backend.item2': 'Database Architecture',
    'hero.backend.item3': 'Real-time Systems',
    'hero.devops': 'DevOps & Cloud',
    'hero.devops.item1': 'Docker Infrastructure',
    'hero.devops.item2': 'CI/CD Pipelines',
    'hero.devops.item3': 'Scalable Architecture',
    
    // Projects Section
    'projects.title': 'Full Stack Projects',
    'projects.iot.title': 'Sensorpampa IoT Monitoring System',
    'projects.iot.description': 'A robust IoT platform processing and visualizing sensor readings daily with real-time dashboards and alerts for critical conditions.',
    'projects.iot.frontend': 'Frontend Architecture',
    'projects.iot.frontend.item1': 'Vue 3 (<script setup>) with Vite',
    'projects.iot.frontend.item2': 'Real-time sensor dashboards via Node.js WebSocket service',
    'projects.iot.frontend.item3': 'PWA with offline data viewing',
    'projects.iot.frontend.item4': 'Mobile-responsive UI built with Tailwind CSS',
    'projects.iot.backend': 'Backend Systems',
    'projects.iot.backend.item1': 'Laravel REST API and Admin app',
    'projects.iot.backend.item2': 'Node.js WebSocket for real-time updates',
    'projects.iot.backend.item3': 'MQTT broker for device communication',
    'projects.iot.backend.item4': 'Keycloak authentication',
    'projects.iot.backend.item5': 'PostgreSQL primary database',
    'projects.iot.infrastructure': 'Infrastructure',
    'projects.iot.infrastructure.item1': 'CI CD pipeline using GitHub Actions',
    'projects.iot.infrastructure.item2': 'Auto SSL certificates renewal',
    'projects.iot.infrastructure.item3': 'Docker + NGINX load balancing',
    'projects.iot.infrastructure.item4': 'VPS hosting',
    'projects.iot.achievements': 'Key Achievements',
    'projects.iot.achievements.item1': '99.9% uptime using Docker + NGINX load balancing',
    'projects.iot.achievements.item2': 'Processing several sensor readings per day',
    'projects.iot.achievements.item3': 'Data latency reduced to > 500 ms end-to-end',
    'projects.iot.achievements.item4': '30% reduction in infrastructure costs',
    'projects.iot.architecture': 'System Architecture',
    'projects.iot.landing': 'Sensorpampa Landing',
    'projects.iot.portal': 'Sensorpampa Portal',
    
    'projects.ecommerce.title': 'Full Featured E-commerce Platform',
    'projects.ecommerce.description': 'A store web application with full features built with Next.js, TypeScript, Tailwind CSS, and Supabase.',
    'projects.ecommerce.frontend': 'Frontend Stack',
    'projects.ecommerce.backend': 'Backend Stack',
    'projects.ecommerce.devops': 'Devops',
    'projects.ecommerce.architecture': 'Project Architecture',
    
    // Contact Section
    'contact.title': 'Let\'s Build Something Amazing',
    'contact.description': 'Looking for a full-stack developer who can architect and implement complete solutions? Let\'s discuss your project.',
    'contact.location': 'Tandil, Argentina, UTC-03',
    'contact.email': 'Get in Touch',
    'contact.resume': 'View Resume',
  },
  es: {
    // Hero Section
    'hero.name': 'Alfredo Bollati',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Con más de ocho años de experiencia en desarrollo de software, diseño y entrego soluciones escalables de extremo a extremo mientras lidero equipos de desarrollo de alto rendimiento.',
    'hero.position': 'Desarrollador Full Stack Senior',
    'hero.frontend': 'Desarrollo Frontend',
    'hero.frontend.item1': 'Arquitecturas modernas de React y VueJS',
    'hero.frontend.item2': 'Optimización de rendimiento',
    'hero.frontend.item3': 'Interfaces responsivas e interactivas',
    'hero.backend': 'Desarrollo Backend',
    'hero.backend.item1': 'Diseño y desarrollo de APIs',
    'hero.backend.item2': 'Arquitectura de bases de datos',
    'hero.backend.item3': 'Sistemas en tiempo real',
    'hero.devops': 'DevOps y Cloud',
    'hero.devops.item1': 'Infraestructura Docker',
    'hero.devops.item2': 'Pipelines CI/CD',
    'hero.devops.item3': 'Arquitectura escalable',
    
    // Projects Section
    'projects.title': 'Proyectos Full Stack',
    'projects.iot.title': 'Sistema de Monitoreo IoT Sensorpampa',
    'projects.iot.description': 'Una plataforma IoT robusta que procesa y visualiza lecturas de sensores diariamente con paneles en tiempo real y alertas para condiciones críticas.',
    'projects.iot.frontend': 'Arquitectura Frontend',
    'projects.iot.frontend.item1': 'Vue 3 (<script setup>) con Vite',
    'projects.iot.frontend.item2': 'Paneles de sensores en tiempo real vía servicio WebSocket Node.js',
    'projects.iot.frontend.item3': 'PWA con visualización de datos offline',
    'projects.iot.frontend.item4': 'UI responsive para móviles construida con Tailwind CSS',
    'projects.iot.backend': 'Sistemas Backend',
    'projects.iot.backend.item1': 'API REST Laravel y aplicación Admin',
    'projects.iot.backend.item2': 'WebSocket Node.js para actualizaciones en tiempo real',
    'projects.iot.backend.item3': 'Broker MQTT para comunicación con dispositivos',
    'projects.iot.backend.item4': 'Autenticación Keycloak',
    'projects.iot.backend.item5': 'Base de datos principal PostgreSQL',
    'projects.iot.infrastructure': 'Infraestructura',
    'projects.iot.infrastructure.item1': 'Pipeline CI/CD usando GitHub Actions',
    'projects.iot.infrastructure.item2': 'Renovación automática de certificados SSL',
    'projects.iot.infrastructure.item3': 'Balanceo de carga Docker + NGINX',
    'projects.iot.infrastructure.item4': 'Alojamiento VPS',
    'projects.iot.achievements': 'Logros Clave',
    'projects.iot.achievements.item1': '99.9% de disponibilidad usando balanceo de carga Docker + NGINX',
    'projects.iot.achievements.item2': 'Procesamiento de varias lecturas de sensores por día',
    'projects.iot.achievements.item3': 'Latencia de datos reducida a > 500 ms de extremo a extremo',
    'projects.iot.achievements.item4': '30% de reducción en costos de infraestructura',
    'projects.iot.architecture': 'Arquitectura del Sistema',
    'projects.iot.landing': 'Página de Sensorpampa',
    'projects.iot.portal': 'Portal de Sensorpampa',
    
    'projects.ecommerce.title': 'Plataforma E-commerce Completa',
    'projects.ecommerce.description': 'Una aplicación web de tienda con todas las funcionalidades construida con Next.js, TypeScript, Tailwind CSS y Supabase.',
    'projects.ecommerce.frontend': 'Stack Frontend',
    'projects.ecommerce.backend': 'Stack Backend',
    'projects.ecommerce.devops': 'Devops',
    'projects.ecommerce.architecture': 'Arquitectura del Proyecto',
    
    // Contact Section
    'contact.title': 'Construyamos Algo Increíble',
    'contact.description': '¿Buscas un desarrollador full-stack que pueda diseñar e implementar soluciones completas? Hablemos sobre tu proyecto.',
    'contact.location': 'Tandil, Argentina, UTC-03',
    'contact.email': 'Contáctame',
    'contact.resume': 'Ver Currículum',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Check URL for language parameter on client-side
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/es')) {
      setLanguage('es');
    }
  }, []);

  // Update URL when language changes
  useEffect(() => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/(en|es)/, '');
    
    if (language === 'en') {
      if (currentPath.startsWith('/es')) {
        window.history.pushState({}, '', basePath || '/');
      }
    } else {
      if (!currentPath.startsWith('/es')) {
        window.history.pushState({}, '', `/es${basePath || '/'}`);
      }
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
