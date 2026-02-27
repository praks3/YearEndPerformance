import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import CustomQuarterTooltip from "./CustomQuarterTooltip";

const yearlyIssueTypeData = [
  { name: "Blocker", count: 2 },
  { name: "Critical", count: 14 },
  { name: "Major", count: 46 },
  { name: "Normal", count: 24 },
  { name: "Minor", count: 2 },
];

const yearlyApplicationData = [
  { name: "JioMeet/JioEvents", value: 18 },
  { name: "Namo", value: 46 },
  { name: "JioWorkspace", value: 4 },
  { name: "PeopleFirst", value: 5 },
    { name: "Orion", value: 12 },
];

const quarterData = [
  {
    name: "Q1",
    totalIssues: 28,
    score: 153,
    blocker: 2,
    critical: 5,
    major: 15,
    normal: 6,
    minor: 0,
  },
  {
    name: "Q2",
    totalIssues: 16,
    score: 84,
    blocker: 0,
    critical: 2,
    major: 13,
    normal: 1,
    minor: 0,
  },
  {
    name: "Q3",
    totalIssues: 17,
    score: 67,
    blocker: 0,
    critical: 2,
    major: 4,
    normal: 10,
    minor: 1,
  },
  {
    name: "Q4",
    totalIssues: 27,
    score: 132,
    blocker: 0,
    critical: 5,
    major: 14,
    normal: 7,
    minor: 1,
  },
];

const COLORS = ["#EF4444", "#F97316", "#FACC15", "#22C55E"];

const Dashboard = () => {
  const totalYearScore = 436; 
  const totalYearIssues = 88; 

  return (
    <div className="w-full bg-gray-100 p-10 space-y-6">
      {/* ================= YEAR OVERVIEW ================= */}
      <div id="Overview" className="space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-800">Year Overview</h2>

        {/* KPI CARDS */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Issues
            </h3>
            <p className="text-4xl font-extrabold text-red-500 mt-2">
              {totalYearIssues}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Score
            </h3>
            <p className="text-4xl font-extrabold text-blue-500 mt-2">
              {totalYearScore}
            </p>
          </div>
        </div>

        {/* YEAR CHARTS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Issue Type Per Year */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Issue Type Count</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyIssueTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Application Pie */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">
              Issues per Application
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={yearlyApplicationData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {yearlyApplicationData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================= QUARTER SECTION ================= */}
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Quarter Overview
        </h2>

        {/* Score + Total Issues */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Quarter Score */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Quarter Score</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={quarterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Issue Type Breakdown */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">
              Issue Type Breakdown per Quarter
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={quarterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomQuarterTooltip />} />
                <Legend />

                <Bar dataKey="blocker" fill="#DC2626" name="Blocker" />
                <Bar dataKey="critical" fill="#F97316" name="Critical" />
                <Bar dataKey="major" fill="#FACC15" name="Major" />
                <Bar dataKey="normal" fill="#22C55E" name="Normal" />
                <Bar dataKey="minor" fill="#8B5CF6" name="Minor" />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
