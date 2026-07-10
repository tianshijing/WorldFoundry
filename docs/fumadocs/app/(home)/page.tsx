import Link from 'next/link';
import { ArrowRight, GitFork } from 'lucide-react';
import { SiteNav } from '@/components/site-nav';
import { SiteSearchTrigger } from '@/components/site-search-trigger';
import { WorldFoundryWordmarkLink } from '@/components/worldfoundry-wordmark';
import { withBasePath } from '@/lib/site-path';

export default function HomePage() {
  return (
    <main className="pi-home-shell wf-home-shell">
      <header className="pi-header pi-doc-header wf-home-site-header">
        <div className="pi-doc-header-inner flex flex-wrap items-center justify-between w-full">
          <div className="pi-doc-header-brand">
            <WorldFoundryWordmarkLink variant="compact" />
          </div>
          <div className="pi-doc-header-tools ml-auto">
            <SiteNav active="home" />
            <SiteSearchTrigger />
            <div className="pi-language-switch" aria-label="Language">
              <Link href="/" aria-current="true">
                English
              </Link>
              <Link href="/zh/docs">中文</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="wf-home-hero" aria-labelledby="wf-home-title">
        <img
          className="wf-home-hero-poster"
          src={withBasePath('/cover_4x4_hero-poster.webp')}
          alt=""
          aria-hidden="true"
        />
        <video
          className="wf-home-hero-video"
          src={withBasePath('/cover_4x4_hero.mp4')}
          poster={withBasePath('/cover_4x4_hero-poster.webp')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="wf-home-hero-scrim" aria-hidden="true" />

        <div className="wf-home-hero-content">
          <h1 id="wf-home-title">WorldFoundry</h1>
          <p className="wf-home-hero-lead">A unified codebase and taxonomy for world models.</p>
          <div className="wf-home-hero-actions">
            <Link href="/docs" className="wf-home-button wf-home-button-primary">
              <span>Read the docs</span>
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </Link>
            <a
              href="https://github.com/OpenEnvision/WorldFoundry"
              target="_blank"
              rel="noreferrer"
              className="wf-home-button wf-home-button-secondary"
            >
              <GitFork aria-hidden="true" size={17} strokeWidth={1.8} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8 md:pb-20">
        <section className="wf-home-overview">
          <h2>One infrastructure. Every world model.</h2>
          <p>
            WorldFoundry treats world modeling as faithful simulation of the physical world, not
            just reproduction of observed appearances. Its shared capability taxonomy spans
            perception, manipulation, dynamics, and interaction.
          </p>
        </section>

        <section className="mb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-3xl text-[var(--pi-ink)]">Beyond Perceptual Realism</h2>
            <div className="text-left text-base leading-relaxed text-[var(--pi-muted)] space-y-4 indent-8">
              <p>
                Recent advances in generative modeling across video, 3D, and emerging 4D modalities
                have fueled the view that these systems are evolving into world models capable of
                simulating dynamic environments. Yet existing work often conflates perceptual
                realism with genuine simulation ability.
              </p>
              <p>
                Perceptual realism, however impressive, is neither necessary nor sufficient for
                genuine simulation competence. WorldFoundry clarifies this boundary, separating
                perceptual distribution modeling from stateful, action-conditioned simulation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-3xl text-[var(--pi-ink)]">
              Unified Taxonomy and Operational Definition
            </h2>
            <div className="text-left text-base leading-relaxed text-[var(--pi-muted)] space-y-4 indent-8">
              <p>
                A fundamental obstacle to progress in world modeling research is the absence of a
                precise and shared conceptual foundation. We formalize world modeling as the
                objective of simulating environment dynamics rather than merely reproducing
                observations, and introduce a capability gradient that traces the progression from{' '}
                <strong>perception</strong> and <strong>representation</strong> to{' '}
                <strong>manipulation</strong>, <strong>dynamics</strong>, and{' '}
                <strong>interaction</strong>.
              </p>
              <p>
                This taxonomy clarifies the boundary between foundation generative models and
                generative world models. A generative world model must support three tightly
                coupled operations: estimating latent state from observations, predicting future
                states under physical constraints, and coherently adapting futures under
                agent-driven interventions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 bg-white/50 border border-[var(--pi-line)] p-8 md:p-12 shadow-sm rounded-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-3xl text-[var(--pi-ink)]">
              A Unified Inference and Evaluation Infrastructure
            </h2>
            <div className="text-left text-base leading-relaxed text-[var(--pi-muted)] space-y-4 indent-8">
              <p>
                Contemporary systems span a broad landscape, yet the infrastructure used to study
                them remains fragmented. WorldFoundry provides a shared abstraction for model
                deployment and assessment. It focuses on unified inference across multimodal
                observations, benchmark evaluation, and interactive visual analytics—training is
                intentionally out of scope for the current release.
              </p>
              <p>
                Through Artifact and Representation Contracts, WorldFoundry standardizes how
                heterogeneous models expose their predictions and world-state estimates, enabling
                cross-family comparison without collapsing systems into an undifferentiated
                benchmark wrapper.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl text-center">
          <p className="pi-note">
            The infrastructure is designed for contributors who need repeatable inference demos,
            reviewable metrics, and simple extension points. Start with the{' '}
            <Link href="/docs/quickstart">quickstart</Link>, validate inference outputs, then run
            evaluation when the selected model family and benchmark support it.
          </p>
        </section>
      </div>
    </main>
  );
}
