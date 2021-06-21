import React from 'react'
import {CheckIcon} from '@heroicons/react/outline'

const tiers = [
  {
    name: '#Santé',
    href: '#',
    title: 'Vaccination : ouverte aux 12-17 ans',
    priceMonthly: 49,
    description: 'Toutes les personnes de plus de 18 ans sont désormais éligibles à la vaccination contre la COVID‑19. Vous pouvez prendre rendez-vous pour vous ou pour vos proches.',
    features: []
  }, {
    name: '#Utile',
    href: '#',
    title: 'Ensemble, relevons le #DéfiVaccination',
    priceMonthly: 79,
    description: 'La vaccination contre la COVID-19 est un défi de santé publique majeur : nous avons tous un rôle à jouer.',
    features: []
  }
]
export const News = () => {
  return (
    <div className="bg-primary">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Nos dernière news 
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-primary"/>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6 flex-1">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-md font-semibold tracking-wide uppercase bg-accent"
                        id="tier-standard">
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 items-baseline text-3xl font-extrabold">
                      {tier.title}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div
                    className="flex flex-col justify-center px-6 pt-6 pb-8 bg-accent-low sm:p-10 sm:pt-6">
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-deep"
                        aria-describedby="tier-standard">
                        Voir plus en details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
