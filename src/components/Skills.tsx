import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = {
    frontend: { icon: Code2, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
    backend: { icon: Server, color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-500/10' },
    database: { icon: Database, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
    tools: { icon: Wrench, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10' },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], idx) => {
            const { icon: Icon, color, bgColor } = categories[category as keyof typeof categories];
            return (
              <div
                key={category}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <div className={`${bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-r ${color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        isVisible={isVisible}
                        color={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  color: string;
}

function SkillBar({ skill, isVisible, color }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-slate-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
}
