import { Icon } from '@iconify/react'

export default function BusinessOverview() {
    return (
        <section id="business-overview" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">01</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">사업 개요</h2>
                        <p className="text-stone-500 mt-2">Business Overview</p>
                    </div>
                </div>

                {/* 1.1 사업 아이디어 */}
                <div className="mb-16">
                    <div className="glass-card p-8 md:p-12 mb-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-stone-900">
                            <Icon icon="lucide:lightbulb" className="w-7 h-7 text-emerald-500" />
                            사업 아이디어
                        </h3>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-black mb-6 gradient-text">
                                "3년전에 만든 PDF가 매달 수익으로?"
                            </p>
                            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                                서랍 속에 잠든 PDF 콘텐츠를 AI가 분석하여 <span className="text-emerald-600 font-semibold">10편의 숏폼 영상</span>으로 자동 변환.<br />
                                SNS에서 바이럴되고, 궁금한 사람들이 <span className="text-emerald-600 font-semibold">원본 PDF를 구매</span>합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process Flow Visual */}
                <div className="glass-card p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-8 text-center text-stone-900">블링크의 가치 창출 과정</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-stone-100 flex items-center justify-center mb-3">
                                <Icon icon="lucide:file-text" className="w-7 h-7 text-stone-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">PDF 콘텐츠</div>
                            <div className="text-xs text-stone-500">전자책, 교재, 리포트</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:cpu" className="w-7 h-7 text-emerald-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">AI 분석</div>
                            <div className="text-xs text-stone-500">핵심 내용 추출</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:film" className="w-7 h-7 text-emerald-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">숏폼 생성</div>
                            <div className="text-xs text-stone-500">10편 자동 제작</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:rocket" className="w-7 h-7 text-orange-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">마케팅 부스트</div>
                            <div className="text-xs text-stone-500">SNS 바이럴 확산</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/30 border-2 border-emerald-500/50 flex items-center justify-center mb-3">
                                <Icon icon="lucide:wallet" className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">PDF 판매</div>
                            <div className="text-xs text-stone-500">수익 창출</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
