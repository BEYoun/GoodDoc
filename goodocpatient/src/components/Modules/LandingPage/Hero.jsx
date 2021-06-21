import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="text-center pb-12">
      <h1
        className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Réservez votre consultation virtuel ou physique chez</span>{' '}
        <span className="block text-primary xl:inline">un professionnel de santé</span>
      </h1>
      
      <p
        className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Trouvez votre médecin le plus proche
      </p>

      <form action="#" className="mt-12 sm:max-w-3xl sm:w-full sm:flex mx-auto">
        <div className="min-w-0 flex-1">
          <label htmlFor="hero_email" className="sr-only">
            Médecin, Etablissement, Spécialité...
          </label>
          <input
            id="hero_email"
            type="email"
            className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-accent focus:ring-accent"
            placeholder="Médecin, Etablissement, Spécialité..."/>
        </div>
        <div className="min-w-0 sm:ml-3 w-full sm:w-32 mt-4 sm:mt-0">
          <label htmlFor="hero_email" className="sr-only">
            Où ?
          </label>
          <input
            id="hero_email"
            type="email"
            className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-accent focus:ring-accent"
            placeholder="Où ?"/>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <Link
            to="/search"
            className="block w-full rounded-md border border-transparent px-5 py-3 bg-accent text-base font-medium shadow hover:bg-accent-deep focus:outline-none focus:ring-2 focus:ring-accent-deep focus:ring-offset-2 sm:px-10">
            Rechercher
          </Link>
        </div>
      </form>

      <div className="mt-5 max-w-xl mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-deep md:py-4 md:text-lg md:px-10">
            S’enregistrer
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
            Vous etes professionnel de santé?
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero
