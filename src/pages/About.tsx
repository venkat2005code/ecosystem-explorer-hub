
import { Target, Eye, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize access to startup intelligence by providing comprehensive, real-time analytics that empower informed decision-making across the entrepreneurial ecosystem.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where every entrepreneur, investor, and innovator has the tools and insights needed to build successful, impactful businesses that drive positive change.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We serve entrepreneurs seeking market insights, investors looking for opportunities, researchers studying innovation trends, and policy makers shaping startup-friendly environments.',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'By connecting data with decision-makers, we accelerate innovation, reduce market inefficiencies, and help promising startups reach their full potential.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="gradient-text"> Startup Explorer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how the world understands and interacts with startup ecosystems through the power of data-driven insights and intelligent analytics.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Founded in 2024, Startup Ecosystem Explorer emerged from a simple observation: the startup world generates massive amounts of data, but meaningful insights remain scattered and inaccessible to those who need them most.
              </p>
              <p className="mb-6">
                Our founding team, with deep experience in entrepreneurship, data science, and venture capital, recognized that success in the startup ecosystem shouldn't depend on having insider access to information. Every entrepreneur deserves the tools to understand their market, every investor should have comprehensive deal flow visibility, and every researcher needs reliable data to study innovation patterns.
              </p>
              <p>
                Today, we're building the definitive platform for startup intelligence, combining cutting-edge analytics with intuitive design to make complex startup data accessible, actionable, and impactful for our global community.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="bg-gradient-to-r from-startup-purple/10 via-startup-blue/10 to-startup-indigo/10 rounded-3xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Entrepreneurs',
                description: 'Market research and competitive intelligence for building better products',
              },
              {
                title: 'Investors',
                description: 'Deal sourcing and due diligence tools for smarter investment decisions',
              },
              {
                title: 'Researchers',
                description: 'Comprehensive datasets for studying innovation and entrepreneurship trends',
              },
              {
                title: 'Policy Makers',
                description: 'Regional startup ecosystem insights for evidence-based policy development',
              },
            ].map((audience, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
