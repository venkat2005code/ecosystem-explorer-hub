
import { BarChart, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Startups',
      value: '12,847',
      change: '+12.3%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Active Investors',
      value: '3,456',
      change: '+8.7%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Total Funding',
      value: '$2.4B',
      change: '+23.1%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      title: 'Success Rate',
      value: '67.8%',
      change: '+5.2%',
      trend: 'up',
      icon: BarChart,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Analytics
            <span className="gradient-text"> Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600">
            Real-time insights into the global startup ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600 font-medium">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IBM Cognos Dashboard Embed */}
        <Card className="shadow-xl border-0 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              IBM Cognos Analytics Dashboard
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Comprehensive startup ecosystem analysis powered by IBM Cognos
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-gray-300 rounded-lg m-6">
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <BarChart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  IBM Cognos Dashboard Integration
                </h3>
                <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                  This area is designed to embed your live IBM Cognos dashboard. Once configured, 
                  you'll see real-time analytics, interactive charts, and comprehensive startup insights.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                  <strong>Integration Ready:</strong> Connect your IBM Cognos Analytics instance 
                  to display live startup ecosystem data, funding trends, and market analysis.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Dashboard Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-purple rounded-full mr-3"></div>
                  Real-time startup tracking and analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-blue rounded-full mr-3"></div>
                  Interactive funding and investment visualizations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-indigo rounded-full mr-3"></div>
                  Market trend analysis and predictions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-pink rounded-full mr-3"></div>
                  Customizable reports and data exports
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-emerald rounded-full mr-3"></div>
                  Crunchbase and PitchBook integrations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-orange rounded-full mr-3"></div>
                  SEC filings and regulatory data
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-purple rounded-full mr-3"></div>
                  Social media and news sentiment analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-startup-blue rounded-full mr-3"></div>
                  Patent and intellectual property databases
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
