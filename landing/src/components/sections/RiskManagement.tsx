import { Icon } from '@iconify/react'

export default function RiskManagement() {
    return (
        <section id="risk-management" className="section-container relative">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">08</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">리스크 관리</h2>
                        <p className="text-stone-500 mt-2">Risk Management</p>
                    </div>
                </div>

                {/* 주요 리스크 */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card p-8 border-l-4 border-emerald-500">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <Icon icon="lucide:shield-alert" className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-stone-900">기술 리스크</h4>
                                <p className="text-stone-600 text-sm mb-4">AI 모델의 품질 변동</p>
                                <div className="bg-emerald-500/10 p-3 rounded-lg">
                                    <p className="text-sm text-emerald-700 font-medium">
                                        <Icon icon="lucide:check" className="w-4 h-4 inline mr-2" />
                                        대응: 멀티 모델 전략
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-l-4 border-emerald-400">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <Icon icon="lucide:users" className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-stone-900">시장 리스크</h4>
                                <p className="text-stone-600 text-sm mb-4">경쟁사 진입</p>
                                <div className="bg-emerald-500/10 p-3 rounded-lg">
                                    <p className="text-sm text-emerald-700 font-medium">
                                        <Icon icon="lucide:check" className="w-4 h-4 inline mr-2" />
                                        대응: 빠른 시장 선점
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-l-4 border-emerald-400/70">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <Icon icon="lucide:scale" className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-stone-900">법적 리스크</h4>
                                <p className="text-stone-600 text-sm mb-4">저작권 이슈</p>
                                <div className="bg-emerald-500/10 p-3 rounded-lg">
                                    <p className="text-sm text-emerald-700 font-medium">
                                        <Icon icon="lucide:check" className="w-4 h-4 inline mr-2" />
                                        대응: 법률팀 구축
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-l-4 border-emerald-300">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <Icon icon="lucide:wallet" className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-stone-900">재무 리스크</h4>
                                <p className="text-stone-600 text-sm mb-4">자금 소진</p>
                                <div className="bg-emerald-500/10 p-3 rounded-lg">
                                    <p className="text-sm text-emerald-700 font-medium">
                                        <Icon icon="lucide:check" className="w-4 h-4 inline mr-2" />
                                        대응: 단계별 투자
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
