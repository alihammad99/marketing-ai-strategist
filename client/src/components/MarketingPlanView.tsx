import { FileText, Globe, Sparkles } from 'lucide-react';

interface MarketingPlanViewProps {
  originalPlan: string;
  translatedPlan?: string;
  improvedPlan?: string;
  language: string;
}

export default function MarketingPlanView({
  originalPlan,
  translatedPlan,
  improvedPlan,
  language,
}: MarketingPlanViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          <h3 className="text-xl font-semibold">Original Marketing Plan</h3>
        </div>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
            {originalPlan}
          </pre>
        </div>
      </div>

      {translatedPlan && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Globe className="w-5 h-5 mr-2 text-green-600" />
            <h3 className="text-xl font-semibold">
              {language === 'ar' ? 'Translated to Arabic' : 'Translated Plan'}
            </h3>
          </div>
          <div
            className="prose max-w-none"
            style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
          >
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
              {translatedPlan}
            </pre>
          </div>
        </div>
      )}

      {improvedPlan && (
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-200">
          <div className="flex items-center mb-4">
            <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold">Enhanced Marketing Plan</h3>
          </div>
          <div
            className="prose max-w-none"
            style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
          >
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
              {improvedPlan}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
