import { Icon } from '@iconify/react'

export default function Milestones() {
    return (
        <section id="milestones" className="section-container relative">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">09</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">마일스톤</h2>
                        <p className="text-stone-500 mt-2">Milestones & Roadmap</p>
                    </div>
                </div>

                {/* 현재 상황 - 개발 현황 & 파일럿 고객 */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* 개발 현황 */}
                    <div className="glass-card p-6 border-2 border-emerald-500/30 bg-emerald-500/5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                <Icon icon="lucide:code" className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-stone-900">개발 현황</h3>
                                <span className="text-xs text-emerald-600 font-semibold">IN PROGRESS</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">AI STUDIO <span className="text-emerald-600 font-bold">80%</span> 개발 완료</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">핵심 AI 엔진 구축 완료</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">베타 테스트 진행 중</span>
                            </div>
                        </div>
                    </div>

                    {/* 파일럿 고객 */}
                    <div className="glass-card p-6 border-2 border-orange-500/30 bg-orange-500/5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                                <Icon icon="lucide:users" className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-stone-900">파일럿 고객</h3>
                                <span className="text-xs text-orange-600 font-semibold">NEGOTIATING</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">학원 강사 (청담동) - 시범 콘텐츠 변환 중</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">YBM - 협의 진행</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">시사일본어 - 협의 진행</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-stone-700">교육부 - 콘택 완료</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 타임라인 로드맵 */}
                <div className="relative">
                    {/* 타임라인 세로선 */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 via-violet-500 to-rose-500"></div>

                    {/* Month 1-3: 정식 출시 */}
                    <div className="relative mb-8">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                                <Icon icon="lucide:rocket" className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="flex-1 glass-card p-5 md:p-6">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">Month 1-3</span>
                                    <h4 className="text-lg font-bold text-stone-900">정식 출시</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        AI STUDIO 정식 출시 (개발 완료)
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        파일럿 고객 5곳 계약 체결
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        월 무료 100명 프로모션 시작
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-emerald-600 font-medium">
                                        <Icon icon="lucide:zap" className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        자체 SLM 튜닝 완료 및 API 비용 최적화 적용
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Month 4-6: 본격 확장 */}
                    <div className="relative mb-8">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                                <Icon icon="lucide:trending-up" className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="flex-1 glass-card p-5 md:p-6">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">Month 4-6</span>
                                    <h4 className="text-lg font-bold text-stone-900">본격 확장</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        B2B 고객 10곳 확보
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        블링크 앱 마켓플레이스 오픈 준비
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        유료 구독자 100명 확보
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-blue-600 font-medium">
                                        <Icon icon="lucide:mic" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        보이스 클로닝 베타 & 저작권 워터마킹 도입
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Month 7-12: 수익화 */}
                    <div className="relative mb-8">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-violet-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                                <Icon icon="lucide:wallet" className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="flex-1 glass-card p-5 md:p-6">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-violet-500 text-white text-xs font-bold rounded-full">Month 7-12</span>
                                    <h4 className="text-lg font-bold text-stone-900">수익화</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        유료 구독자 500명 확보
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        블링크 앱 마켓플레이스 오픈
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        B2B 고객 5곳 추가 확보
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-violet-600 font-medium">
                                        <Icon icon="lucide:banknote" className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                        월 매출 3,000만원 달성
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Month 13-24: 스케일업 */}
                    <div className="relative">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-rose-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                                <Icon icon="lucide:globe" className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="flex-1 glass-card p-5 md:p-6">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">Month 13-24</span>
                                    <h4 className="text-lg font-bold text-stone-900">스케일업</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        시리즈 A 투자 유치 (20억원)
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-rose-600 font-medium">
                                        <Icon icon="lucide:globe-2" className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                                        글로벌 다국어 현지화 (문화적 맥락 고려 AI)
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        팀 규모 20명으로 확대
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        월 매출 2억원 달성
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-stone-600">
                                        <Icon icon="lucide:circle" className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                                        구독형 콘텐츠 서비스 베타 런칭
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
