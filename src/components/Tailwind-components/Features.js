import { CurrencyDollarIcon, ShieldExclamationIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Trading Signals',
    description:
      'Get real-time trade alerts to help you make informed decisions. Our trading signals are designed to boost your trading strategies and maximize profits.',
    icon: CurrencyDollarIcon, 
  },
  {
    name: 'Risk Management',
    description:
    'Get expert advice and guidance on effective risk management strategies. We help you navigate market risks and make informed decisions to protect your investments.',
     icon: ShieldExclamationIcon, 
  },
  {
    name: 'Beginners Training',
    description:
      'Start your Forex journey with our comprehensive beginner training. Learn the fundamentals, key strategies, and how to trade confidently.',
    icon: AcademicCapIcon,  
  },
  {
    name: 'Weekly Reports',
    description:
      'Stay ahead of the market with our detailed weekly reports. Get insights, performance analysis, and actionable recommendations to improve your trading.',
    icon: ChartBarIcon, 
    },
]


export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Our Services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything You Need to Succeed in Forex Trading
          </p>

          <p className="mt-6 text-lg/8 text-gray-600">
            Master the markets with expert insights, real-time analysis, and proven strategies. Join a community of traders and elevate your Forex journey today.
          </p>

        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
