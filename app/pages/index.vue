<template>
  <!-- <SiteHeader />

  <main class="page">
    <ProfileHero />

    <SectionBlock id="skills" eyebrow="Skills" title="Core capabilities"
      description="A compact overview of the technologies and workflows used in recent projects. Replace this section with your strongest, job-relevant skills.">
      <div class="grid four-like grid two">
        <SkillGroup v-for="group in skills" :key="group.title" :title="group.title" :items="group.items" />
      </div>
    </SectionBlock>

    <SectionBlock id="projects" eyebrow="Selected work" title="Projects that show practical delivery"
      description="Use these cards as case studies. The goal is to prove your role, decision-making, implementation ability, and result.">
      <div class="grid three">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </SectionBlock>

    <SectionBlock id="experience" eyebrow="Experience" title="Professional background"
      description="Keep each experience short. Recruiters should be able to understand responsibility, stack, and impact without reading a long narrative.">
      <div class="timeline">
        <TimelineItem v-for="item in experiences" :key="`${item.company}-${item.period}`" v-bind="item" />
      </div>
    </SectionBlock>

    <SectionBlock id="education" eyebrow="Education" title="Education"
      description="A background in geospatial information, environmental data, and web-based visualization. This section explains how the academic path connects to frontend development.">
      <div class="education-stack">
        <article v-for="item in education" :key="item.school" class="education-card">
          <div class="mb-5 space-y-2">
            <div class="flex items-center justify-between gap-4">
              <div class="flex min-w-0 items-center gap-3">
                <img :src="item.logo" :alt="`${item.school} logo`"
                  class="h-10 w-10 shrink-0 rounded-xl border border-stone-200 bg-white object-contain p-1"
                  loading="lazy" />
                <h3 class="truncate text-lg font-bold tracking-tight text-stone-900">
                  <a :href="item.website" target="_blank" rel="noreferrer" class="hover:text-green-800">
                    {{ item.school }}
                  </a>
                </h3>
              </div>
              <p class="shrink-0 text-sm text-stone-500">
                {{ item.period }}
              </p>
            </div>

            <div class="flex items-center justify-between gap-4 pl-[52px]">
              <p class="font-semibold text-stone-900">
                {{ item.degree }}
              </p>
              <p class="shrink-0 text-sm text-stone-500">
                {{ item.location }}
              </p>
            </div>
          </div>

          <p class="education-details">{{ item.details }}</p>

          <div v-if="item.relatedCourses?.length" class="education-subsection">
            <h4>Related courses / research fields</h4>
            <ul class="course-list">
              <li v-for="course in item.relatedCourses" :key="course">
                {{ course }}
              </li>
            </ul>
          </div>

          <div v-if="item.activities?.length" class="education-subsection">
            <h4>Academic projects</h4>
            <div class="education-activity-list">
              <section v-for="activity in item.activities" :key="activity.title" class="education-activity">
                <h5>{{ activity.title }}</h5>
                <p>{{ activity.description }}</p>
              </section>
            </div>
          </div>

          <ul class="education-list">
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
      </div>
    </SectionBlock>

    <SectionBlock id="certificates" eyebrow="Certificates" title="Certificates"
      description="Language, IT, and security-related qualifications that support my work as a frontend and application developer.">
      <div class="space-y-8">
        <section v-for="group in certificateGroups" :key="group.title">
          <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            {{ group.title }}
          </h3>

          <div class="grid gap-4 md:grid-cols-3">
            <article v-for="certificate in group.items" :key="certificate.name"
              class="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <div class="mb-5 flex items-center justify-between gap-4">
                <a :href="certificate.officialSite" target="_blank" rel="noopener noreferrer"
                  class="flex h-12 max-w-[180px] items-center" :aria-label="`${certificate.name} official website`">
                  <img :src="certificate.logo" :alt="certificate.logoAlt"
                    class="max-h-10 max-w-full object-contain object-left" loading="lazy" />
                </a>

                <p class="shrink-0 text-sm text-stone-500">
                  {{ certificate.period }}
                </p>
              </div>

              <div class="mb-4">
                <h4 class="text-lg font-bold tracking-tight text-stone-950">
                  <a :href="certificate.officialSite" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-green-800"
                    :aria-label="`${certificate.name} official website`">
                    {{ certificate.name }}
                    <span aria-hidden="true" class="text-sm">↗</span>
                  </a>
                </h4>

                <p class="mt-1 text-sm font-medium text-stone-600">
                  {{ certificate.displayName }}
                </p>
              </div>

              <p class="text-sm text-stone-500">
                {{ certificate.issuer }}
              </p>

              <p class="mt-4 leading-7 text-stone-700">
                {{ certificate.description }}
              </p>

              <ul class="mt-5 flex flex-wrap gap-2">
                <li v-for="tag in certificate.tags" :key="tag"
                  class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">
                  {{ tag }}
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </SectionBlock>
    <SectionBlock id="interests" eyebrow="Interests" title="Interests and working preferences"
      description="This section is intentionally restrained. It should support your professional profile, not become a private diary.">
      <ul class="interest-list">
        <li v-for="item in interests" :key="item">{{ item }}</li>
      </ul>
    </SectionBlock>

    <section class="mx-auto max-w-6xl px-5 pb-14 md:px-8">
      <div class="rounded-[2rem] border border-stone-200 bg-white p-6 text-center shadow-sm">
        <p class="text-sm font-semibold text-stone-600">
          証明書類・職務経歴書の詳細は必要に応じて提出可能です。
        </p>
      </div>
    </section>
  </main>

  <SiteFooter /> -->
  <PortfolioShell />
</template>

<script setup lang="ts">
import {
  // certificates,
  education,
  experiences,
  interests,
  profile,
  projects,
  skills
} from '~/data/site'

useHead({
  title: `${profile.name} — ${profile.title}`,
  meta: [
    { name: 'description', content: profile.intro },
    { property: 'og:title', content: `${profile.name} — ${profile.title}` },
    { property: 'og:description', content: profile.intro }
  ]
})

</script>
