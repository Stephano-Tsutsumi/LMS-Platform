import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
// import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Luffy the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="Science"
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id="456"
          name="Zoro the Number Swordsman"
          topic="Derivatives & Integrals"
          subject="Math"
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id="789"
          name="Nami the Cartographer"
          topic="Map Making Lecture"
          subject="Cartography"
          duration={45}
          color='#BDE7FF'
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA/>
      </section>

    </main>
  )
}

export default Page