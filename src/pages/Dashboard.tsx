import { BarChart, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
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
            <div className="w-full min-h-[600px] rounded-lg overflow-hidden">
              <iframe 
                src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FNew%2Bdashboard%2Bfor%2Bmy%2Bbi%2Bproject%2B2&closeWindowOnLastView=true&ui_appbar=false&ui_navbar=false&shareMode=embedded&action=view&mode=dashboard&subView=model00000196be09f4ac_00000003" 
                width="320" 
                height="200" 
                frameBorder="0" 
                title="IBM Cognos Analytics Dashboard"
                className="w-full h-full"
                allow="encrypted-media"
                allowFullScreen
              />
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
