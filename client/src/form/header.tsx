import { Sparkles, LogOut, Plus } from "lucide-react";
import Credits from "../components/Credits";

const FormHeader = ({ planHistory, handleNewPlan, handleSignOut }: any) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="w-10 h-10 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              AI Marketing Strategist
              <Credits planHistory={planHistory} />
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleNewPlan}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Plan
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FormHeader;
