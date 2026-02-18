import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Cpu, Server, GraduationCap, Award } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto pt-24 pb-16 px-6 border-b border-slate-800">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-transparent">
          Aashish Tripathi
        </h1>
        <p className="mt-4 text-2xl text-blue-400 font-mono">
          Member of Technical Staff-2
        </p>
        <p className="mt-6 max-w-2xl text-slate-400 text-lg leading-relaxed">
          Architecting real-time stream processing pipelines, distributed state consistency, and scalable cloud metering systems. Experienced in building robust backend services and centralized security frameworks.
        </p>
        
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/aashishtri" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Github size={20} /> <span className="hidden sm:inline">github.com/aashishtri</span>
          </a>
          <a href="https://www.linkedin.com/in/aashish-tripathi-9075b7155/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Linkedin size={20} /> <span className="hidden sm:inline">in/aashish-tripathi</span>
          </a>
          <a href="mailto:aashishk1999@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={20} /> <span className="hidden sm:inline">aashishk1999@gmail.com</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-24 py-16">
        
        {/* --- EXPERIENCE SECTION --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3 text-slate-100">
            <Server className="text-blue-500" /> Experience
          </h2>
          
          <div className="space-y-12">
            
            {/* Nutanix MTS-2 */}
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Member of Technical Staff-2</h3>
                  <p className="text-blue-400 font-medium">Nutanix, Bangalore</p>
                </div>
                <span className="text-slate-500 font-mono text-sm bg-slate-900 px-3 py-1 rounded-full">Sep 2023 — Present</span>
              </div>
              <ul className="space-y-3 text-slate-400 list-disc ml-4 marker:text-slate-700">
                <li>Designed and implemented a scalable security auditing pipeline using <strong>Apache Flink</strong> and <strong>NATS Jetstream</strong>, ingesting high-throughput CDC and batch events with at-least-once processing guarantees.</li>
                <li>Engineered distributed state reconciliation to handle "missed delete" events via snapshot metadata against PostgreSQL, utilizing <strong>Advisory Locks</strong> to resolve race conditions.</li>
                <li>Led a multi-cloud usage tracking system (AWS, Azure, Nutanix) using <strong>Netflix Conductor</strong> and <strong>Elasticsearch</strong> to orchestrate precise billing workflows.</li>
                <li>Optimized pipeline performance by refactoring Flink topologies to eliminate unnecessary KeyBy shuffling and implemented Redis caching for foreign keys.</li>
              </ul>
            </div>

            {/* Nutanix MTS-1 */}
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Member of Technical Staff-1</h3>
                  <p className="text-slate-400">Nutanix, Bangalore</p>
                </div>
                <span className="text-slate-500 font-mono text-sm bg-slate-900 px-3 py-1 rounded-full">Mar 2022 — Aug 2023</span>
              </div>
              <ul className="space-y-3 text-slate-400 list-disc ml-4 marker:text-slate-700">
                <li>Built a centralized security auditing framework using Elasticsearch to monitor user activity by tracking API calls and admin actions like login, account onboard/delete, and config changes.</li>
                <li>Decreased chronic batch processing backlog by ~50% by designing a solution that handles ~1M events/hour.</li>
                <li>Implemented and released comprehensive ISO, SOC2, and GDPR compliance policies across heterogeneous cloud environments.</li>
                <li>Wrote test cases for the DAO layer using Docker test containers, increasing code coverage from 0% to 90%.</li>
              </ul>
            </div>

            {/* Schlumberger */}
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Software Engineer</h3>
                  <p className="text-slate-400">Schlumberger, Pune</p>
                </div>
                <span className="text-slate-500 font-mono text-sm bg-slate-900 px-3 py-1 rounded-full">Aug 2021 — Mar 2022</span>
              </div>
              <ul className="space-y-3 text-slate-400 list-disc ml-4 marker:text-slate-700">
                <li>Built backend services using Java for IdeaFactory, an internal employee idea submission platform.</li>
                <li>Implemented core REST APIs and platform features using Spring Boot to handle workflow management and user access control.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* --- TECHNICAL SKILLS SECTION --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3 text-slate-100">
            <Cpu className="text-blue-500" /> Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <Code2 className="text-blue-400 mb-4" />
              <h3 className="text-slate-100 font-bold mb-3">Languages & Backend</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Java, C++, Spring Boot, RESTful APIs, gRPC, Microservices, System Design, Data Structures & Algorithms.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <Database className="text-blue-400 mb-4" />
              <h3 className="text-slate-100 font-bold mb-3">Streaming & Storage</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Apache Flink, NATS JetStream, Pulsar, PostgreSQL, Redis, Elasticsearch, Druid.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <Server className="text-blue-400 mb-4" />
              <h3 className="text-slate-100 font-bold mb-3">Cloud & Infra</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Kubernetes (K8S), AWS, Nutanix Cloud, SaaS-to-OnPrem migrations, Netflix Conductor.</p>
            </div>
          </div>
        </section>

        {/* --- PROJECTS & EDUCATION GRID --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-slate-100">
              <Award className="text-blue-500" /> Key Projects
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-200 mb-2">Indian Sign Language Recognition</h3>
                <p className="text-sm text-blue-400 mb-3 font-mono">ML, Image Processing</p>
                <p className="text-slate-400 text-sm">Trained an ML model on 31,200 images, achieving 99% static and 73% real-world accuracy.</p>
              </div>
              <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-200 mb-2">Automated Essay Grading</h3>
                <p className="text-sm text-blue-400 mb-3 font-mono">LSTM, GloVe, NLP</p>
                <p className="text-slate-400 text-sm">Implemented an LSTM and regression system utilizing GloVe embeddings, achieving a 0.92 Cohen's kappa score.</p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-slate-100">
              <GraduationCap className="text-blue-500" /> Education & Achievements
            </h2>
            <div className="space-y-6">
              <div className="p-6 border-l-2 border-slate-800">
                <h3 className="text-lg font-bold text-slate-200">B.E. Information Technology</h3>
                <p className="text-blue-400 mb-2">Netaji Subhas Institute of Technology, Delhi</p>
                <p className="text-slate-400 text-sm font-mono mb-2">2017 — 2021 | Score: 81.1%</p>
              </div>
              <div className="p-6 border-l-2 border-slate-800">
                <h3 className="text-lg font-bold text-slate-200 mb-3">Highlights</h3>
                <ul className="space-y-2 text-sm text-slate-400 list-disc ml-4 marker:text-slate-600">
                  <li>AIR 4484 in JEE Mains</li>
                  <li>CBSE Merit Certificate</li>
                  <li>STSE Scholarship</li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-600 text-sm">
        <p>Interests: Football, Video Games, Music, Reading</p>
        <p className="mt-2">© {new Date().getFullYear()} Aashish Tripathi.</p>
      </footer>
    </div>
  );
}
