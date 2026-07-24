<template>
    <div
        class="certificates-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-y-auto lg:pb-6 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="certificates-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[15px] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="grid gap-5 lg:gap-4">
            <section v-for="group in certificateGroups" :key="group.key" class="certificate-group">
                <div class="mb-3 flex items-center gap-3 px-1 lg:px-2">
                    <div class="min-w-0">
                        <p class="certificate-kicker">{{ group.eyebrow }}</p>
                        <h3 class="text-base font-extrabold leading-5 text-stone-950 lg:text-lg">
                            {{ group.title }}
                        </h3>
                    </div>
                    <span class="certificate-count ml-auto shrink-0">
                        {{ certificateCountLabel(group.items.length) }}
                    </span>
                </div>

                <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    <CertificateCard v-for="certificate in group.items" :key="certificate.name"
                        :certificate="certificate" />
                </div>
            </section>
        </div>

        <p class="certificate-proof-note px-1 pt-3 text-[11px] leading-5 text-stone-500 lg:mx-2 lg:px-0">
            {{ currentHeader.proofNote }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { certificates, certificateHeader } from '~/data/certificates'
import CertificateCard from '~/components/CertificateCard.vue'

const { locale } = useLocale()

const currentHeader = computed(() => certificateHeader[locale.value])

const certificateCountLabel = (count: number) =>
    locale.value === 'ja' ? `全${count}件` : `${count} total`

const certificateGroups = computed(() => {
    const isJa = locale.value === 'ja'

    return [
        {
            key: 'language',
            eyebrow: isJa ? 'LANGUAGE' : 'LANGUAGE',
            title: isJa ? '語学資格' : 'Language Proficiency',
            items: certificates.filter((item) => item.category === 'Language')
        },
        {
            key: 'technical',
            eyebrow: isJa ? 'TECHNICAL' : 'TECHNICAL',
            title: isJa ? 'IT・セキュリティ資格' : 'IT & Security Certifications',
            items: certificates.filter(
                (item) => item.category === 'IT' || item.category === 'Security'
            )
        }
    ]
})
</script>

<style scoped>
.certificates-page {
    --certificate-paper: #fffdf7;
    --certificate-ink: #26201a;
    --certificate-yellow: #ffdc5d;
    --certificate-pink: #efb0c6;
    --certificate-blue: #9fd0f3;
}

.certificates-section-title::after {
    content: "";
    display: block;
    width: 7rem;
    height: 4px;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--certificate-yellow);
}

.certificate-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.18em;
    line-height: 1.2;
    color: #655d53;
}

.certificate-count {
    min-width: 2.25rem;
    border: 1.5px solid var(--certificate-ink);
    border-radius: 999px;
    background: var(--certificate-paper);
    box-shadow: 1.5px 1.5px 0 var(--certificate-ink);
    padding: 0.2rem 0.55rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 10px;
    font-weight: 800;
    line-height: 1;
    text-align: center;
}

.certificate-proof-note {
    border-top: 1px dashed #a89d90;
}
</style>
