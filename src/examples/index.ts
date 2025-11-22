import { BusinessInput } from "../types";

const cafe: BusinessInput = {
  name: "Brew Haven",
  industry: "Cafe",
  description:
    "Brew Haven is a specialty coffee shop located in a busy commercial district. The cafe offers artisan coffee, handcrafted drinks, fresh pastries, and a quiet workspace atmosphere. The brand focuses on high-quality beans, latte art, and a premium experience designed for people who value comfort and modern aesthetics.",
  target_audience:
    "university students, remote workers, freelancers, digital nomads, and young professionals aged 18–35",
  budget: "15000 USD",
  goals:
    "Increase daily foot traffic, boost weekday sales, introduce a membership-based loyalty program, partner with local influencers, and create a brand identity that stands out in the competitive cafe market. Long-term goals include opening a second branch and developing a custom mobile app for pre-orders.",
  language: "en",
};

const realestate: BusinessInput = {
  name: "PrimeKey Properties",
  industry: "Real Estate",
  description:
    "PrimeKey Properties is a full-service real estate agency specializing in residential sales, property rentals, and investment consulting. The agency operates in a growing urban market with increasing demand for modern apartments and commercial spaces. The brand aims to position itself as a trusted, transparent, and data-driven advisor for buyers and investors.",
  target_audience:
    "first-time home buyers, high-income families, property investors, expats, and small business owners looking for commercial space",
  budget: "70000 USD",
  goals:
    "Generate more qualified buyer leads, build a strong online reputation, increase property listing visibility, improve client conversion rates, and launch targeted ad campaigns for new developments. Long-term goals include becoming a top 3 real estate agency in the region and building a CRM system for automated client follow-ups.",
  language: "en",
};

const gaming_center: BusinessInput = {
  name: "ArenaX Gaming Hub",
  industry: "Gaming Center",
  description:
    "ArenaX is a modern gaming center equipped with high-end gaming PCs, console stations, VR rooms, and a small café corner. It hosts weekly tournaments, events for schools and universities, and provides hourly gaming sessions. The business competes in a market where entertainment options for youth are limited, offering a safe and exciting space for gamers.",
  target_audience:
    "Gamers aged 13–30, students, e-sports fans, competitive teams, and casual players looking for social gaming experiences",
  budget: "12000 USD",
  goals:
    "Increase hourly bookings, grow monthly memberships, create social media hype around tournaments, collaborate with gaming influencers, and launch e-sport leagues. Long-term goals include expanding to multiple branches, introducing live-streaming rooms, and forming a local e-sports team under the ArenaX brand.",
  language: "en",
};

export const examples = [
  {
    label: "Cafe ☕",
    data: cafe,
  },
  {
    label: "Realestate 🏠",
    data: realestate,
  },
  {
    label: "Gaming center 🎮",
    data: gaming_center,
  },
];
