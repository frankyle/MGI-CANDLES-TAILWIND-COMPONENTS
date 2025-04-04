import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from "react";

const features = [
  {
    name: 'Exponential Moving Averages (EMA) Crossover',
    description:
      'Identifying trend reversals and momentum shifts using short and long-term EMA crossovers.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Fibonacci Retracement',
    description: 'Using key Fibonacci levels to find potential reversal zones and entry points.',
    icon: LockClosedIcon,
  },
  {
    name: 'Weekly High and Low',
    description: 'Monitoring weekly high and low levels to gauge market sentiment and structure.',
    icon: ServerIcon,
  },
];

export default function AboutStrategy() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-indigo-600">Trading Strategy</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                About Our Strategy
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Our trading strategy is built on a structured and data-driven approach to the markets.
                It focuses on identifying high-probability setups by analyzing key chart patterns,
                leveraging a combination of technical indicators, and ensuring risk management is at the core of every trade.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
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
          <img
            alt="Trading strategy visualization"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}