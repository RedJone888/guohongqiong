<template>
    <article class="certificate-card group relative min-h-[176px] overflow-hidden">
        <a :href="certificate.officialSite" target="_blank" rel="noopener noreferrer"
            class="flex h-full min-h-[176px] flex-col p-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-stone-950 lg:p-5"
            :aria-label="cardLinkAriaLabel">
            <div class="flex min-h-11 items-center justify-between gap-3">
                <span aria-hidden="true" class="certificate-logo-background h-11 min-w-0 w-[58%]"
                    :style="{ backgroundImage: `url(${certificate.logo})` }" />

                <span class="certificate-date shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold text-stone-950">
                    <span aria-hidden="true" class="material-symbols-outlined text-[13px]!">calendar_today</span>
                    <span>{{ acquiredDateLabel }}</span>
                </span>
            </div>

            <div class="mt-4 min-w-0">
                <h4 class="break-words text-[15px] font-extrabold leading-5 tracking-[-0.02em] text-stone-950 lg:text-base">
                    {{ certificate.name }}
                </h4>
                <p class="mt-1.5 text-xs leading-5 text-stone-600 lg:text-[13px]">
                    {{ certificate.displayName }}
                </p>
            </div>

            <div class="mt-auto flex items-end justify-between gap-3 border-t border-dashed border-stone-400 pt-3">
                <div class="min-w-0">
                    <p class="certificate-card-kicker">{{ issuerLabel }}</p>
                    <p class="mt-1 line-clamp-2 text-[10px] font-semibold leading-4 text-stone-600 lg:text-[11px]">
                        {{ certificate.issuer }}
                    </p>
                </div>
                <span class="certificate-link shrink-0 inline-flex items-center gap-0.5 text-[10px] font-extrabold text-stone-950">
                    {{ linkLabel }}
                    <span aria-hidden="true" class="material-symbols-outlined text-[14px]!">north_east</span>
                </span>
            </div>
        </a>
    </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Certificate } from '~/data/site'

const props = defineProps<{
    certificate: Certificate
}>()

const { locale } = useLocale()
const linkLabel = computed(() => locale.value === 'ja' ? '公式サイト' : 'Official site')
const issuerLabel = computed(() => locale.value === 'ja' ? '実施機関' : 'ISSUER')
const cardLinkAriaLabel = computed(() =>
    locale.value === 'ja'
        ? `${props.certificate.name}の公式サイトを開く`
        : `Open the official website for ${props.certificate.displayName}`
)

const acquiredDateLabel = computed(() => {
    const match = props.certificate.period.match(/^(\d{4})\.(\d{2})$/)
    if (!match) return props.certificate.period

    const year = match[1]
    const month = Number(match[2])

    if (locale.value === 'ja') return `${year}年${month}月 取得`

    const englishMonth = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ][month - 1]

    return englishMonth ? `Earned ${englishMonth} ${year}` : props.certificate.period
})
</script>

<style scoped>
.certificate-card {
    --certificate-paper: #fffdf7;
    --certificate-ink: #26201a;
    --certificate-purple: #e2d1f8;
    border: 2px solid var(--certificate-ink);
    border-radius: 14px;
    background: var(--certificate-paper);
    box-shadow: 4px 4px 0 var(--certificate-ink);
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.certificate-card:hover {
    transform: translateY(-2px);
    box-shadow: 5px 6px 0 var(--certificate-ink);
}

.certificate-logo-background {
    display: block;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
}

.certificate-date {
    border: 1.5px solid var(--certificate-ink);
    background: var(--certificate-purple);
    box-shadow: 1.5px 1.5px 0 var(--certificate-ink);
}

.certificate-card-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.16em;
    line-height: 1;
    color: #655d53;
}

.certificate-link {
    border-bottom: 1.5px solid #ad5d56;
}

@media (max-width: 639px) {
    .certificate-card,
    .certificate-card > a {
        min-height: 168px;
    }
}
</style>
