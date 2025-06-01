
import { Linkedin, Github, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former venture capitalist with 10+ years in startup ecosystems. Sarah led investments in 50+ companies and has a deep understanding of what makes startups successful. She holds an MBA from Stanford and is passionate about democratizing startup intelligence.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3eb?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen',
      email: 'sarah@startupexplorer.com',
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack engineer and data scientist with expertise in machine learning and analytics platforms. Previously led engineering teams at two successful exits. Alex is passionate about building scalable, intelligent systems that turn data into actionable insights.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      github: 'https://github.com/alexrodriguez',
      email: 'alex@startupexplorer.com',
    },
    {
      name: 'Maya Patel',
      role: 'Head of Product & Design',
      bio: 'Product designer and strategist with 8 years of experience creating user-centered solutions for complex data platforms. Maya previously worked at leading fintech companies and specializes in making complex information beautiful and accessible.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/mayapatel',
      github: 'https://github.com/mayapatel',
      email: 'maya@startupexplorer.com',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="gradient-text"> Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate group of entrepreneurs, engineers, and designers united by our mission to transform startup intelligence through innovative technology and data-driven insights.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden animate-scale-in">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-startup-purple font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-10 w-10"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-10 w-10"
                    asChild
                  >
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-10 w-10"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture */}
        <section className="bg-gradient-to-r from-startup-purple/10 via-startup-blue/10 to-startup-indigo/10 rounded-3xl p-8 md:p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in building a company that's as innovative and dynamic as the startups we study.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We constantly push boundaries and embrace new technologies to stay ahead of the curve.',
              },
              {
                title: 'Data-Driven Decisions',
                description: 'Every decision we make is backed by solid data and thorough analysis.',
              },
              {
                title: 'Customer Obsession',
                description: 'Our users\' success is our success. We listen, learn, and iterate based on their feedback.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
