
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Logout = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-redirect would happen here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="shadow-2xl border-0 text-center animate-scale-in">
          <CardHeader className="pb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Successfully Logged Out
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Thank you for using Startup Explorer. You have been securely logged out of your account.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-startup-purple/10 via-startup-blue/10 to-startup-indigo/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Session Ended
              </h3>
              <p className="text-gray-600 text-sm">
                Your session has been terminated and all data has been cleared from this device for your security.
              </p>
            </div>

            <div className="space-y-4">
              <Link to="/" className="block">
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3">
                  Return to Homepage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full">
                  Sign In Again
                </Button>
              </Link>
            </div>

            <div className="text-sm text-gray-500">
              {countdown > 0 ? (
                <p>Redirecting to homepage in {countdown} seconds...</p>
              ) : (
                <p>Redirecting now...</p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="font-medium text-startup-purple hover:text-startup-blue">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
