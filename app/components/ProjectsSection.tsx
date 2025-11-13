"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="space-y-16">
          {/* E-commerce Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t('projects.iot.title')}
                    </h3>
                    <p className="text-gray-400">
                      {t('projects.iot.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        {t('projects.iot.frontend')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li> • {t('projects.iot.frontend.item1')}</li>
                        <li>
                          • {t('projects.iot.frontend.item2')}
                        </li>
                        <li>• {t('projects.iot.frontend.item3')}</li>
                        <li>• {t('projects.iot.frontend.item4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        {t('projects.iot.backend')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• {t('projects.iot.backend.item1')}</li>
                        <li>• {t('projects.iot.backend.item2')}</li>
                        <li>• {t('projects.iot.backend.item3')}</li>
                        <li>• {t('projects.iot.backend.item4')}</li>
                        <li>• {t('projects.iot.backend.item5')}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-red-400">
                      {t('projects.iot.infrastructure')}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• {t('projects.iot.infrastructure.item1')}</li>
                      <li>• {t('projects.iot.infrastructure.item2')}</li>
                      <li>• {t('projects.iot.infrastructure.item3')}</li>
                      <li>• {t('projects.iot.infrastructure.item4')}</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      {t('projects.iot.achievements')}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        • {t('projects.iot.achievements.item1')}
                      </li>
                      <li>• {t('projects.iot.achievements.item2')}</li>
                      <li>• {t('projects.iot.achievements.item3')}</li>
                      <li>• {t('projects.iot.achievements.item4')}</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    {t('projects.iot.architecture')}
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    {/* Add detailed system architecture diagram here */}
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Client Layer */}
                      <g>
                        <rect
                          x="20"
                          y="0"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="25"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          VueJS Frontend App with PWA - Laravel Admin App
                        </text>
                      </g>

                      {/* keycloak */}
                      <g>
                        <rect
                          x="20"
                          y="80"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-teal-500/20 stroke-teal-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="100"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Keycloak Authentication
                        </text>
                      </g>

                      {/* API Layer */}
                      <g>
                        <rect
                          x="20"
                          y="140"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-red-500/20 stroke-red-500"
                          strokeWidth="1"
                        />
                        <rect
                          x="210"
                          y="140"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-teal-500/20 stroke-teal-500"
                          strokeWidth="1"
                        />
                        <text
                          x="105"
                          y="163"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Laravel REST API
                        </text>
                        <text
                          x="295"
                          y="163"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Node WebSocket Service
                        </text>
                      </g>

                      {/* Database Layer */}
                      <g>
                        <rect
                          x="20"
                          y="210"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />
                        <rect
                          x="210"
                          y="210"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-purple-500/20 stroke-purple-500"
                          strokeWidth="1"
                        />
                        <text
                          x="105"
                          y="235"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          PostgreSQL
                        </text>
                        <text
                          x="295"
                          y="235"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          MQTT Broker
                        </text>
                      </g>

                      {/* Connection Lines */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="200" y1="40" x2="200" y2="80" />
                        <line x1="105" y1="110" x2="105" y2="140" />
                        <line x1="295" y1="110" x2="295" y2="140" />
                        <line x1="105" y1="181" x2="105" y2="210" />
                        <line x1="295" y1="181" x2="295" y2="210" />
                      </g>
                    </svg>
                  </div>
                  <motion.div>
                    <a
                      className="underline"
                      href="https://sensorpampa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.iot.landing')}
                    </a>
                  </motion.div>

                  <motion.div>
                    <a
                      className="underline"
                      href="https://web.sensorpampa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.iot.portal')}
                    </a>
                    <div>user: demo password: demo</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sheepie WhatsApp Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t('projects.sheepie.title')}
                    </h3>
                    <p className="text-gray-400">
                      {t('projects.sheepie.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        {t('projects.sheepie.backend')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• {t('projects.sheepie.backend.item1')}</li>
                        <li>• {t('projects.sheepie.backend.item2')}</li>
                        <li>• {t('projects.sheepie.backend.item3')}</li>
                        <li>• {t('projects.sheepie.backend.item4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        {t('projects.sheepie.admin')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• {t('projects.sheepie.admin.item1')}</li>
                        <li>• {t('projects.sheepie.admin.item2')}</li>
                        <li>• {t('projects.sheepie.admin.item3')}</li>
                        <li>• {t('projects.sheepie.admin.item4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    {t('projects.sheepie.architecture')}
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    {/* Simple architecture diagram placeholder */}
                    <svg className="w-full h-full" viewBox="0 0 500 300">
                      {/* Chatbot Engine */}
                      <g>
                        <rect x="20" y="20" width="200" height="60" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                        <text x="120" y="55" textAnchor="middle" className="fill-gray-400 text-[12px]">Node.js Chatbot Engine</text>
                      </g>

                      {/* WhatsApp */}
                      <g>
                        <rect x="280" y="20" width="200" height="60" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
                        <text x="380" y="55" textAnchor="middle" className="fill-gray-400 text-[12px]">WhatsApp API</text>
                      </g>

                      {/* Admin Backoffice */}
                      <g>
                        <rect x="20" y="120" width="200" height="60" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                        <text x="120" y="155" textAnchor="middle" className="fill-gray-400 text-[12px]">Laravel + Filament Admin</text>
                      </g>

                      {/* Database */}
                      <g>
                        <rect x="280" y="120" width="200" height="60" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                        <text x="380" y="155" textAnchor="middle" className="fill-gray-400 text-[12px]">MySQL Database</text>
                      </g>

                      {/* Connections */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="220" y1="50" x2="280" y2="50" />
                        <line x1="120" y1="80" x2="120" y2="120" />
                        <line x1="220" y1="150" x2="280" y2="150" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-time Analytics Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t('projects.ecommerce.title')}
                    </h3>
                    <p className="text-gray-400">
                      {t('projects.ecommerce.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        {t('projects.ecommerce.frontend')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Next.js</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Clerk Auth</li>
                        <li>• Stripe</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        {t('projects.ecommerce.backend')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Next.js API Routes</li>
                        <li>• TypeScript</li>
                        <li>• Supabase</li>
                        <li>• Prisma</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      {t('projects.ecommerce.devops')}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Vercel Deployment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    {t('projects.ecommerce.architecture')}
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    <svg className="w-full h-full" viewBox="0 0 500 300">
                      {/* Client Layer */}
                      <g>
                        <rect
                          x="20"
                          y="0"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="25"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Next.js Frontend App - Clerk Auth
                        </text>
                      </g>

                      {/* keycloak */}
                      <g>
                        <rect
                          x="20"
                          y="80"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-teal-500/20 stroke-teal-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="100"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Clerk Authentication
                        </text>
                      </g>

                      {/* API Layer */}
                      <g>
                        <rect
                          x="20"
                          y="140"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-red-500/20 stroke-red-500"
                          strokeWidth="1"
                        />

                        <text
                          x="200"
                          y="163"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Next.js API Routes
                        </text>

                      </g>

                      {/* Database Layer */}
                      <g>
                        <rect
                          x="20"
                          y="210"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />

                        <rect
                          x="20"
                          y="280"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />

                        <text
                          x="200"
                          y="235"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Prisma
                        </text>

                        <text
                          x="200"
                          y="305"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          PostgreSQL
                        </text>

                      </g>

                      {/* Connection Lines */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="200" y1="41" x2="200" y2="79" />
                        <line x1="200" y1="111" x2="200" y2="139" />
                        <line x1="200" y1="181" x2="200" y2="209" />
                        <line x1="200" y1="251" x2="200" y2="279" />
                      </g>
                    </svg>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-md text-gray-200 font-semibold mb-4"
                  >
                    <a
                      className="underline"
                      href="https://store.bollatialfredo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo Store
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
