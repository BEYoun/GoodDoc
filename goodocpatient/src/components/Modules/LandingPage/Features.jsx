import React from 'react'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import BackgroundPoint from '../../Elements/BackgroundPoint'

const features = [
  { name: 'Dizaine de millier de professionnel de santé', icon: CloudUploadIcon },
  { name: 'Rendez-vous en ligne', icon: LockClosedIcon },
  { name: 'Rappel automatique', icon: RefreshIcon },
  { name: 'Historique de Rendez-vous', icon: ShieldCheckIcon },
  { name: 'test', icon: CogIcon },
  { name: 'Backups', icon: ServerIcon },
]

export const Features = () => {
    return (
        <div className="relative bg-white py-8">
            <BackgroundPoint />
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Votre santé dans vos main</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Tout ce dont vous avez besoin besoin pour suivre votre santé
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Un écosystéme de santé complet pour vous aidez a mieux gérer vos donnez et votre santé 
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                        <div key={feature.name} className="pt-6 z-10">
                            <div className="flow-root bg-accent-low rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                    <p className="mt-5 text-base text-gray-500">
                                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
