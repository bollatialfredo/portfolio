"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
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
                      Sensorpampa IoT Monitoring System
                    </h3>
                    <p className="text-gray-400">
                      A robust IoT platform processing and visualizing sensor
                      readings daily with real-time dashboards and alerts for
                      critical conditions.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Frontend Architecture
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li> • Vue 3 (&lt;script setup&gt;) with Vite</li>
                        <li>
                          • Real-time sensor dashboards via Node.js WebSocket
                          service
                        </li>
                        <li>• PWA with offline data viewing</li>
                        <li>• Mobile-responsive UI built with Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        Backend Systems
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Laravel REST API and Admin app</li>
                        <li>• Node.js WebSocket for real-time updates</li>
                        <li>• MQTT broker for device communication</li>
                        <li>• Keycloak authentication</li>
                        <li>• PostgreSQL primary database</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-red-400">
                      Infrastructure
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• CI CD pipeline using GitHub Actions</li>
                      <li>• Auto SSL certificates renewal</li>
                      <li>• Docker + NGINX load balancing</li>
                      <li>• VPS hosting</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        • 99.9% uptime using Docker + NGINX load balancing
                      </li>
                      <li>• Processing several sensor readings per day</li>
                      <li>• Data latency reduced to &gt; 500 ms end-to-end</li>
                      <li>• 30% reduction in infrastructure costs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    System Architecture
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
                      Sensorpampa Landing
                    </a>
                  </motion.div>
                  <motion.div>
                    <a
                      className="underline"
                      href="https://web.sensorpampa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sensorpampa Portal
                    </a>
                    <div>user: demo password: demo</div>
                  </motion.div>
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
                      Full Featured E-commerce Platform
                    </h3>
                    <p className="text-gray-400">
                      A store web application with full features built with
                      Next.js, TypeScript, Tailwind CSS, and Supabase.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Frontend Stack
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
                        Backend Stack
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
                      Devops
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Vercel Deployment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    Project Architecture
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
