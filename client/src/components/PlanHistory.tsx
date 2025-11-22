import { MarketingPlan } from '../types';
import { Calendar, Building2 } from 'lucide-react';

interface PlanHistoryProps {
  plans: MarketingPlan[];
  onSelectPlan: (plan: MarketingPlan) => void;
}

export default function PlanHistory({ plans, onSelectPlan }: PlanHistoryProps) {
  if (plans.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No marketing plans yet. Create your first one!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Marketing Plans</h2>
      {plans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => onSelectPlan(plan)}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {plan.businesses?.name || 'Marketing Plan'}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Industry: {plan.businesses?.industry || 'N/A'}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(plan.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                plan.language === 'ar'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {plan.language === 'ar' ? 'Arabic' : 'English'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
