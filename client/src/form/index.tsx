import { useState, useEffect, memo } from "react";
import { supabase } from "../lib/supabase";
import BusinessForm from "../components/BusinessForm";
import MarketingPlanView from "../components/MarketingPlanView";
import PlanHistory from "../components/PlanHistory";
import { BusinessInput, MarketingPlan } from "../types";
import { History } from "lucide-react";
import FormHeader from "./header";
import { useNavigate } from "react-router-dom";

const Form = memo(() => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generatingPlan, setGeneratingPlan] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<MarketingPlan | null>(null);
  const [planHistory, setPlanHistory] = useState<MarketingPlan[]>([]);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        await fetchPlanHistory(session.user.id);
      }
    })();

    supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchPlanHistory(session.user.id);
        }
      })();
    });
  }, []);

  const fetchPlanHistory = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("marketing_plans")
        .select("*, businesses(*)")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPlanHistory(data || []);
    } catch (error) {
      console.error("Error fetching plan history:", error);
    }
  };

  const handleGeneratePlan = async (businessData: BusinessInput) => {
    if (!user) return;

    setGeneratingPlan(true);
    try {
      console.log({ ...businessData, user_id: user.id });
      const response = await fetch(
        `${process.env.SERVER_URL}/generate-plan?user_id=${user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(businessData), // ← بس businessData بدون user_id
        }
      );

      if (!response.ok) throw new Error("Failed to generate plan");

      const result = await response.json();

      const newPlan: MarketingPlan = {
        id: result.plan_id,
        business_id: "",
        original_plan: result.original_plan,
        translated_plan: result.translated_plan,
        improved_plan: result.improved_plan,
        language: result.language,
        status: "completed",
        created_at: new Date().toISOString(),
      };

      setCurrentPlan(newPlan);
      await fetchPlanHistory(user.id);
      setShowForm(false);
    } catch (error) {
      console.error("Error generating plan:", error);
      alert("Failed to generate marketing plan. Please try again.");
    } finally {
      setGeneratingPlan(false);
    }
  };

  useEffect(() => {
    if (!user && !loading) navigate("/auth");
  }, [user, loading]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setCurrentPlan(null);
    setPlanHistory([]);
    setShowForm(true);
  };

  const handleSelectPlan = (plan: MarketingPlan) => {
    setCurrentPlan(plan);
    setShowForm(false);
  };

  const handleNewPlan = () => {
    setCurrentPlan(null);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <FormHeader
        planHistory={planHistory}
        handleSignOut={handleSignOut}
        handleNewPlan={handleNewPlan}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {showForm && !currentPlan ? (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Create Your Marketing Strategy
                </h2>

                <BusinessForm
                  onSubmit={handleGeneratePlan}
                  loading={generatingPlan}
                  availableCredits={planHistory?.length < 4}
                />
              </div>
            ) : currentPlan ? (
              <MarketingPlanView
                originalPlan={currentPlan.original_plan}
                translatedPlan={currentPlan.translated_plan}
                improvedPlan={currentPlan.improved_plan}
                language={currentPlan.language}
              />
            ) : null}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <History className="w-5 h-5 mr-2 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">History</h2>
              </div>
              <PlanHistory
                plans={planHistory}
                onSelectPlan={handleSelectPlan}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
});

Form.displayName = "Form";

export default Form;
