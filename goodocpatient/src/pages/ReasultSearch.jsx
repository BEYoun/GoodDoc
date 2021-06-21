import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Header from '../components/Modules/SearchPage/Header'


const ReasultSearch = () => {
    return (
        <div className="bg-white">
            <div className="bg-primary">
                {/* Header */}
                <Header/>
                {/* Header section with select menu */}
                <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                        <div className="max-w-xl">
                            <h2 className="text-xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-xl">
                                Filtre
                            </h2>
                        </div>
                        <div className="mt-10 w-full max-w-xs lg:mt-0">
                        <label htmlFor="currency" className="block text-base font-medium text-white">
                            Choix region
                        </label>
                        <div className="mt-1.5 relative">
                            <select
                            id="currency"
                            name="currency"
                            className="block w-full bg-none bg-white border border-transparent focus:ring-white focus:border-white rounded-md"
                            defaultValue="United States (USD)"
                            >
                            <option className="">Argentina (ARS)</option>
                            <option className="">Australia (AUD)</option>
                            <option className="">United States (USD)</option>
                            <option className="">Canada (CAD)</option>
                            <option className="">France (EUR)</option>
                            <option className="">Japan (JPY)</option>
                            <option className="">Nigeria (NGN)</option>
                            <option className="">Switzerland (CHF)</option>
                            <option className="">United Kingdom (GBP)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                            <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ReasultSearch
