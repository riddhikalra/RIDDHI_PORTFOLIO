import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Champion of the Month",
      organization: "Tata Technologies",
      description: "Recognized for outstanding project contributions and exceptional performance in developing enterprise middleware solutions.",
      icon: <Trophy className="w-6 h-6" />,
      category: "Professional Recognition",
      date: "2024",
      highlights: [
        "Outstanding project contributions",
        "Exceptional middleware development",
        "Team leadership excellence",
        "Client satisfaction excellence"
      ]
    },
    {
      title: "Snowflake Essentials Badges",
      organization: "Snowflake",
      description: "Successfully completed and mastered essentials of data warehousing, cost optimization, and cloud data platform fundamentals.",
      icon: <Award className="w-6 h-6" />,
      category: "Technical Certification",
      date: "2024",
      highlights: [
        "Data warehousing mastery",
        "Cost optimization strategies",
        "Cloud platform expertise",
        "Performance optimization"
      ]
    }
  ];

  const stats = [
    { number: "10+", label: "Middleware Services", description: "Developed & Deployed" },
    { number: "2.5+", label: "Years Experience", description: "Java Development" },
    { number: "100%", label: "Project Success", description: "Zero Failed Deployments" },
    { number: "2", label: "Major Achievements", description: "Professional Recognition" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional milestones and technical accomplishments that demonstrate excellence in backend development
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-950 border-gray-800 text-center hover:border-gray-700 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white mb-1">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                          {achievement.organization}
                        </Badge>
                        <span className="text-gray-500 text-xs">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                  <div className="grid gap-2">
                    {achievement.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700">
                  {achievement.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;