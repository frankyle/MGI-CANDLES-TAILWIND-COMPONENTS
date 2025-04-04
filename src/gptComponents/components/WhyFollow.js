import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from "react";

const features = [
  {
    name: 'Gain Deep Market Insights',
    description: 'Stay informed with expert breakdowns of market trends and movements.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Logical, Data-Driven Approach',
    description: 'Learn how to trade with precision using proven strategies backed by data.',
    icon: LockClosedIcon,
  },
  {
    name: 'Real-World Applications',
    description: 'Enhance your skills with case studies and real trading scenarios.',
    icon: ServerIcon,
  },
  {
    name: 'Risk Management Techniques',
    description: 'Master the art of protecting your capital while maximizing potential profits.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Exclusive Trading Strategies',
    description: 'Get access to unique methods that can give you a competitive edge.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community Support',
    description: 'Join a community of traders to share insights, strategies, and experiences.',
    icon: ServerIcon,
  },
  {
    name: 'Regular Updates',
    description: 'Stay updated with the latest market news and trading tips to refine your strategies.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Personalized Coaching',
    description: 'Receive tailored advice and mentorship to enhance your trading journey.',
    icon: LockClosedIcon,
  },
  {
    name: 'Interactive Webinars',
    description: 'Participate in live sessions to learn from experts and ask questions in real-time.',
    icon: ServerIcon,
  },
 
];

export default function WhyFollow() {
  return (
    <div className="overflow-hidden bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-indigo-600">Trading Strategy</h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Why Follow Our Blog?
              </p>
              <p className="text-lg mb-6 mt-6 leading-relaxed text-gray-700">
                Whether you're a beginner or an experienced trader, our blog offers valuable insights 
                that can help you navigate the forex market with confidence. Stay ahead with expert strategies, 
                in-depth analysis, and real-world applications designed to improve your trading skills.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.slice(0, 3).map((feature) => ( // Display the first five features
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pt-4 lg:pl-8">
            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
              {features.slice(3).map((feature) => ( // Display the remaining features
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-12 mb-8 text-center">
          <p className="text-lg text-gray-600">
            Join us on this journey to become a more informed and successful trader!
          </p>
        </div>
      </div>
    </div>
  );
}